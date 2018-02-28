pragma solidity ^0.4.18;

contract Random {
  uint256 _seed;

  function random256() public returns (uint256) {
    _seed = uint256(keccak256(
      _seed,
      block.blockhash(block.number - 1),
      block.coinbase,
      block.difficulty
    ));
    return _seed;
  }

  function random(uint256 upperBound) public returns (uint256) {
    return random256() % upperBound;
  }
}
