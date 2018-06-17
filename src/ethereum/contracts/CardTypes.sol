pragma solidity ^0.4.0;

import "./lib/Ownable.sol";

contract CardTypes is Ownable {

  uint8 public elementAmount = 5;

  struct CardType {
    uint damage;
    uint8 element;
  }

  struct Hero {
    uint health;
  }

  mapping(uint => CardType) cardTypes;
  mapping(uint => Hero) heroes;
  mapping(uint => bool) isHero;

  function createCardType(uint id, uint damage, uint8 element) public onlyOwner {
    cardTypes[id] = CardType(damage, element);
    isHero[id] = false;
  }

  function createHero(uint id, uint health) public onlyOwner {
    heroes[id] = Hero(health);
    isHero[id] = true;
  }

  function getCardType(uint id) public view returns (uint, uint8) {
    assert(isHero[id] == false);
    CardType storage cardType = cardTypes[id];
    return (cardType.damage, cardType.element);
  }

  function getHero(uint id) public view returns (uint) {
    assert(isHero[id] == true);
    Hero storage hero = heroes[id];
    return (hero.health);
  }
}
