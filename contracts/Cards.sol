pragma solidity ^0.4.18;

import "./Mintable.sol";

contract Cards is Mintable {
  struct Card {
    uint number;
    uint level;
    bool isShining;
  }

  Card[] public cards;
  mapping (uint => address) public ownerOf;

  function Cards () public {
    minter = msg.sender;
  }

  function mint (address cardOwner, uint number, uint level, bool isShining) public onlyMinter {
    uint id = cards.push(Card(number, level, isShining)) - 1;
    ownerOf[id] = cardOwner;
  }
}
