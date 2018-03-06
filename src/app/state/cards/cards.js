import {
  OWNED_CARDS_CHANGED
} from '../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case OWNED_CARDS_CHANGED:
      return {
        ...state,
        [action.account]: action.cardIds
      }
    default:
      return state
  }
}
