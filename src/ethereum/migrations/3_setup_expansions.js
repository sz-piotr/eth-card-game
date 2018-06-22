const Minter = artifacts.require('./Minter.sol')
const CardTypes = artifacts.require('./CardTypes.sol')
const migrateCards = require('../data/migrateCards.js')
module.exports = function (deployer, network, accounts) {
  deployer.then(() => deploy(deployer, network, accounts))
}

async function deploy (deployer, network, accounts) {
  const minter = await Minter.deployed()
  const cardTypes = await CardTypes.deployed()
  await minter.createExpansion(2, 2, 1, 1, 1, 0) // from data/cards.json
  migrateCards.migrateCards([deployCardTypes(cardTypes)])
}

function deployCardTypes (contract) {
  return function (card) {
    if (card.type === 'hero') {
      contract.createHero(card.number, card.health)
    } else {
      contract.createAction(card.number, card.damage, card.element)
    }
  }
}
