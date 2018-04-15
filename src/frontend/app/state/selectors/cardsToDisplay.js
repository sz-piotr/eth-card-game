import { getCardAttributes } from '../../data'
import { memoize } from './memoize'

export function selectCardsToDisplay (state) {
  const filter = state.cards.view
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
    const cardDetails = details[cardId] || {}
    if (cardDetails.isFetching) {
      return true
    }

    const card = getCardAttributes(cardDetails.data)
    return filters.every(filter => filter(card))
  })
})

function getFilters (filter) {
  return [
    textFilter(filter.search)
  ]
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
