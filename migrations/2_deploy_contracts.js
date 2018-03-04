const Counter = artifacts.require('./Counter.sol')
const CardStore = artifacts.require('./CardStore.sol')
const Cards = artifacts.require('./Cards.sol')
const Challenges = artifacts.require('./Challenges.sol')
const CardTypes = artifacts.require('./CardTypes.sol')

module.exports = function (deployer) {
  deployer.deploy(Counter)
  deployer.deploy(CardStore)
  deployer.deploy(Cards)
    .then(() => deployer.deploy(CardTypes)
      .then(deployer.deploy(Challenges, Cards.address, CardTypes.address)))
}
