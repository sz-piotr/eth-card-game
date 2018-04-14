import {
  FETCH_PACK_PRICE_REQUEST,
  FETCH_PACK_PRICE_SUCCESS,
  FETCH_PACK_PRICE_FAILURE
} from '../actions'

export function reducer (state = {}, action) {
  switch (action.type) {
    case FETCH_PACK_PRICE_REQUEST:
      return {
        isFetching: true,
        error: false,
        data: state.data
      }
    case FETCH_PACK_PRICE_SUCCESS:
      return {
        isFetching: false,
        error: false,
        data: action.data
      }
    case FETCH_PACK_PRICE_FAILURE:
      return {
        isFetching: false,
        error: action.error,
        data: state.data
      }
    default:
      return state
  }
}
