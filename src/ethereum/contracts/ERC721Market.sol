pragma solidity ^0.4.19;

import "./lib/ERC721.sol";
import "./lib/ERC721TokenReceiver.sol";

contract ERC721Market is ERC721TokenReceiver {
  ERC721 private tokenContract;

  mapping (uint => address) public sellerOf;
  mapping (uint => uint) public priceOf;

  event OfferCreated (address indexed seller, uint indexed tokenId, uint price);
  event OfferCanceled (address indexed seller, uint indexed tokenId);
  event TokenPurchased (address indexed seller, address indexed buyer, uint indexed tokenId, uint price);

  constructor (address tokenContractAddress) public {
    tokenContract = ERC721(tokenContractAddress);
  }

  function onERC721Received (address _from, uint256 _tokenId, bytes data) external returns (bytes4) {
    require(msg.sender == address(tokenContract), "Unsupported token");
    require(sellerOf[_tokenId] == address(0), "Token already listed");

    uint256 price = bytesToUint(data);

    emit OfferCreated(_from, _tokenId, price);
    sellerOf[_tokenId] = _from;
    priceOf[_tokenId] = price;

    return ERC721_RECEIVED;
  }

  function bytesToUint (bytes data) private pure returns (uint) {
    require(data.length == 32, "Invalid data length");
    // TODO: consider using assembly
    uint result = 0;
    for (uint index = 0; index < 32; index++) {
      result = result << 8;
      result += uint8(data[index]);
    }
    return result;
  }

  function cancelOffer (uint tokenId) public {
    require(msg.sender == sellerOf[tokenId]);

    emit OfferCanceled(msg.sender, tokenId);

    sellerOf[tokenId] = address(0);
    priceOf[tokenId] = 0;
    tokenContract.transferFrom(this, msg.sender, tokenId);
  }

  function purchase (uint tokenId) public payable {
    require(sellerOf[tokenId] != address(0));
    require(msg.value == priceOf[tokenId]);

    address seller = sellerOf[tokenId];
    emit TokenPurchased(seller, msg.sender, tokenId, priceOf[tokenId]);

    sellerOf[tokenId] = address(0);
    priceOf[tokenId] = 0;
    tokenContract.transferFrom(this, msg.sender, tokenId);
    seller.transfer(msg.value);
  }
}
