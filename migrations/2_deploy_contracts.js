const Counter = artifacts.require('./Counter.sol')
const CardStore = artifacts.require('./CardStore.sol')
const Cards = artifacts.require('./Cards.sol')
const Challenges = artifacts.require('./Challenges.sol')
const CardTypes = artifacts.require('./CardTypes.sol')
const ERC721 = artifacts.require('./ERC721.sol')
const Ownable = artifacts.require('./Ownable.sol')

module.exports = function (deployer) {
  deployer.deploy(Counter)
  deployer.deploy(CardStore)
  deployer.deploy(Ownable)
  deployer.deploy(ERC721)
    .then(() => deployer.deploy(Cards))
    .then(() => deployer.deploy(CardTypes))
    .then(() => deployer.deploy(Challenges, Cards.address, CardTypes.address))
}
