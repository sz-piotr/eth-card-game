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
  console.log(":D")
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

async function deployExpansions (contract) {
  await Promise.all(cards.expansions.map(expansion => {
    const props = getExpansionsProps(expansion)
    return contract.createExpansion(...props)
  }))
}

function getExpansionsProps (expansion) {
  return Object.entries(expansion.heroes).map(([_, heroes]) => heroes.length).concat(
    Object.entries(expansion.actions).map(([_, actions]) => actions.length))
}
