# Ethereum Card Game

**Name**: Ethereum Card Game<br>
**Website**: TBD<br>
**Release date**: TBD<br>
**License**: code: UNLICENSE, assets: CC0<br>

## Overview

Ethereum Card Game (ECG) is a decentralized application using the Ethereum blockchain. In ECG players buy cards they can use to play with others and trade. Card ownership and game rules are dictated by smart contracts on the Ethereum plaform. The dapp's frontend is a website that can be accessed by visiting the official url or by using the source code provided on GitHub.

## Differences from tradicional digital card games

### Ownership

In traditional card games the sole owner of the cards and gameplay provider is the company creating the game. Through their central server all user actions are carefully managed. This eliminates the user's ability to own cards they aquired through the game. After a time, the game is abandoned by its creators and the servers are shut down. Users are no longer able to access content they paid for.

While using the Ethereum blockchain is not a solution to all problems it empowers the users to truly own the digital goods. If implemented correctly users can freely transfer and exchange cards they posess. There is also no danger of the creators shutting servers down - they do not control the blockchain.

### Trust

When playing a digital card game users have to trust the central server to enforce the rules of the game. If the central server cheats they have no ability to influence the final result. This changes in a decentralized system. Each and every user has a guarantee that the game code has been executed correctly, because they can run their own node.

## Cards

Cards in ECG come from card packs. Card packs can be purchased through a designated smart contract using the dapp's frontend. Once a player (ethereum address) owns cards they can use them to create challenges or trade them on the marketplace.

On a technical side cards are a ERC721 compliant token on the Ethereum blockchain.

There are two main card types: heroes and actions.

### Hero cards

Hero cards represent fictional characters that fight in galactic arenas. Each hero has a hero type, a hitpoints stat and up to three abilities.

### Action cards

Action cards represent the actions heroes can perform in the arena. Each action has at least one action type and a damage value. An action can also have a hero type that restricts its use to certain heroes only.

There are six action types:
* Phisical
* Energy
* Mind
* Biological
* Robotic
* Arcane

## Market

The market will exist as a contract on the Ethereum blockchain that allows secure ERC721 token transfer in exchange for ETH. The market contract locks cards until the offer is canceled or the card is purchased. This is also when the token is transfered to the buyer.

The market can primarily be accessed through the frontend application.

## Challenges / Battles

TBD

## Leveling

TBD
