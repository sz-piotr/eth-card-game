const Challenges = artifacts.require('./Challenges.sol')
const CardTypes = artifacts.require('./CardTypes.sol')
const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')
const ERC721Market = artifacts.require('./ERC721Market.sol')

module.exports = function (deployer) {
  deployer.then(() => deploy(deployer))
}

async function deploy (deployer) {
  await deployer.deploy(Cards)
  await deployer.deploy(Minter, Cards.address)
  await deployer.deploy(ERC721Market, Cards.address)
  const cards = await Cards.deployed()
  await cards.setMinter(Minter.address)
  await deployer.deploy(CardTypes)
  await deployer.deploy(Challenges, Cards.address, CardTypes.address)
}
