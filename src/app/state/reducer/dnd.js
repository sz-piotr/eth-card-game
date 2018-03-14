import { MOVE_CARD } from '../actions'

function collectionReducer (state = {position: {kx: 0, ky: 0}}, action) {
  const {position} = action
  switch (action.type) {
    case MOVE_CARD:
      console.log(state)
      return {
        ...state,
        position
      }
    default:
      return state
  }
}

export default collectionReducer
