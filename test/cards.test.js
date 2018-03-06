/* global artifacts contract assert */
const Cards = artifacts.require('./Cards.sol')

const number = 1
const lvl = 1
const metadata = 0
const resultCard = [number, lvl, metadata]

contract('Cards', (accounts) => {
  it('should mint a card ', async () => {
    const instance = await Cards.deployed()
    await instance.mint(accounts[0], number, lvl, metadata)

    const card = await instance.cards(0)

    assert.deepEqual(
      card.map(x => x.toNumber()),
      resultCard
    )
  })
})
