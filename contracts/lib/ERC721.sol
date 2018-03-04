pragma solidity ^0.4.18;

import "./SafeMath.sol";

contract ERC721TokenReceiver {
	function onNFTReceived(address _from, uint256 _tokenId, bytes data) external returns(bytes4);
}

contract ERC721 {
  using SafeMath for uint256;

  mapping (uint256 => address) internal tokenOwner;
  mapping (uint256 => address) internal tokenApprovals;
  mapping (address => uint256[]) internal ownedTokens;
  mapping (uint256 => uint256) internal ownedTokensIndex;

  event Transfer (address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval (address indexed _owner, address indexed _approved, uint256 _tokenId);
  event ApprovalForAll (address indexed _owner, address indexed _operator, bool _approved);

  function balanceOf (address _owner) public view returns (uint256) {
    return ownedTokens[_owner].length;
  }

  function tokensOf (address _owner) public view returns (uint256[]) {
    return ownedTokens[_owner];
  }

  function ownerOf (uint256 _tokenId) public view returns (address) {
    address owner = tokenOwner[_tokenId];
    require(owner != address(0));
    return owner;
  }

  function approvedFor (uint256 _tokenId) public view returns (address) {
    return tokenApprovals[_tokenId];
  }

  function approve (address _to, uint256 _tokenId) public onlyApprovedFor(_tokenId) {
    address owner = ownerOf(_tokenId);
    require(_to != owner);
    if (approvedFor(_tokenId) != 0 || _to != 0) {
      tokenApprovals[_tokenId] = _to;
      Approval(owner, _to, _tokenId);
    }
  }

  function takeOwnership (uint256 _tokenId) public {
    require(msg.sender == approvedFor(_tokenId));
    performTransfer(ownerOf(_tokenId), msg.sender, _tokenId);
  }

  function unsafeTransfer (address _from, address _to, uint256 _tokenId) public onlyApprovedFor(_tokenId) {
    performTransfer(_from, _to, _tokenId);
  }

  // function transferFrom (address _from, address _to, uint256 _tokenId, bytes[] data) public onlyApprovedFor(_tokenId) {
  //   performTransfer(_from, _to, _tokenId);
  //   checkERC721TokenReceiver(_from, _to, _tokenId);
  // }

  function transferFrom (address _from, address _to, uint256 _tokenId) public onlyApprovedFor(_tokenId) {
    performTransfer(_from, _to, _tokenId);
    checkERC721TokenReceiver(_from, _to, _tokenId);
  }

  function performTransfer (address _from, address _to, uint256 _tokenId) internal {
    clearApproval(_tokenId);
    removeTokenFrom(_from, _tokenId);
    giveTokenTo(_to, _tokenId);
    Transfer(_from, _to, _tokenId);
  }

  bytes4 constant internal MAGIC_NFT_RECEIVED_RETURN_NUMBER = bytes4(keccak256("onNFTReceived(address,uint256,bytes)"));

  function checkERC721TokenReceiver (address _from, address _to, uint256 _tokenId) internal {
    if (isContract(_to)) {
      bytes4 returnValue = ERC721TokenReceiver(_to).onNFTReceived(_from, _tokenId, "");
      require(returnValue == MAGIC_NFT_RECEIVED_RETURN_NUMBER);
    }
  }

  function isContract(address addr) internal view returns (bool) {
    uint size;
    assembly { size := extcodesize(addr) }
    return size > 0;
  }

  function clearApproval (uint256 _tokenId) internal {
    tokenApprovals[_tokenId] = address(0);
  }

  function removeTokenFrom (address _from, uint256 _tokenId) internal {
    uint256 tokenIndex = ownedTokensIndex[_tokenId];
    uint256 lastTokenIndex = balanceOf(_from).sub(1);
    uint256 lastToken = ownedTokens[_from][lastTokenIndex];

    tokenOwner[_tokenId] = address(0);
    ownedTokens[_from][tokenIndex] = lastToken;
    ownedTokens[_from][lastTokenIndex] = 0;

    ownedTokens[_from].length--;
    ownedTokensIndex[_tokenId] = 0;
    ownedTokensIndex[lastToken] = tokenIndex;
  }

  function giveTokenTo (address _to, uint256 _tokenId) internal {
    require(_to != address(0));
    assert(ownerOf(_tokenId) == address(0));
    tokenOwner[_tokenId] = _to;
    ownedTokensIndex[_tokenId] = ownedTokens[_to].push(_tokenId).sub(1);
  }

  modifier onlyApprovedFor (uint256 _tokenId) {
    require(
      msg.sender == ownerOf(_tokenId) ||
      msg.sender == approvedFor(_tokenId)
    );
    _;
  }
}
