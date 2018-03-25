const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')
const ERC721Market = artifacts.require('./ERC721Market.sol')

module.exports = function (deployer, network, accounts) {
  deployer.then(() => deploy(deployer, network, accounts))
}

async function deploy (deployer, network, accounts) {
  const minter = await Minter.deployed()
  await minter.createExpansion(20, 10, 5)

  await minter.mintAnyCard(accounts[0], 0, 1, 0)
  await minter.mintAnyCard(accounts[0], 1, 1, 0)
  await minter.mintAnyCard(accounts[0], 2, 1, 0)

  await minter.mintAnyCard(accounts[1], 3, 1, 0)
  await minter.mintAnyCard(accounts[1], 4, 1, 0)
  await minter.mintAnyCard(accounts[1], 5, 1, 0)

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
