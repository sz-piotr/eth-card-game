const Minter = artifacts.require('./Minter.sol')

module.exports = function (deployer, network, accounts) {
  deployer.then(() => deploy(deployer, network, accounts))
}

async function deploy (deployer, network, accounts) {
  const minter = await Minter.deployed()
  await minter.createExpansion(3, 3, 2) // TODO: read from data/cards.json

  for (let i = 0; i < 5; i++) {
    await minter.purchasePack(0, {
      from: accounts[0],
      value: '10000000000000000' // 0.01 ETH
    })
  }
}
