const Minter = artifacts.require('./Minter.sol')
const CardTypes = artifacts.require('./CardTypes.sol')
const migrateCards = require('../data/migrateCards.js')
const cards = require('../data/cards.json')
module.exports = function (deployer, network, accounts) {
  deployer.then(() => deploy(deployer, network, accounts))
}

async function deploy (deployer, network, accounts) {
  const minter = await Minter.deployed()
  const cardTypes = await CardTypes.deployed()
  await deployExpansions(minter)
  await migrateCards.migrateCards(deployCardTypes(cardTypes))
}

function deployCardTypes (contract) {
  return function (card) {
    if (card.type === 'hero') {
      return contract.createHero(card.number, card.health)
    } else {
      return contract.createAction(card.number, card.damage, card.element)
    }
  }
}

function deployExpansions (contract) {
  return Promise.all(cards.expansions.map(expansion => {
    const props = getExpansionsProps(expansion)
    return contract.createExpansion(...props)
  }))
}

function getExpansionsProps (expansion) {
  return Object.entries(expansion.heroes).map(([_, heroes]) => heroes.length).concat(
    Object.entries(expansion.actions).map(([_, actions]) => actions.length))
}
