import { put, take } from 'redux-saga/effects'

import {
  signTransactionOpened,
  SIGN_TRANSACTION_CLOSED,
  SIGN_TRANSACTION_CONFIRMED
} from '../../actions'

export function * signTransaction (type) {
  yield put(signTransactionOpened(type))
  const action = yield take([SIGN_TRANSACTION_CLOSED, SIGN_TRANSACTION_CONFIRMED])
  return action.type === SIGN_TRANSACTION_CONFIRMED
}
