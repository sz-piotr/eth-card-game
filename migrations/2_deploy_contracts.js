const Challenges = artifacts.require('./Challenges.sol')
const CardTypes = artifacts.require('./CardTypes.sol')
const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')

module.exports = function (deployer) {
  deployer.deploy(Cards)
    .then(() => deployer.deploy(Minter, Cards.address))
    .then(() => Cards.deployed())
    .then(cards => cards.setMinter(Minter.address))
    .then(() => deployer.deploy(CardTypes))
    .then(() => deployer.deploy(Challenges, Cards.address, CardTypes.address))
}
