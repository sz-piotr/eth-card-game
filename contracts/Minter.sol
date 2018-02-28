pragma solidity ^0.4.18;

import "./lib/Ownable.sol";
import "./lib/Random.sol";
import "./Cards.sol";

contract Minter is Ownable, Random {
  Cards cards;

  struct Expansion {
    uint64 offset;
    uint32 commonCount;
    uint32 rareCount;
    uint32 epicCount;
  }
  Expansion[] public expansions;

  uint public commonChance = 60;
  uint public rareChance = 30;
  uint public epicChance = 10;
  uint public shinyChance = 10;
  event ChancesUpdated (uint commonChance, uint rareChance, uint epicChance, uint shinyChance);

  uint public packPrice = 0.01 ether;
  event PriceUpdated (uint packPrice);

  function Minter (address cardsAddress) public {
    cards = Cards(cardsAddress);
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

  function purchasePack (uint _expansionId) public payable {
    require(msg.value == packPrice);

    Expansion storage expansion = expansions[_expansionId];

    mintRandomCard(expansion);
    mintRandomCard(expansion);
    mintRandomCard(expansion);
  }

  function mintRandomCard (Expansion _expansion) private {
    uint rarityRandom = random(commonChance + rareChance + epicChance);
    bool isShining = random(100) < shinyChance;
    uint32 metadata = isShining ? 0x1 : 0x0;
    if (rarityRandom < commonChance) {
      mintCommonCard(_expansion, metadata);
    } else if (rarityRandom < commonChance + rareChance) {
      mintRareCard(_expansion, metadata);
    } else {
      mintEpicCard(_expansion, metadata);
    }
  }

  function mintCommonCard (Expansion _expansion, uint32 _metadata) private {
    uint64 offset = _expansion.offset;
    mintCardFromRange(offset, _expansion.commonCount, _metadata);
  }

  function mintRareCard (Expansion _expansion, uint32 _metadata) private {
    uint64 offset = _expansion.offset + _expansion.commonCount;
    mintCardFromRange(offset, _expansion.rareCount, _metadata);
  }

  function mintEpicCard (Expansion _expansion, uint32 _metadata) private {
    uint64 offset = _expansion.offset + _expansion.commonCount + _expansion.rareCount;
    mintCardFromRange(offset, _expansion.epicCount, _metadata);
  }

  function mintCardFromRange (uint64 _offset, uint32 _range, uint32 _metadata) private {
    uint64 number = uint64(_offset + random(_range));
    cards.mint(msg.sender, number, 1, _metadata);
  }
}
