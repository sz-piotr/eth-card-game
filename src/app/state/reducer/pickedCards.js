import {
  PICK_CARD
} from '../actions'

export function reducer (state = new Array(3).fill({}), action) {
  console.log(action)
  switch (action.type) {
    case PICK_CARD:
      return state.map(item => {
        if (item.id === action.index) {
          return {...item, ...action.cardId}
        }
        return item
      })
    default:
      return state
  }
}
