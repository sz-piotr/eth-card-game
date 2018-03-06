const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')

const Counter = artifacts.require('./Counter.sol')
const CardStore = artifacts.require('./CardStore.sol')

module.exports = function (deployer) {
  deployer.deploy(Cards)
    .then(() => deployer.deploy(Minter, Cards.address))
    .then(() => Cards.deployed())
    .then(cards => cards.setMinter(Minter.address))

  // TODO: phase out
  deployer.deploy(Counter)
  deployer.deploy(CardStore)
}
