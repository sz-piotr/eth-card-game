import cardAttributes from '../../data/cardAttributes'

export function selectFilteredCollection (state) {
  const search = state.cards.filter.search
  const collection = (state.cards.byOwner[state.user.account] || {}).data
  const details = state.cards.details
  if (!collection) {
    return null
  }
  return filterCollection(collection, search, details)
}

function filterCollection (collection, search, details) {
  return collection.filter(cardId => {
    const card = (details[cardId] || {}).data
    return card
      ? cardNameIncludes(card, search)
      : true
  })
}

const cardName = card => (cardAttributes[card[0]] || cardAttributes.default).name
const cardNameIncludes = (card, text) =>
  cardName(card).toLowerCase().includes(text)
