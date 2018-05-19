import {
  NOTIFICATION_CREATED,
  NOTIFICATION_DISMISSED
} from '../actions'

const defaultState = {
  currentId: 0,
  list: []
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case NOTIFICATION_CREATED:
      return addNotification(state, action.notification)
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
  const toBeAdded = {
    id: state.currentId + 1,
    type: notification.type || 'info',
    title: notification.title,
    description: notification.description,
    spinner: notification.spinner || false
  }
  return {
    currentId: toBeAdded.id,
    list: [
      ...state.list,
      toBeAdded
    ]
  }
}
