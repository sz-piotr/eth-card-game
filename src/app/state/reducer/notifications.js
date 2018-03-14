import {
  FETCH_COLLECTION_FAILURE,
  FETCH_CARD_DETAILS_FAILURE,
  FETCH_PACK_PRICE_FAILURE,
  DISMISS_NOTIFICATION
} from '../actions'

const defaultState = {
  nextId: 3,
  list: [
    { id: 0, title: 'Title 0', description: 'description' },
    { id: 1, title: 'Title 1', description: 'description' },
    { id: 2, title: 'Title 2', description: 'description' }
  ]
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case FETCH_COLLECTION_FAILURE:
      return addNotification(state, {
        title: 'Failed to fetch collection',
        description: action.error
      })
    case FETCH_CARD_DETAILS_FAILURE:
      return addNotification(state, {
        title: 'Failed to fetch card details',
        description: action.error
      })
    case FETCH_PACK_PRICE_FAILURE:
      return addNotification(state, {
        title: 'Failed to fetch pack price',
        description: action.error
      })
    case DISMISS_NOTIFICATION:
      return {
        nextId: state.nextId,
        list: state.list.filter(({ id }) => id !== action.id)
      }
    default:
      return state
  }
}

function addNotification (state, notification) {
  notification.id = state.nextId
  return {
    nextId: state.nextId + 1,
    list: [
      ...state.list,
      notification
    ]
  }
}
