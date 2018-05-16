import {
  SIGN_TRANSACTION_OPENED,
  SIGN_TRANSACTION_CLOSED,
  SIGN_TRANSACTION_CONFIRMED
} from '../actions'

const defaultState = {
  open: false
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case SIGN_TRANSACTION_OPENED:
      return {
        open: true
      }
    case SIGN_TRANSACTION_CLOSED:
    case SIGN_TRANSACTION_CONFIRMED:
      return {
        open: false
      }
    default:
      return state
  }
}
