import {
  CARD_SEARCH_CHANGED,
  CARDS_PAGE_CHANGED,
  RESOULUTION_CHANGE,
  CARD_VIEW_RESET,
  CARD_SORT_CHANGED
} from '../../actions'

const defaultState = {
  search: '',
  page: 0,
  itemsPerPage: 4 * 2,
  sort: 'id descending'
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case CARD_SEARCH_CHANGED:
      return {
        ...state,
        search: action.value
      }
    case CARDS_PAGE_CHANGED:
      return {
        ...state,
        page: action.value
      }
    case RESOULUTION_CHANGE:
      return {
        ...state,
        itemsPerPage: widthToItemsPerPage(action.width)
      }
    case CARD_SORT_CHANGED:
      return {
        ...state,
        sort: action.sort
      }
    case CARD_VIEW_RESET:
      return {
        ...defaultState,
        sort: state.sort
      }
    default:
      return state
  }
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
