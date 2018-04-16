import {
  COLLECTION_FETCH_REQUESTED,
  COLLECTION_FETCH_SUCCEDED,
  COLLECTION_FETCH_FAILED
} from '../../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case COLLECTION_FETCH_REQUESTED:
      return {
        ...state,
        [action.account]: {
          isFetching: true,
          error: false,
          data: state[action.account] && state[action.account].data
        }
      }
    case COLLECTION_FETCH_SUCCEDED:
      return {
        ...state,
        [action.account]: {
          isFetching: false,
          error: false,
          data: action.data
        }
      }
    case COLLECTION_FETCH_FAILED:
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
