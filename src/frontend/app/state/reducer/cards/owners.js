import {
  CARD_OWNER_FETCH_REQUESTED,
  CARD_OWNER_FETCH_SUCCEDED,
  CARD_OWNER_FETCH_FAILED
} from '../../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case CARD_OWNER_FETCH_REQUESTED:
      return {
        ...state,
        [action.cardId]: {
          isFetching: true,
          error: false,
          owner: state[action.cardId] && state[action.cardId].owner
        }
      }
    case CARD_OWNER_FETCH_SUCCEDED:
      return {
        ...state,
        [action.cardId]: {
          isFetching: false,
          error: false,
          owner: action.owner
        }
      }
    case CARD_OWNER_FETCH_FAILED:
      return {
        ...state,
        [action.cardId]: {
          isFetching: false,
          error: action.error,
          owner: state[action.cardId] && state[action.cardId].owner
        }
      }
    default:
      return state
  }
}
