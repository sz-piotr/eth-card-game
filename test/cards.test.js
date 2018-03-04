const Cards = artifacts.require('./Cards.sol')

const number = 1
const lvl = 1
const metadata = 0
const resultCard = [number, lvl, metadata]
let cards

contract('Cards', () => {
  it('should mint a card ', () => {
    Cards.deployed().then(instance => {
      cards = instance
      return instance.minter.call()
    }).then(cards.mint(adres, number, lvl, metadata))
      .then(cards.cards.call(0))
      .then(assert.equal(card.map(x => x.toNumber()).toString(), resultCard.toString()))
  })
})
