import {
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE
} from '../../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case FETCH_COLLECTION_REQUEST:
      return {
        ...state,
        [action.account]: {
          isFetching: true,
          error: false,
          data: state[action.account] && state[action.account].data
        }
      }
    case FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        [action.account]: {
          isFetching: false,
          error: false,
          data: action.data
        }
      }
    case FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        [action.account]: {
          isFetching: false,
          error: action.error,
          data: state[action.account] && state[action.account].data
        }
      }
    default:
      return state
  }
}
