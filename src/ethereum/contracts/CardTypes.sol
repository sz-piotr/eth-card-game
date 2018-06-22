pragma solidity ^0.4.0;

import "./lib/Ownable.sol";

contract CardTypes is Ownable {

  uint8 public elementAmount = 5;

  struct Action {
    uint damage;
    uint8 element;
  }

  struct Hero {
    uint health;
  }

  mapping(uint => Action) actions;
  mapping(uint => Hero) heroes;
  mapping(uint => bool) isHero;

  function createAction(uint id, uint damage, uint8 element) public onlyOwner {
    actions[id] = Action(damage, element);
    isHero[id] = false;
  }

  function createHero(uint id, uint health) public onlyOwner {
    heroes[id] = Hero(health);
    isHero[id] = true;
  }

  function getAction(uint id) public view returns (uint, uint8) {
    assert(isHero[id] == false);
    Action storage action = actions[id];
    return (action.damage, action.element);
  }

  function getHero(uint id) public view returns (uint) {
    assert(isHero[id] == true);
    Hero storage hero = heroes[id];
    return (hero.health);
  }
}
