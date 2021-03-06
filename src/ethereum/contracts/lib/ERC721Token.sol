pragma solidity ^0.4.23;

import "./SafeMath.sol";
import "./ERC721TokenReceiver.sol";

contract ERC721Token {
  using SafeMath for uint256;

  mapping (uint256 => address) private tokenOwner;
  mapping (address => uint256[]) private ownedTokens;
  mapping (uint256 => uint256) private tokenIndex;

  mapping (uint256 => address) private tokenApprovals;
  mapping (address => mapping (address => bool)) private tokenOperators;

  /// @dev This emits when ownership of any NFT changes by any mechanism.
  ///  This event emits when NFTs are created (`from` == 0) and destroyed
  ///  (`to` == 0). Exception: during contract creation, any number of NFTs
  ///  may be created and assigned without emitting Transfer. At the time of
  ///  any transfer, the approved address for that NFT (if any) is reset to none.
  event Transfer (address indexed _from, address indexed _to, uint256 _tokenId);

  /// @dev This emits when the approved address for an NFT is changed or
  ///  reaffirmed. The zero address indicates there is no approved address.
  ///  When a Transfer event emits, this also indicates that the approved
  ///  address for that NFT (if any) is reset to none.
  event Approval (address indexed _owner, address indexed _approved, uint256 _tokenId);

  /// @dev This emits when an operator is enabled or disabled for an owner.
  ///  The operator can manage all NFTs of the owner.
  event ApprovalForAll (address indexed _owner, address indexed _operator, bool _approved);

  /// @notice Count all NFTs assigned to an owner
  /// @dev NFTs assigned to the zero address are considered invalid, and this
  ///  function throws for queries about the zero address.
  /// @param _owner An address for whom to query the balance
  /// @return The number of NFTs owned by `_owner`, possibly zero
  function balanceOf (address _owner) public view returns (uint256) {
    return ownedTokens[_owner].length;
  }

  /// @notice Get all NFTs assigned to an owner
  /// @param _owner An address for whom to query the balance
  /// @dev This function is *not* in the ERC-721 standard.
  /// @return An array of NTF ids that are owned by `_owner`, possibly empty
  function tokensOf (address _owner) public view returns (uint256[]) {
    return ownedTokens[_owner];
  }

  /// @notice Find the owner of an NFT
  /// @param _tokenId The identifier for an NFT
  /// @dev NFTs assigned to zero address are considered invalid, and queries
  ///  about them do throw.
  /// @return The address of the owner of the NFT
  function ownerOf (uint256 _tokenId) public view returns (address) {
    address owner = tokenOwner[_tokenId];
    require(owner != address(0));
    return owner;
  }

  bytes4 constant public ERC721_RECEIVED = 0xf0b9e5ba;

  /// @notice Transfers the ownership of an NFT from one address to another address
  /// @dev Throws unless `msg.sender` is the current owner, an authorized
  ///  operator, or the approved address for this NFT. Throws if `_from` is
  ///  not the current owner. Throws if `_to` is the zero address. Throws if
  ///  `_tokenId` is not a valid NFT. When transfer is complete, this function
  ///  checks if `_to` is a smart contract (code size > 0). If so, it calls
  ///  `onERC721Received` on `_to` and throws if the return value is not
  ///  `bytes4(keccak256("onERC721Received(address,uint256,bytes)"))`.
  /// @param _from The current owner of the NFT
  /// @param _to The new owner
  /// @param _tokenId The NFT to transfer
  /// @param data Additional data with no specified format, sent in call to `_to`
  function safeTransferFrom (address _from, address _to, uint256 _tokenId, bytes data) public {
    transferFrom(_from, _to, _tokenId);
    if (isContract(_to)) {
      bytes4 returnValue = ERC721TokenReceiver(_to).onERC721Received(_from, _tokenId, data);
      require(returnValue == ERC721_RECEIVED, "Invalid return value");
    }
  }

  function isContract(address addr) private view returns (bool) {
    uint256 size;
    assembly { size := extcodesize(addr) }
    return size > 0;
  }

  /// @notice Transfers the ownership of an NFT from one address to another address
  /// @dev This works identically to the other function with an extra data parameter,
  ///  except this function just sets data to ""
  /// @param _from The current owner of the NFT
  /// @param _to The new owner
  /// @param _tokenId The NFT to transfer
  function safeTransferFrom (address _from, address _to, uint256 _tokenId) public {
    safeTransferFrom(_from, _to, _tokenId, "");
  }

  /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
  ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
  ///  THEY MAY BE PERMANENTLY LOST
  /// @dev Throws unless `msg.sender` is the current owner, an authorized
  ///  operator, or the approved address for this NFT. Throws if `_from` is
  ///  not the current owner. Throws if `_to` is the zero address. Throws if
  ///  `_tokenId` is not a valid NFT.
  /// @param _from The current owner of the NFT
  /// @param _to The new owner
  /// @param _tokenId The NFT to transfer
  function transferFrom (address _from, address _to, uint256 _tokenId) public {
    require(_from == ownerOf(_tokenId), "Owner address mismatch");
    require(canTransfer(_tokenId), "Sender not authorized");

    removeTokenFrom(_from, _tokenId);
    giveTokenTo(_to, _tokenId);

    emit Transfer(_from, _to, _tokenId);
  }

  function canTransfer (uint256 _tokenId) private view returns (bool) {
    return msg.sender == ownerOf(_tokenId) ||
      msg.sender == getApproved(_tokenId) ||
      isApprovedForAll(ownerOf(_tokenId), msg.sender);
  }

  function removeTokenFrom (address _from, uint256 _tokenId) internal {
    uint256 index = tokenIndex[_tokenId];
    uint256 lastTokenIndex = balanceOf(_from).sub(1);
    uint256 lastToken = ownedTokens[_from][lastTokenIndex];

    tokenApprovals[_tokenId] = address(0);

    tokenOwner[_tokenId] = address(0);
    ownedTokens[_from][index] = lastToken;
    ownedTokens[_from][lastTokenIndex] = 0;

    ownedTokens[_from].length--;
    tokenIndex[_tokenId] = 0;
    tokenIndex[lastToken] = index;
  }

  function giveTokenTo (address _to, uint256 _tokenId) internal {
    require(_to != address(0), "Tokens cannot be transfered to 0");
    assert(tokenOwner[_tokenId] == address(0));

    tokenOwner[_tokenId] = _to;
    tokenIndex[_tokenId] = ownedTokens[_to].push(_tokenId).sub(1);
  }

  /// @notice Set or reaffirm the approved address for an NFT
  /// @dev The zero address indicates there is no approved address.
  /// @dev Throws unless `msg.sender` is the current NFT owner, or an authorized
  ///  operator of the current owner.
  /// @param _approved The new approved NFT controller
  /// @param _tokenId The NFT to approve
  function approve (address _approved, uint256 _tokenId) public {
    require(canTransfer(_tokenId), "Sender not authorized");
    tokenApprovals[_tokenId] = _approved;
  }

  /// @notice Enable or disable approval for a third party ("operator") to manage
  ///  all of `msg.sender`'s assets.
  /// @dev Emits the ApprovalForAll event
  /// @param _operator Address to add to the set of authorized operators.
  /// @param _approved True if the operators is approved, false to revoke approval
  function setApprovalForAll (address _operator, bool _approved) public {
    tokenOperators[msg.sender][_operator] = _approved;
    emit ApprovalForAll(msg.sender, _operator, _approved);
  }

  /// @notice Get the approved address for a single NFT
  /// @dev Throws if `_tokenId` is not a valid NFT
  /// @param _tokenId The NFT to find the approved address for
  /// @return The approved address for this NFT, or the zero address if there is none
  function getApproved (uint256 _tokenId) public view returns (address) {
    return tokenApprovals[_tokenId];
  }

  /// @notice Query if an address is an authorized operator for another address
  /// @param _owner The address that owns the NFTs
  /// @param _operator The address that acts on behalf of the owner
  /// @return True if `_operator` is an approved operator for `_owner`, false otherwise
  function isApprovedForAll (address _owner, address _operator) public view returns (bool) {
    return tokenOperators[_owner][_operator];
  }

  /// @notice Query if a contract implements an interface
  /// @param interfaceID The interface identifier, as specified in ERC-165
  /// @dev Interface identification is specified in ERC-165. This function
  ///  uses less than 30,000 gas.
  /// @return `true` if the contract implements `interfaceID` and
  ///  `interfaceID` is not 0xffffffff, `false` otherwise
  function supportsInterface (bytes4 interfaceID) public pure returns (bool) {
    return (
      interfaceID == 0x01ffc9a7 || // ERC-165
      interfaceID == 0x80ac58cd // ERC-721
    );
  }
}
