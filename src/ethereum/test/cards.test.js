/* global artifacts contract assert */
const Cards = artifacts.require('./Cards.sol')
const Minter = artifacts.require('./Minter.sol')

const TEST_ACCOUNT = 0x123

contract('Cards', (accounts) => {
  it('implements ERC721 balanceOf', async () => {
    const cards = await Cards.deployed()
    const minter = await Minter.deployed()

    const balanceBefore = await cards.balanceOf(TEST_ACCOUNT)

    await minter.mintAnyCard(TEST_ACCOUNT, 0, 0, 0)

    const balanceAfter = await cards.balanceOf(TEST_ACCOUNT)
    assert.equal(balanceAfter - balanceBefore, 1)
  })

  it('implements ERC721 ownerOf', async () => {
    const cards = await Cards.deployed()
    const minter = await Minter.deployed()

    const res = await minter.mintAnyCard(TEST_ACCOUNT, 0, 0, 0)
    const id = res.receipt.logs[0].data

    const owner = await cards.ownerOf(id)
    assert.equal(owner, TEST_ACCOUNT)
  })
})
