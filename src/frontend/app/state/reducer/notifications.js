import {
  COLLECTION_FETCH_FAILED,
  CARD_DETAILS_FETCH_FAILED,
  PACK_PRICE_FETCH_FAILED,
  NOTIFICATION_DISMISSED
} from '../actions'

const defaultState = {
  nextId: 0,
  list: [
    {
      id: -2,
      title: 'Pack purchase',
      description: 'Transaction pending',
      spinner: true
    },
    {
      id: -1,
      title: 'Example Notification',
      description: 'This is the description. How about we make it long?'
    }
  ]
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case COLLECTION_FETCH_FAILED:
      return addNotification(state, {
        title: 'Failed to fetch collection',
        description: action.error
      })
    case CARD_DETAILS_FETCH_FAILED:
      return addNotification(state, {
        title: 'Failed to fetch card details',
        description: action.error
      })
    case PACK_PRICE_FETCH_FAILED:
      return addNotification(state, {
        title: 'Failed to fetch pack price',
        description: action.error
      })
    case NOTIFICATION_DISMISSED:
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
