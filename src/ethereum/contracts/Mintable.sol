pragma solidity ^0.4.18;

import "./lib/Ownable.sol";

contract Mintable is Ownable {
  address public minter;

  event MinterChanged (address indexed _previousMinter, address indexed _newMinter);

  constructor () public {
    minter = msg.sender;
  }

  modifier onlyMinter () {
    require(msg.sender == minter);
    _;
  }

  function setMinter (address _newMinter) public onlyOwner {
    require(_newMinter != address(0));
    emit MinterChanged(minter, _newMinter);
    minter = _newMinter;
  }
}
