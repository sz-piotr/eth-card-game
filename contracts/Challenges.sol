pragma solidity ^0.4.0;

import "./lib/Ownable.sol";
import "./CardTypes.sol";
import "./Cards.sol";


contract Challenges is ERC721 {

  struct Challenge {
    address initiator;
    address challenger;
    address winner;
    uint initiatorHero;
    uint challengerHero;
    uint[5] initiatorCards;
    uint[5] challengerCards;
  }

  uint cardAmount = 5;

  Cards cards;
  CardTypes cardTypes;

  Challenge[] challenges;

  function Challenges(address cardsAddress, address cardTypesAddress) public {
    cards = Cards(cardsAddress);
    cardTypes = CardTypes(cardTypesAddress);
  }

  function challenge(uint hero, uint[cardAmount] _cards) public returns (uint){
    uint[5] memory emptyArray;
    uint id = challenges.push(Challenge(msg.sender, address(0), address(0), hero, 0, _cards, emptyArray)) - 1;
    giveTokenTo(msg.sender, id);
    return id;
  }

  function accept(uint id, uint hero, uint[cardAmount] _cards) public {
    Challenge storage _challenge = challenges[id];
    require(_challenge.initiator != msg.sender);
    require(_challenge.challenger == address(0));
    _challenge.challenger = msg.sender;
    _challenge.challengerHero = hero;
    _challenge.challengerCards = _cards;
  }

  function battle(uint id) public view returns (address) {
    Challenge storage _challenge = challenges[id];
    require(_challenge.initiator == msg.sender);
    uint initiatorHeroHealth = getHero(_challenge.initiatorHero);
    uint challengerHeroHealth = getHero(_challenge.challengerHero);
    uint8 elementAmount = cardTypes.elementAmount();
    uint initiatorElement;
    uint challengerDamage;
    uint challengerElement;
    uint initiatorDamage;
    for (uint i = 0; i != cardAmount; i++) {
      (, initiatorElement, challengerDamage) = getCard(_challenge.initiatorCards[i]);
      (, challengerElement, challengerDamage) = getCard(_challenge.challengerCards[i]);
      uint result = (elementAmount + initiatorElement - challengerElement) % elementAmount;
      if (result % 2 == 1) {
        initiatorDamage *= 2;
      } else if (result % 2 == 0) {
        challengerDamage *= 2;
      }

      initiatorHeroHealth -= challengerDamage;
      challengerHeroHealth -= initiatorDamage;
      if (initiatorHeroHealth <= 0 || challengerHeroHealth <= 0) {
        break;
      }
    }
    if (initiatorHeroHealth > challengerHeroHealth) {
      _challenge.winner = _challenge.initiator;
    } else if (challengerHeroHealth > initiatorHeroHealth) {
      _challenge.winner = _challenge.challenger;
    }
    return _challenge.winner;
  }

  function checkWinner(uint id) public view returns (address) {
    return challenges[id].winner;
  }

  function getHero(uint id) private view returns (uint) {
    uint cardTypeId;
    (cardTypeId, ,) = cards.cards(id);
    uint heroHealth;
    (, heroHealth) = cardTypes.getHero(cardTypeId);
    return heroHealth;
  }

  function getCard(uint id) private view returns (uint, uint, uint) {
    uint cardTypeId;
    (cardTypeId, ,) = cards.cards(id);
    return cardTypes.getCardType(cardTypeId);
  }

}
