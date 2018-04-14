/* global artifacts */
/* global contract */
/* global assert */
const { getLastCreatedTokenId } = require('./utlis')

const Mnemonic = require('bitcore-mnemonic')
const createKeccakHash = require('keccak')

const Challenges = artifacts.require('./Challenges.sol')
const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')
const CardTypes = artifacts.require('./CardTypes.sol')

let heroId
// sconst initiatorCardsIds = [...Array(5).keys()]
const cardList = []
const DRAFT = 2

var code = new Mnemonic()
contract('Challenges', (accounts) => {
  it('should perform challenge', async () => {
    async function prepareCardTypes () {
      const cards = await Cards.deployed()
      const minter = await Minter.deployed()
      await minter.mintAnyCard(accounts[0], 1, 1, 1)
      heroId = await getLastCreatedTokenId(cards)
      await minter.mintAnyCard(accounts[0], 0, 1, 1)
      const id = await getLastCreatedTokenId(cards)
      let i
      for (i = 0; i !== 5; i++) {
        cardList.push(id)
      }
    }
    async function prepareCards () {
      const cardTypes = await CardTypes.deployed()
      await cardTypes.createCardType(0, 1, 1, 1)
      await cardTypes.createHero(1, 1, 10)
    }

    await prepareCardTypes()
    await prepareCards()
    const challenges = await Challenges.deployed()
    await challenges.challenge(createHash())
    await challenges.accept(0, heroId, cardList)
    await challenges.battle(0, heroId, cardList, code.toHDPrivateKey().toString())
    const result = await challenges.getResult(0)
    assert.equal(result.toNumber(), DRAFT)
  })
})

function createHash () {
  let value = '' + heroId
  let i
  for (i = 0; i !== 5; i++) {
    value += cardList[i]
  }
  value += code.toHDPrivateKey().toString()
  return '0x' + createKeccakHash('keccak256').update(value).digest().toString('hex')
}
