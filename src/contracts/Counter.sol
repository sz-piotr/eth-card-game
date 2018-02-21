pragma solidity ^0.4.0;

contract Counter {
  int public value;
  event Change(int value);

  function increment () public {
    value++;
    Change(value);
  }

  function decrement () public {
    value--;
    Change(value);
  }
}
