const CardTypes = artifacts.require('./CardTypes.sol')

const dataId = 1
const damage = 2
const element = 1
const health = 10
const resultCardType = [dataId, damage, element]
const resultHero = [dataId, health]
let cardTypes

contract('CardTypes', () => {
  it('should create a cardType', () => {
    CardTypes.deployed().then(instance => {
      cardTypes = instance
    }).then(() => cardTypes.createCardType(dataId, damage, element))
      .then(() => cardTypes.getCardType.call(0))
      .then((card) => assert.equal(card.map(x => x.toNumber()).toString(), resultCardType.toString()))
  })
  it('should create a hero ', () => {
    CardTypes.deployed().then(instance => {
      cardTypes = instance
    }).then(() => cardTypes.createHero(dataId, health))
      .then(() => cardTypes.getHero.call(0))
      .then((card) => assert.equal(card.map(x => x.toNumber()).toString(), resultHero.toString()))
  })
})
