pragma solidity ^0.4.0;

import "./Ownable.sol";

contract CardTypes is Ownable {

    uint8 public elementAmount;

    struct CardType {
        uint dataId;
        uint damage;
        uint8 element;
    }

    struct Hero {
        uint dataId;
        uint health;
    }

    mapping (uint => CardType) cardTypes;
    mapping (uint => Hero) heroes;
    mapping (uint => bool) ishero;

    function createCardType(uint id, uint dataId, uint damage, uint8 element) public onlyOwner {
        cardTypes[id] = CardType(dataId, damage, element);
        ishero[id] = false;
    }

    function createHero(uint id, uint dataId, uint health) public onlyOwner {
        heroes[id] = Hero(dataId, health);
        ishero[id] = true;
    }

    function getCardType(uint id) public view returns(uint, uint, uint8) {
        CardType memory cardType = cardTypes[id];
        return (cardType.dataId, cardType.damage, cardType.element);
    }

    function getHero(uint id) public view returns(uint, uint) {
        Hero memory hero = heroes[id];
        return (hero.dataId, hero.health);
    }

}
