import {
  MARKET_OFFER_CREATED,
  MARKET_OFFER_CANCELED,
  MARKET_TOKEN_PURCHASED
} from '../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case MARKET_OFFER_CREATED:
      if (isNewer(action, state[action.tokenId])) {
        return {
          ...state,
          [action.tokenId]: {
            canPurchase: true,
            seller: action.seller,
            at: action.at,
            price: action.price
          }
        }
      } else {
        return state
      }
    case MARKET_OFFER_CANCELED:
    case MARKET_TOKEN_PURCHASED:
      if (isNewer(action, state[action.tokenId])) {
        return {
          ...state,
          [action.tokenId]: {
            canPurchase: false,
            at: action.at
          }
        }
      } else {
        return state
      }
    default:
      return state
  }
}

function isNewer (action, state) {
  return true // TODO: actually check
}
