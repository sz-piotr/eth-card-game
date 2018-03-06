const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')

module.exports = function (deployer) {
  deployer.deploy(Cards)
    .then(() => deployer.deploy(Minter, Cards.address))
    .then(() => Cards.deployed())
    .then(cards => cards.setMinter(Minter.address))
}
