pragma solidity ^0.4.18;

import "./Ownable.sol";
import "./Cards.sol";
import "./Random.sol";

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

  function Minter (address cardsAddress, address rngAddress) public {
    random = Random(rngAddress);
    cards = Cards(cardsAddress);
  }

  function purchasePack () public payable {
    require(msg.value == packPrice);

    mintRandomCard();
    mintRandomCard();
    mintRandomCard();
  }

  function mintRandomCard () private {
    uint rarityRandom = random.random(100);
    bool isShining = random.random(100) < shinyChance;
    if (rarityRandom < commonTreshold) {
      mintCommonCard(isShining);
    } else if (rarityRandom < uncommonThreshold) {
      mintUncommonCard(isShining);
    } else {
      mintRareCard(isShining);
    }
  }

  function mintCommonCard (bool isShining) private {
    uint cardNumber = random.random(numberOfCommons);
    cards.mint(msg.sender, cardNumber, 1, isShining);
  }

  function mintUncommonCard (bool isShining) private {
    uint cardNumber = random.random(numberOfUncommons) + numberOfCommons;
    cards.mint(msg.sender, cardNumber, 1, isShining);
  }

  function mintRareCard (bool isShining) private {
    uint cardNumber = random.random(numberOfRares) + numberOfUncommons + numberOfCommons;
    cards.mint(msg.sender, cardNumber, 1, isShining);
  }
}
