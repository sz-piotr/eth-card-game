import {
  CREATE_OFFER_CLICKED,
  OFFER_PRICE_CHANGED
} from '../../actions'

const defaultState = {
  cardId: null,
  price: null
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case CREATE_OFFER_CLICKED:
      return {
        cardId: action.cardId,
        price: null
      }
    case OFFER_PRICE_CHANGED:
      return {
        cardId: state.cardId,
        price: action.price
      }
    default:
      return state
  }
}
