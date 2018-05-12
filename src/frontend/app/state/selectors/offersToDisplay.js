import { getCardAttributes } from '../../data'
import { memoize } from './memoize'
import { textFilter } from './filters'

export function selectOffersToDisplay (state) {
  const view = state.market.view
  const offers = state.market.offers
  const details = state.cards.details
  return offersToDisplay(offers, view, details)
}

const offersToDisplay = memoize((offers, view, details) => {
  const filter = textFilter(view.search)
  const cardIds = Object.keys(offers)
    .filter(cardId => {
      const attributes = getCardAttributes((details[cardId] || {}).data)
      return offers[cardId].canPurchase && filter(attributes)
    })
  return cardIds
})
