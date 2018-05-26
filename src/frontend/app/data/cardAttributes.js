import cards from './cards'

export const cardAttributes = {}

const EXPANSION_OFFSET = 1000
const COMMON_OFFSET = 100
const UNCOMMON_OFFSET = 200
const RARE_OFFSET = 300

cards.expansions.forEach((expansion, index) => {
  const offset = (index + 1) * EXPANSION_OFFSET
  getCards(expansion, offset + COMMON_OFFSET, 'common').forEach(addCard)
  getCards(expansion, offset + UNCOMMON_OFFSET, 'uncommon').forEach(addCard)
  getCards(expansion, offset + RARE_OFFSET, 'rare').forEach(addCard)
})

function getCards (expansion, offset, rarity) {
  const heroes = expansion.heroes[rarity].map((data, index) =>
    heroCardAttributes(data, offset + index, expansion.name, rarity)
  )
  const actions = expansion.actions[rarity].map((data, index) =>
    actionCardAttributes(data, offset + heroes.length + index, expansion.name, rarity)
  )
  return heroes.concat(actions)
}

function heroCardAttributes (definition, number, expansion, rarity) {
  return {
    ...definition,
    type: 'hero',
    searchText: definition.displayName.toLowerCase(),
    number,
    expansion,
    rarity
  }
}

function actionCardAttributes (definition, number, expansion, rarity) {
  return {
    ...definition,
    type: 'action',
    searchText: definition.displayName.toLowerCase(),
    number,
    expansion,
    rarity
  }
}

function addCard (card) {
  cardAttributes[card.number] = card
}
