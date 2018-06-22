/* global artifacts contract assert */
const CardTypes = artifacts.require('./CardTypes.sol')

const damage = 2
const element = 1
const health = 10
const resultAction = [damage, element]
const resultHero = health

contract('CardTypes', () => {
  it('should create a action', async () => {
    const instance = await CardTypes.deployed()
    await instance.createAction(0, damage, element)

    const card = await instance.getAction(0)

    assert.deepEqual(card.map(x => x.toNumber()), resultAction)
  })

  it('should create a hero ', async () => {
    const instance = await CardTypes.deployed()
    await instance.createHero(0, health)

    const card = await instance.getHero(0)
    assert.equal(
      card.toNumber(),
      resultHero
    )
  })
})
