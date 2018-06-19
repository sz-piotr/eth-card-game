const Minter = artifacts.require('./Minter.sol')
const migrateCards = require('../data/migrateCards.js')
module.exports = function (deployer, network, accounts) {
  deployer.then(() => deploy(deployer, network, accounts))
}

async function deploy (deployer, network, accounts) {
  const minter = await Minter.deployed()
  migrateCards.migrateCards()
  await minter.createExpansion(2, 2, 1, 1, 1, 0) // from data/cards.json
}
