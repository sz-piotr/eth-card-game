import {
  PACK_PRICE_FETCH_REQUESTED,
  PACK_PRICE_FETCH_SUCCEDED,
  PACK_PRICE_FETCH_FAILED
} from '../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case PACK_PRICE_FETCH_REQUESTED:
      return {
        isFetching: true,
        error: false,
        data: state.data
      }
    case PACK_PRICE_FETCH_SUCCEDED:
      return {
        isFetching: false,
        error: false,
        data: action.data
      }
    case PACK_PRICE_FETCH_FAILED:
      return {
        isFetching: false,
        error: action.error,
        data: state.data
      }
    default:
      return state
  }
}
