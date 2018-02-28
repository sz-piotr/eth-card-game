pragma solidity ^0.4.18;

import "./lib/Ownable.sol";
import "./Cards.sol";
import "./lib/Random.sol";

contract Minter is Ownable {
  Cards cards;
  Random random;

  uint numberOfCommons = 30;
  uint numberOfUncommons = 20;
  uint numberOfRares = 10;

  uint commonTreshold = 60;
  uint uncommonThreshold = commonTreshold + 30;
  uint shinyChance = 10;

  uint packPrice = 0.01 ether;

  function Minter (address _cardsAddress, address _rngAddress) public {
    random = Random(_rngAddress);
    cards = Cards(_cardsAddress);
  }

  function purchasePack () public payable {
    require(msg.value == packPrice);

    mintRandomCard();
    mintRandomCard();
    mintRandomCard();
  }

  function mintRandomCard () private {
    uint rarityRandom = random.random(100);
    bool isShiny = random.random(100) < shinyChance;
    uint32 metadata = isShiny ? 0x1 : 0x0;
    if (rarityRandom < commonTreshold) {
      mintCommonCard(metadata);
    } else if (rarityRandom < uncommonThreshold) {
      mintUncommonCard(metadata);
    } else {
      mintRareCard(metadata);
    }
  }

  function mintCommonCard (uint32 _metadata) private {
    uint64 cardNumber = uint64(random.random(numberOfCommons));
    cards.mint(msg.sender, cardNumber, 1, _metadata);
  }

  function mintUncommonCard (uint32 _metadata) private {
    uint64 cardNumber = uint64(random.random(numberOfUncommons) + numberOfCommons);
    cards.mint(msg.sender, cardNumber, 1, _metadata);
  }

  function mintRareCard (uint32 _metadata) private {
    uint64 cardNumber = uint64(random.random(numberOfRares) + numberOfUncommons + numberOfCommons);
    cards.mint(msg.sender, cardNumber, 1, _metadata);
  }
}
