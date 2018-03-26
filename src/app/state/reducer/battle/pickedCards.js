import {
  PICK_CARD, UNPICK_CARD
} from '../../actions'

export function reducer (state = new Array(3).fill(-1), action) {
  switch (action.type) {
    case PICK_CARD:
      return state.map((item, index) => index === action.index
        ? action.cardId
        : item
      )
    case UNPICK_CARD:
      return state.map((item, index) => item === action.cardId
        ? -1
        : item
      )
    default:
      return state
  }
}
