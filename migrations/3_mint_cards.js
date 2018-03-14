const Minter = artifacts.require('./Minter.sol')

module.exports = function (deployer, network, accounts) {
  deployer
    .then(() => Minter.deployed())
    .then(async (instance) => {
      await instance.mintAnyCard(accounts[0], 1, 1, 0)
      await instance.mintAnyCard(accounts[0], 2, 1, 0)
      await instance.mintAnyCard(accounts[0], 3, 1, 0)

      await instance.createExpansion(20, 10, 5)
    })
}
