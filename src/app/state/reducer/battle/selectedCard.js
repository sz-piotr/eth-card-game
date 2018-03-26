import {
  SELECT_CARD, UNSELECT_CARD
} from '../../actions'

export function reducer (state = -1, action) {
  switch (action.type) {
    case SELECT_CARD:
      return action.cardId
    case UNSELECT_CARD:
      return -1
    default:
      return state
  }
}
