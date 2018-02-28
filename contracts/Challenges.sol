pragma solidity ^0.4.0;

import "./Ownable.sol";
import "./CardTypes.sol";
import "./Cards.sol";


contract Challenges is ERC721{

    struct Challenge {
        address challenger;
        address challenged;
        address winner;
        uint challengerHero;
        uint challengedHero;
        uint[5] challengerCards;
        uint[5] challengedCards;
    }


    Cards cards;
    CardTypes cardTypes;

    Challenge[] challenges;

    function Challenges(address cardsAddress, address cardTypesAddress) public {
        cards = Cards(cardsAddress);
        cardTypes = CardTypes(cardTypesAddress);
    }

    function challenge(uint hero,  uint[5] _cards) public returns(uint){
        uint[5] emptyArray;
        uint id = challenges.push(Challenge(msg.sender, address(0), address(0), hero, 0, _cards, emptyArray)) - 1;
        giveTokenTo(msg.sender, id);
        return id;
    }

    function accept(uint id, uint hero,  uint[5] _cards) public {
        Challenge storage _challenge = challenges[id];
        require(_challenge.challenger != msg.sender);
        require(_challenge.challenged == address(0));
        _challenge.challenged = msg.sender;
        _challenge.challengedHero = hero;
        _challenge.challengedCards = _cards;
    }

    function battle(uint id) public returns(address) {
        Challenge memory _challenge = challenges[id];
        require(_challenge.challenger == msg.sender);
        uint challengerHeroHealth = getHero(_challenge.challengerHero);
        uint challengedHeroHealth = getHero(_challenge.challengedHero);
        uint8 elementAmount = cardTypes.elementAmount();
        uint challengerElement;
        uint challengedDamage;
        uint challengedElement;
        uint challengerDamage;
        for(uint i =0; i!=5; i++) {
            (, challengerElement, challengedDamage) = getCard(_challenge.challengerCards[i]);
            (, challengedElement, challengedDamage) = getCard(_challenge.challengedCards[i]);
            uint result = (elementAmount + challengerElement - challengedElement) % elementAmount;
            if (result % 2 == 1) {
                challengerDamage *= 2;
            } else if (result % 2 == 0) {
                challengedDamage *= 2;
            }

            challengerHeroHealth -= challengedDamage;
            challengedHeroHealth -= challengerDamage;
            if(challengerHeroHealth<=0 || challengedHeroHealth<=0) {
                break;
            }
        }
        if(challengerHeroHealth > challengedHeroHealth) {
            _challenge.winner = _challenge.challenger;
        } else if(challengedHeroHealth > challengerHeroHealth){
            _challenge.winner = _challenge.challenged;
        }
        return _challenge.winner;
    }

    function checkWinner(uint id) public view returns(address) {
        return challenges[id].winner;
    }

    function getHero(uint id) private returns(uint) {
        uint cardTypeId;
        (cardTypeId, ,) = cards.cards(id);
        uint heroHealth;
        (,heroHealth) = cardTypes.getHero(cardTypeId);
        return heroHealth;
    }

    function getCard(uint id) private returns(uint, uint, uint) {
        uint cardTypeId;
        (cardTypeId, ,) = cards.cards(id);
        return cardTypes.getCardType(cardTypeId);
    }

}
