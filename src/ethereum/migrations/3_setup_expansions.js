const Minter = artifacts.require('./Minter.sol')

module.exports = function (deployer, network, accounts) {
  deployer.then(() => deploy(deployer, network, accounts))
}

async function deploy (deployer, network, accounts) {
  const minter = await Minter.deployed()
  await minter.createExpansion(3, 3, 2) // from data/cards.json
}
