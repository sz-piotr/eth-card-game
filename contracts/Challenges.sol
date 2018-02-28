pragma solidity ^0.4.0;

import "./Ownable.sol";
import "./CardTypes.sol";
import "./Cards.sol";

contract Challenges is ERC721 {

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

    Challenge[] challenges;

    function Challenges(address cardsAddress) public {
        cards = Cards(cardsAddress);
    }

    function challenge(uint hero,  uint[5] _cards) public {
        uint id = challenges.push(Challenge(msg.sender, address(0), address(0), hero, 0, _cards, [])) - 1;
        giveTokenTo(_to, id);
    }

    function accept(uint id, uint hero,  uint[5] _cards) public {
        Challenge storage challenge = challenges[id];
        require(challenge.challenger != msg.sender);
        require(challenge.challenged == address(0));
        challenge.challenged = msg.sender;
        challenge.challengedHero = hero;
        challenge.challengedCards = _cards;
    }

    function battle(uint id) public returns(uint, uint) {
        Challenge memory challenge = challenges[id];
        require(challenge.challenger == msg.sender);
        return cards.getCard(challenge.challengerHero);
    }

}
