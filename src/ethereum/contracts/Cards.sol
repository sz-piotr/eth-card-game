pragma solidity ^0.4.18;

import "./Mintable.sol";
import "./lib/ERC721Token.sol";

contract Cards is Mintable, ERC721Token {
  struct Card {
    uint64 number;
    uint32 level;
    uint32 metadata;
  }

  Card[] public cards;

  constructor () public {
    minter = msg.sender;
  }

  function getCard (uint _tokenId) public view returns (uint64 _number, uint32 _level, uint32 _metadata) {
    Card storage card = cards[_tokenId];
    return (card.number, card.level, card.metadata);
  }

  function mint (address _to, uint64 _number, uint32 _level, uint32 _metadata) public onlyMinter returns (uint) {
    uint id = cards.push(Card(_number, _level, _metadata)) - 1;
    giveTokenTo(_to, id);
    emit Transfer(0x0, _to, id);
    return id;
  }
}
