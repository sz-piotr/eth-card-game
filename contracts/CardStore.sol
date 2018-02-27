pragma solidity ^0.4.0;

contract CardStore {
  struct Card {
    uint cid;
    string name;
  }

  event NewCard (uint cardId);

  Card[] public cards;

  mapping (uint => address) cardToOwner;
  mapping (address => uint) ownerCardCount;

  function createCard () public {
    uint id = cards.push(Card(1, "XD")) - 1;
    cardToOwner[id] = msg.sender;
    ownerCardCount[msg.sender]++;
  }

  function getMyCardsId () external view returns (uint[]) {
    uint[] memory result = new uint[](ownerCardCount[msg.sender]);
    uint counter = 0;
    for (uint i = 0; i < cards.length; i++) {
      if (cardToOwner[i] == msg.sender) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }

  function getCardById (uint id) public view returns (uint, string) {
    Card memory c = cards[id];
    return (c.cid, c.name);
  }
}
