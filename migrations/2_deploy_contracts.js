/* global artifacts */
const Counter = artifacts.require('./Counter.sol')
const CardStore = artifacts.require('./CardStore.sol')

module.exports = function (deployer) {
  deployer.deploy(Counter)
  deployer.deploy(CardStore)
}
