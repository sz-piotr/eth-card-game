import {
  COLLECTION_FILTER_CHANGE_SEARCH,
  COLLECTION_FILTER_CHANGE_PAGE,
  RESOULUTION_CHANGE,
  COLLECTION_FILTER_RESET
} from '../../actions'

const defaultState = {
  search: '',
  page: 0,
  itemsPerPage: 4 * 2
}

function widthToItemsPerPage (width) {
  if (width < 650) { // @device-phone
    return 2 * 3
  } else if (width < 800) { // @device-tablet
    return 3 * 2
  } else {
    return 4 * 2
  }
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case COLLECTION_FILTER_CHANGE_SEARCH:
      return {
        ...state,
        search: action.value
      }
    case COLLECTION_FILTER_CHANGE_PAGE:
      return {
        ...state,
        page: action.value
      }
    case RESOULUTION_CHANGE:
      return {
        ...state,
        itemsPerPage: widthToItemsPerPage(action.width)
      }
    case COLLECTION_FILTER_RESET:
      return defaultState
    default:
      return state
  }
}
