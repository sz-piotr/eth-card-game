pragma solidity ^0.4.23;

import "./lib/Ownable.sol";
import "./lib/Random.sol";
import "./Cards.sol";

contract Minter is Ownable, Random {
  event ChancesUpdated (uint _commonChance, uint _rareChance, uint _epicChance, uint _shinyChance);
  event PriceUpdated (uint _packPrice);
  event PackPurchased (address indexed _buyer, uint _firstCardId);

  Cards cards;

  struct Expansion {
    uint32 commonHeroCount;
    uint32 rareHeroCount;
    uint32 epicHeroCount;
    uint32 commonActionCount;
    uint32 rareActionCount;
    uint32 epicActionCount;
  }
  Expansion[] public expansions;

  uint constant private EXPANSION_OFFSET = 1000;
  uint constant private COMMON_OFFSET = 100;
  uint constant private RARE_OFFSET = 200;
  uint constant private EPIC_OFFSET = 300;
  uint constant private ACTION_OFFSET = 500;

  uint public commonChance = 60;
  uint public rareChance = 30;
  uint public epicChance = 10;
  uint public shinyChance = 10;

  uint public packPrice = 0.01 ether;

  constructor (address cardsAddress) public {
    cards = Cards(cardsAddress);
  }

  function createExpansion (uint32 _commonHeroCount, uint32 _rareHeroCount, uint32 _epicHeroCount,
     uint32 _commonActionCount, uint32 _rareActionCount, uint32 _epicActionCount) public onlyOwner {
    expansions.push(Expansion(_commonHeroCount, _rareHeroCount, _epicHeroCount, _commonActionCount, _rareActionCount, _epicActionCount));
  }

  function updateChances (uint _commonChance, uint _rareChance, uint _epicChance, uint _shinyChance) public onlyOwner {
    commonChance = _commonChance;
    rareChance = _rareChance;
    epicChance = _epicChance;
    shinyChance = _shinyChance;
    emit ChancesUpdated(commonChance, rareChance, epicChance, shinyChance);
  }

  function updatePrice (uint _packPrice) public onlyOwner {
    packPrice = _packPrice;
    emit PriceUpdated(packPrice);
  }

  function mintAnyCard (address _to, uint64 _number, uint32 _level, uint32 _metadata) public onlyOwner returns (uint) {
    return cards.mint(_to, _number, _level, _metadata);
  }

  function purchasePack (uint _expansionId) public payable {
    require(msg.value == packPrice);

    Expansion storage expansion = expansions[_expansionId];
    uint offset = (_expansionId + 1) * EXPANSION_OFFSET;

    uint firstCardId = mintRandomCard(expansion.commonHeroCount, expansion.rareHeroCount, expansion.epicHeroCount, offset);
    mintRandomCard(expansion.commonActionCount, expansion.rareActionCount, expansion.epicActionCount, offset + ACTION_OFFSET);
    mintRandomCard(expansion.commonActionCount, expansion.rareActionCount, expansion.epicActionCount, offset + ACTION_OFFSET);

    emit PackPurchased(msg.sender, firstCardId);
  }

  function mintRandomCard (uint32 commonCount, uint32 rareCount, uint32 epicCount, uint offset) private returns (uint) {
    uint rarityRandom = random(commonChance + rareChance + epicChance);
    uint32 metadata = (random(100) < shinyChance) ? 0x1 : 0x0;

    uint range = commonCount;
    if (rarityRandom < commonChance) {
      offset += COMMON_OFFSET;
      range = commonCount;
    } else if (rarityRandom < commonChance + rareChance) {
      offset += RARE_OFFSET;
      range = rareCount;
    } else {
      offset += EPIC_OFFSET;
      range = epicCount;
    }

    uint64 number = uint64(offset + random(range));
    return cards.mint(msg.sender, number, 1, metadata);
  }
}
 