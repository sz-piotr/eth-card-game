pragma solidity ^0.4.18;

import "./Mintable.sol";

contract Cards is Mintable {
  struct Card {
    uint64 number;
    uint32 level;
    uint32 metadata;
  }

  Card[] public cards;
  mapping (uint256 => address) public ownerOf;

  function Cards () public {
    minter = msg.sender;
  }

  function mint (address cardOwner, uint64 number, uint32 level, uint32 metadata) public onlyMinter {
    uint id = cards.push(Card(number, level, metadata)) - 1;
    ownerOf[id] = cardOwner;
  }
}
