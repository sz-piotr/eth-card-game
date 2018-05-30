import {
  CREATE_OFFER_CLICKED,
  OFFER_PRICE_CHANGED
} from '../../actions'

const defaultState = {
  cardId: null,
  price: ''
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case CREATE_OFFER_CLICKED:
      return {
        cardId: action.cardId,
        price: ''
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
