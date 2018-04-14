import { PICK_CARD, SELECT_CARD } from '../actions'

export function reducer (state = {
  picked: new Array(3).fill(null),
  selected: null
}, action) {
  switch (action.type) {
    case PICK_CARD:
      return {
        picked: state.picked.map((item, index) => index === action.index
          ? state.selected
          : item
        ),
        selected: null
      }
    case SELECT_CARD:
      return {
        ...state,
        selected: action.cardId
      }
    default:
      return state
  }
}
