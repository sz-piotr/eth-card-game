pragma solidity ^0.4.18;

import "./Ownable.sol";

contract Mintable is Ownable {
  address public minter;

  function Mintable () public {
    minter = msg.sender;
  }

  modifier onlyMinter () {
    require(msg.sender == minter);
    _;
  }

  function setMinter (address newMinter) public onlyOwner {
    require(newMinter != address(0));
    minter = newMinter;
  }
}
