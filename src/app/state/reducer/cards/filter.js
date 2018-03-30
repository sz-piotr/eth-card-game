import {
  COLLECTION_FILTER_CHANGE,
  COLLECTION_FILTER_RESET
} from '../../actions'

const defaultState = {
  search: '',
  page: 0,
  itemsPerPage: 12
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case COLLECTION_FILTER_CHANGE:
      return {
        ...state,
        ...action.filter
      }
    case COLLECTION_FILTER_RESET:
      return defaultState
    default:
      return state
  }
}
