pragma solidity ^0.4.18;

import "./lib/Ownable.sol";
import "./lib/Convert.sol";
import "./CardTypes.sol";
import "./Cards.sol";


contract Challenges is Ownable {

  enum challengeResultEnum {INITIATOR_WIN, CHALLENGER_WIN, DRAFT, UNKNOWN}

  struct Challenge {
    address initiator;
    address challenger;
    challengeResultEnum challengeResult;
    bytes32 initiatorCardsHash;
    uint challengerHero;
    uint[5] challengerCards;
}

  uint constant cardAmount = 5;

  Cards cards;
  CardTypes cardTypes;

  Challenge[] public challenges;

  mapping(uint => address) challengeToInitiator;

  constructor(address cardsAddress, address cardTypesAddress) public {
    cards = Cards(cardsAddress);
    cardTypes = CardTypes(cardTypesAddress);
  }

  function challenge(bytes32 cardsHash) public {
    uint[5] memory emptyArray;
    uint id = challenges.push(Challenge(msg.sender, address(0), challengeResultEnum.UNKNOWN,
      cardsHash, 0, emptyArray)) - 1;
    challengeToInitiator[id] = msg.sender;
  }

  function accept(uint id, uint hero, uint[cardAmount] _cards) public {
    Challenge storage _challenge = challenges[id];
    //require(_challenge.initiator != msg.sender);
    require(_challenge.challenger == address(0));
    _challenge.challenger = msg.sender;
    _challenge.challengerHero = hero;
    _challenge.challengerCards = _cards;
  }

  function battle(uint id, uint initiatorHero, uint[cardAmount] initiatorCards, string salt) public {
    Challenge storage _challenge = challenges[id];
    require(_challenge.initiator == msg.sender);
    checkHash(_challenge.initiatorCardsHash, initiatorHero, initiatorCards, salt);
    uint initiatorHeroHealth = getHero(initiatorHero);
    uint challengerHeroHealth = getHero(_challenge.challengerHero);
    uint8 elementAmount = cardTypes.elementAmount();
    uint initiatorElement;
    uint challengerElement;
    uint initiatorDamage;
    uint challengerDamage;
    for (uint i = 0; i != elementAmount; i++) {
      (challengerElement, challengerDamage) = getCard(_challenge.challengerCards[0]);
      (initiatorElement, initiatorDamage) = getCard(initiatorCards[0]);
      uint result = (elementAmount + initiatorElement - challengerElement) % elementAmount;
      if(result != 0) {
        if (result % 2 == 1) {
          initiatorDamage *= 2;
        } else if (result % 2 == 0) {
          challengerDamage *= 2;
        }
      }
      initiatorHeroHealth -= challengerDamage;
      challengerHeroHealth -= initiatorDamage;
      if (initiatorHeroHealth <= 0 || challengerHeroHealth <= 0) {
        break;
      }
    }
    if (initiatorHeroHealth > challengerHeroHealth) {
      _challenge.challengeResult = challengeResultEnum.INITIATOR_WIN;
    } else if (challengerHeroHealth > initiatorHeroHealth) {
      _challenge.challengeResult = challengeResultEnum.CHALLENGER_WIN;
    } else {
      _challenge.challengeResult = challengeResultEnum.DRAFT;
    }
  }

  function getHero(uint id) private view returns (uint) {
    uint cardTypeId;
    (cardTypeId, ,) = cards.cards(id);
    uint heroHealth;
    (heroHealth) = cardTypes.getHero(cardTypeId);
    return heroHealth;
  }

  function getCard(uint id) public view returns (uint, uint) {
    uint actionId;
    (actionId, ,) = cards.cards(id);
    return cardTypes.getAction(actionId);
  }

  function getResult(uint id) public view returns (challengeResultEnum) {
   return challenges[id].challengeResult;
  }

  function checkHash(bytes32 initiatorCardsHash, uint initiatorHero, uint[cardAmount] initiatorCards, string salt) private pure {
    string memory cardIds = Convert.uintConcat(initiatorCards[0], initiatorCards[1], initiatorCards[2],
      initiatorCards[3],initiatorCards[4]);
    bytes32 cardsHash = keccak256(Convert.uint2str(initiatorHero), cardIds, salt);
    require(initiatorCardsHash == cardsHash);
  }

}
