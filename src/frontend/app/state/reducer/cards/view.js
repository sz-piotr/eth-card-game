import {
  CHANGE_CARD_SEARCH,
  CHANGE_CARDS_PAGE,
  RESOULUTION_CHANGE,
  RESET_CARD_VIEW,
  CHANGE_CARD_SORT
} from '../../actions'

const defaultState = {
  search: '',
  page: 0,
  itemsPerPage: 4 * 2,
  sort: 'id descending'
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CARD_SEARCH:
      return {
        ...state,
        search: action.value
      }
    case CHANGE_CARDS_PAGE:
      return {
        ...state,
        page: action.value
      }
    case RESOULUTION_CHANGE:
      return {
        ...state,
        itemsPerPage: widthToItemsPerPage(action.width)
      }
    case CHANGE_CARD_SORT:
      return {
        ...state,
        sort: action.sort
      }
    case RESET_CARD_VIEW:
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
