import {
  FETCH_CARD_DETAILS_REQUEST,
  FETCH_CARD_DETAILS_SUCCESS,
  FETCH_CARD_DETAILS_FAILURE
} from '../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case FETCH_CARD_DETAILS_REQUEST:
      return {
        ...state,
        [action.cardId]: {
          isFetching: true,
          error: false,
          data: state[action.cardId] && state[action.cardId].data
        }
      }
    case FETCH_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        [action.cardId]: {
          isFetching: false,
          error: false,
          data: action.data
        }
      }
    case FETCH_CARD_DETAILS_FAILURE:
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
