import { CARD_PICKED, CARD_SELECTED, CARD_TYPE_CHANGED } from '../actions'

export function reducer (state = {
  hero: null,
  picked: new Array(3).fill(null),
  selected: null,
  selectedType: 'hero'
}, action) {
  switch (action.type) {
    case CARD_PICKED:
      return {
        ...state,
        picked: state.selectedType === 'action' ? updatePicked(state, action) : state.picked,
        hero: state.selectedType === 'hero' ? state.selected : state.hero,
        selected: null
      }
    case CARD_SELECTED:
      return {
        ...state,
        selected: action.cardId === state.selected
          ? null
          : action.cardId
      }
    case CARD_TYPE_CHANGED:
      return {
        ...state,
        selectedType: action.value,
        selected: null
      }
    default:
      return state
  }
}

function updatePicked (state, action) {
  return state.picked.map((item, index) => index === action.index
    ? state.selected
    : item
  )
}
