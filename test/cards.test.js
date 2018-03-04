const Cards = artifacts.require('./Cards.sol')

const number = 1
const lvl = 1
const metadata = 0
const resultCard = {number: number, lvl: lvl, metadata: 1}
let cards

contract('Cards', function () {
  it('should mint a card ', () => {
    Cards.deployed().then(instance => {
      cards = instance
      return instance.owner()
    }).then((address) => cards.mint(address, number, lvl, metadata))
      .then(() => cards.cards(number))
      .then(card => assert.equal(card, undefined))
  })
})
