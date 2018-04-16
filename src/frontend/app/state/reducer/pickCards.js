import { CARD_PICKED, CARD_SELECTED } from '../actions'

export function reducer (state = {
  picked: new Array(3).fill(null),
  selected: null
}, action) {
  switch (action.type) {
    case CARD_PICKED:
      return {
        picked: state.picked.map((item, index) => index === action.index
          ? state.selected
          : item
        ),
        selected: null
      }
    case CARD_SELECTED:
      return {
        ...state,
        selected: action.cardId
      }
    default:
      return state
  }
}
