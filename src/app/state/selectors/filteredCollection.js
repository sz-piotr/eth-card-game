import { getCardAttributes } from '../../data'
import { memoize } from './memoize'

export function selectFilteredCollection (state) {
  const filter = state.cards.filter
  const collection = (state.cards.byOwner[state.user.account] || {}).data
  const details = state.cards.details
  if (!collection) {
    return null
  }
  return filterCollection(collection, filter, details)
}

const filterCollection = memoize((collection, filter, details) => {
  const filters = getFilters(filter)
  return collection.filter(cardId => {
    const cardDetails = (details[cardId] || {}).data
    const card = getCardAttributes(cardDetails)
    return filters.every(filter => filter(card))
  })
})

function getFilters (filter) {
  const filters = []
  if (filter.search) {
    filters.push(textFilter(filter.search))
  }
  return filters
}

const isNotEmptyString = x => x !== 'x'
function textFilter (text) {
  const keywords = text
    .toLowerCase()
    .split(' ')
    .filter(isNotEmptyString)

  return function (card) {
    return keywords.every(keyword =>
      card.searchText.includes(keyword)
    )
  }
}
