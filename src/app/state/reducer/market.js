import {
  MARKET_OFFER_CREATED,
  MARKET_OFFER_CANCELED,
  MARKET_TOKEN_PURCHASED
} from '../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case MARKET_OFFER_CREATED:
      if (state[action.tokenId].block < action.block) {
        return {
          ...state,
          [action.tokenId]: {
            canPurchase: true,
            seller: action.seller,
            block: action.block,
            price: action.price
          }
        }
      } else {
        return state
      }
    case MARKET_OFFER_CANCELED:
    case MARKET_TOKEN_PURCHASED:
      if (state[action.tokenId].block < action.block) {
        return {
          ...state,
          [action.tokenId]: {
            canPurchase: false,
            block: action.block
          }
        }
      } else {
        return state
      }
    default:
      return state
  }
}
