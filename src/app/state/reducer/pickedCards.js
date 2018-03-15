import {
  PICK_CARD
} from '../actions'

export function reducer (state = new Array(3).fill(-1), action) {
  switch (action.type) {
    case PICK_CARD:
      return state.map((item, index) => index === action.index
        ? action.cardId
        : item
      )
    default:
      return state
  }
}
