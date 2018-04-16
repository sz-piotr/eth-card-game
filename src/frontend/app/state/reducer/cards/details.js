import {
  CARD_DETAILS_FETCH_REQUESTED,
  CARD_DETAILS_FETCH_SUCCEDED,
  CARD_DETAILS_FETCH_FAILED
} from '../../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case CARD_DETAILS_FETCH_REQUESTED:
      return {
        ...state,
        [action.cardId]: {
          isFetching: true,
          error: false,
          data: state[action.cardId] && state[action.cardId].data
        }
      }
    case CARD_DETAILS_FETCH_SUCCEDED:
      return {
        ...state,
        [action.cardId]: {
          isFetching: false,
          error: false,
          data: action.data
        }
      }
    case CARD_DETAILS_FETCH_FAILED:
      return {
        ...state,
        [action.cardId]: {
          isFetching: false,
          error: action.error,
          data: state[action.cardId] && state[action.cardId].data
        }
      }
    default:
      return state
  }
}
