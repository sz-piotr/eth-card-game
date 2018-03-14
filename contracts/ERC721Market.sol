pragma solidity ^0.4.20;

import "./lib/ERC721.sol";

contract ERC721Market {
  ERC721 private tokenContract;

  mapping (uint => address) public sellerOf;
  mapping (uint => uint) public priceOf;

  event OfferCreated (address indexed from, uint indexed tokenId, uint price);
  event OfferCanceled (address indexed from, uint indexed tokenId);
  event TokenPurchased (address indexed seller, address indexed buyer, uint indexed tokenId, uint price);

  function ERC721Market (address tokenContractAddress) public {
    tokenContract = ERC721(tokenContractAddress);
  }

  function createOffer (uint tokenId, uint price) public {
    require(sellerOf[tokenId] == address(0));

    OfferCreated(msg.sender, tokenId, price);

    // The takeOwnership function is specified to throw if the caller is not
    // authorized for the specified token, removing the need for a manual check
    tokenContract.takeOwnership(tokenId);
    sellerOf[tokenId] = msg.sender;
    priceOf[tokenId] = price;
  }

  function cancelOffer (uint tokenId) public {
    require(msg.sender == sellerOf[tokenId]);

    OfferCanceled(msg.sender, tokenId);

    sellerOf[tokenId] = address(0);
    priceOf[tokenId] = 0;
    tokenContract.transferFrom(this, msg.sender, tokenId);
  }

  function purchase (uint tokenId) public payable {
    require(sellerOf[tokenId] != address(0));
    require(msg.value == priceOf[tokenId]);

    address seller = sellerOf[tokenId];
    TokenPurchased(seller, msg.sender, tokenId, priceOf[tokenId]);

    sellerOf[tokenId] = address(0);
    priceOf[tokenId] = 0;
    tokenContract.transferFrom(this, msg.sender, tokenId);
    seller.transfer(msg.value);
  }
}
