pragma solidity ^0.4.0;

contract Counter {
  int256 public value;

  function increment () public {
    value++;
  }

  function decrement () public {
    value--;
  }
}
