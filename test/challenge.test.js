/* global artifacts */
/* global contract */
/* global assert */
const Challenges = artifacts.require('./Challenges.sol')
// const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')
const CardTypes = artifacts.require('./CardTypes.sol')

const heroId = 1
// sconst initiatorCardsIds = [...Array(5).keys()]
const cardsXD = [0, 0, 0, 0, 0]
const DRAFT = 2

contract('Challenges', (accounts) => {
  it('should perform challenge', async () => {
    async function prepareCardTypes () {
      // const cards = await Cards.deployed()
      const minter = await Minter.deployed()
      await minter.mintAnyCard(accounts[0], 0, 1, 1)
      await minter.mintAnyCard(accounts[0], heroId, 1, 1)
    }
    async function prepareCards () {
      const cardTypes = await CardTypes.deployed()
      await cardTypes.createCardType(0, 1, 1, 1)
      await cardTypes.createHero(1, 1, 10)
    }

    await prepareCardTypes()
    await prepareCards()

    const challenges = await Challenges.deployed()
    await challenges.challenge()
    await challenges.accept(0, heroId, cardsXD)
    await challenges.battle(0)
    const result = await challenges.getResult(0)
    assert.equal(result.toNumber(), DRAFT)
  })
})
