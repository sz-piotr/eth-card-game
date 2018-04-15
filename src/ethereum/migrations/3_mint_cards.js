const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')
const ERC721Market = artifacts.require('./ERC721Market.sol')

module.exports = function (deployer, network, accounts) {
  deployer.then(() => deploy(deployer, network, accounts))
}

async function deploy (deployer, network, accounts) {
  const minter = await Minter.deployed()
  await minter.createExpansion(3, 2, 1)

  for (let i = 0; i < 5; i++) {
    await minter.purchasePack(0, {
      from: accounts[0],
      value: '10000000000000000' // 0.01 ETH
    })
  }

  const cards = await Cards.deployed()
  const market = await ERC721Market.deployed()

  await cards.approve(ERC721Market.address, 0)
  await cards.approve(ERC721Market.address, 1)
  await cards.approve(ERC721Market.address, 2)
  await market.createOffer(0, 10)
  await market.createOffer(1, 20)
  await market.cancelOffer(1)
  await market.createOffer(2, 30)
  await market.purchase(2, { value: 30 })
}
