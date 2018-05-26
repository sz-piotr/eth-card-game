import {
  SIGN_TRANSACTION_OPENED,
  SIGN_TRANSACTION_CLOSED,
  SIGN_TRANSACTION_CONFIRMED
} from '../actions'

const defaultState = {
  open: false,
  confirmed: false
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case SIGN_TRANSACTION_OPENED:
      return {
        open: true,
        confirmed: false,
        type: action.txType
      }
    case SIGN_TRANSACTION_CLOSED:
      return {
        ...state,
        open: false
      }
    case SIGN_TRANSACTION_CONFIRMED:
      return {
        type: state.type,
        open: false,
        confirmed: true
      }
    default:
      return state
  }
}
