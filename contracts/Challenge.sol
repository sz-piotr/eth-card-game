pragma solidity ^0.4.0;

import "./Ownable.sol";
import "./CardTypes.sol";
import "./Cards.sol";

contract Challenge is Ownable {

    address challenger;
    address winner;
    Cards cards;
    uint ownerHero;
    uint challengerHero;
    uint[5] ownerCards;
    uint[5] challengerCards;

    function Challenge(address cardsAddress, uint hero,  uint[5] _cards) public {
        cards = Cards(cardsAddress);
        ownerHero = hero;
        ownerCards = _cards;
    }

    function accept(uint hero,  uint[5] _cards) public {
        require(owner != msg.sender);
        challenger = msg.sender;
        challengerHero = hero;
        challengerCards = _cards;
    }

    function battle() public onlyOwner returns(uint, uint) {
        require(challenger != address(0));
        //integration test
        return cards.getCard(ownerHero);
    }

}
