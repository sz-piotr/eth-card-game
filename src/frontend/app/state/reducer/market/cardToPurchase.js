import {
  PURCHASE_CARD_CLICKED
} from '../../actions'

export function reducer (state = null, action) {
  switch (action.type) {
    case PURCHASE_CARD_CLICKED:
      return action.cardId
    default:
      return state
  }
}
