# Ethereum Card Game

**Name**: Ethereum Card Game<br>
**Website**: TBD<br>
**Release date**: TBD<br>
**License**: TBD (Unlicensed + licences on images?)<br>

## Overview

Ethereum Card Game (ECG) is a decentralized application using the Ethereum blockchain. In ECG players buy cards they can use to play with others and trade. Card ownership and game rules are dictated by smart contracts on the Ethereum plaform. The dapp's frontend is a website that can be accessed by visiting the official url or by using the source code provided on GitHub.

## Cards

Cards in ECG come from card packs. Card packs can be purchased through a designated smart contract using the dapp's frontend. Once a player (ethereum address) owns cards they can use them to create challenges or trade them on the marketplace.

On a technical side cards are a ERC721 compliant token on the Ethereum blockchain.

There are two main card types: heroes and actions.

### Hero cards

Hero cards represent fictional characters that fight in galactic arenas. Each hero has a hero type, a hitpoints stat and up to three abilities.

### Action cards

Action cards represent the actions heroes perform in the arena. Each action has at least one action type and a damage value. An action can also have a hero type that restricts its use to certain heroes only.

There are six action types:
* Phisical
* Energy
* Mind
* Biological
* Robotic
* Arcane

## Market

The market will exist as a contract on the Ethereum blockchain that allows the transfer of an ERC721 token in exchange for ETH. The market contract locks cards until the offer is canceled or the card is purchased when the token is transfered to the buyer.

The market can also be accessed using the frontend application.

## Challenges / Battles

TBD

## Leveling

TBD
