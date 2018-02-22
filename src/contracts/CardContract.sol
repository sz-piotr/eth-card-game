pragma solidity ^0.4.0;

contract CardStore {

    struct Card {
        uint cid;
    }

    event NewCard(uint cardId);

    Card[] public cards;

    mapping (uint => address) cardToOwner;

    function createCard() public {
          uint id = cards.push(Card(1)) - 1;
          cardToOwner[id] = msg.sender;
    }

    function getAll() external view returns(Card[]) {
    return cards;
  }

    function getAllCardsId() external view returns(uint[]) {
    uint[] memory result = new uint[](cards.length);
    for (uint i = 0; i < cards.length; i++) {
        result[i] = cards[i].cid;
    }
    return result;
  }

}
