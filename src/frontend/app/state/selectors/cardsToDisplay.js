import { getCardAttributes } from '../../data'
import { memoize } from './memoize'
import {
  textFilter,
  attributeFilter
} from './filters'

export function selectCardsToDisplay (state) {
  const view = state.cards.view
  const collection = (state.cards.byOwner[state.user.account] || {}).data
  const details = state.cards.details
  if (!collection) {
    return null
  }
  return cardsToDisplay(collection, view, details)
}

const cardsToDisplay = memoize((collection, view, details) => {
  const filters = getFilters(view)
  const filtered = collection
    .map(cardId => ({
      id: cardId,
      attributes: getCardAttributes((details[cardId] || {}).data)
    }))
    .filter(data => filters.every(filter => filter(data.attributes)))
  return filtered
    .sort(getSort(view))
    .map(data => data.id)
})

function getFilters (view) {
  return [
    textFilter(view.search),
    attributeFilter('type', view.type)
  ]
}

function getSort (view) {
  switch (view.sort) {
    case 'id ascending':
      return (a, b) => parseInt(a.id) - parseInt(b.id)
    case 'id descending':
      return (a, b) => parseInt(b.id) - parseInt(a.id)
    case 'name ascending':
      return (a, b) => stringCompare(a.attributes.displayName, b.attributes.displayName)
    case 'name descending':
      return (a, b) => stringCompare(b.attributes.displayName, a.attributes.displayName)
  }
}

function stringCompare (a, b) {
  return a > b ? 1 : (a < b ? -1 : 0)
}
