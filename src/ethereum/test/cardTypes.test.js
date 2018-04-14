/* global artifacts contract assert */
const CardTypes = artifacts.require('./CardTypes.sol')

const dataId = 1
const damage = 2
const element = 1
const health = 10
const resultCardType = [dataId, damage, element]
const resultHero = [dataId, health]

contract('CardTypes', () => {
  it('should create a cardType', async () => {
    const instance = await CardTypes.deployed()
    await instance.createCardType(0, dataId, damage, element)

    const card = await instance.getCardType(0)

    assert.deepEqual(card.map(x => x.toNumber()), resultCardType)
  })

  it('should create a hero ', async () => {
    const instance = await CardTypes.deployed()
    await instance.createHero(0, dataId, health)

    const card = await instance.getHero(0)

    assert.deepEqual(
      card.map(x => x.toNumber()),
      resultHero
    )
  })
})
