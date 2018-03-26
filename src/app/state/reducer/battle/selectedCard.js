import {
  SELECT_CARD
} from '../../actions'

export function reducer (state = -1, action) {
  switch (action.type) {
    case SELECT_CARD:
      return action.cardId
    default:
      return state
  }
}
