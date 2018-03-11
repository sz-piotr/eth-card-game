const Minter = artifacts.require('./Minter.sol')
const Cards = artifacts.require('./Cards.sol')

contract('Minter', (accounts) => {
  it('should create arbitrary cards ', async () => {
    const cards = await Cards.deployed()
    const minter = await Minter.deployed()

    await minter.mintAnyCard(accounts[0], 1234, 1, 0)
    const card = await cards.getCard(0)

    assert.deepEqual(
      card.map(x => x.toNumber()),
      [1234, 1, 0]
    )
  })
})
