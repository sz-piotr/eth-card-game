import {
  MARKET_SEARCH_CHANGED,
  MARKET_PAGE_CHANGED,
  MARKET_VIEW_RESET
} from '../../actions'

const defaultState = {
  search: '',
  page: 0,
  itemsPerPage: 10
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case MARKET_SEARCH_CHANGED:
      return {
        ...state,
        search: action.value
      }
    case MARKET_PAGE_CHANGED:
      return {
        ...state,
        page: action.value
      }
    case MARKET_VIEW_RESET:
      return defaultState
    default:
      return state
  }
}
