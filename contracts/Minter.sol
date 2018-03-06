pragma solidity ^0.4.18;

import "./lib/Ownable.sol";
import "./lib/Random.sol";
import "./Cards.sol";

contract Minter is Ownable, Random {
  event ChancesUpdated (uint _commonChance, uint _rareChance, uint _epicChance, uint _shinyChance);
  event PriceUpdated (uint _packPrice);
  event PackPurchased (address indexed _buyer, uint _firstCardId);

  Cards cards;

  struct Expansion {
    uint64 offset;
    uint32 commonCount;
    uint32 rareCount;
    uint32 epicCount;
  }
  Expansion[] public expansions;
  uint64 private nextOffset = 0;

  uint public commonChance = 60;
  uint public rareChance = 30;
  uint public epicChance = 10;
  uint public shinyChance = 10;

  uint public packPrice = 0.01 ether;

  function Minter (address cardsAddress) public {
    cards = Cards(cardsAddress);
  }

  function createExpansion (uint32 _commonCount, uint32 _rareCount, uint32 _epicCount) public onlyOwner {
    expansions.push(Expansion(nextOffset, _commonCount, _rareCount, _epicCount));
    nextOffset += _commonCount + _rareCount + _epicCount;
  }

  function updateChances (uint _commonChance, uint _rareChance, uint _epicChance, uint _shinyChance) public onlyOwner {
    commonChance = _commonChance;
    rareChance = _rareChance;
    epicChance = _epicChance;
    shinyChance = _shinyChance;
    ChancesUpdated(commonChance, rareChance, epicChance, shinyChance);
  }

  function updatePrice (uint _packPrice) public onlyOwner {
    packPrice = _packPrice;
    PriceUpdated(packPrice);
  }

  function mintAnyCard (address _to, uint64 _number, uint32 _level, uint32 _metadata) public onlyOwner {
    cards.mint(_to, _number, _level, _metadata);
  }

  function purchasePack (uint _expansionId) public payable {
    require(msg.value == packPrice);

    Expansion storage expansion = expansions[_expansionId];

    uint firstCardId = mintRandomCard(expansion);
    mintRandomCard(expansion);
    mintRandomCard(expansion);

    PackPurchased(msg.sender, firstCardId);
  }

  function mintRandomCard (Expansion _expansion) private returns (uint) {
    uint rarityRandom = random(commonChance + rareChance + epicChance);
    uint32 metadata = (random(100) < shinyChance) ? 0x1 : 0x0;

    uint64 offset = _expansion.offset;
    uint range = _expansion.commonCount;
    if (rarityRandom >= commonChance) {
      offset += _expansion.commonCount;
      range = _expansion.rareCount;
    }
    if (rarityRandom >= commonChance + rareChance) {
      offset += _expansion.rareCount;
      range = _expansion.epicCount;
    }

    uint64 number = uint64(offset + random(range));
    return cards.mint(msg.sender, number, 1, metadata);
  }
}
