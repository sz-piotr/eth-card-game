import { call, select, put } from 'redux-saga/effects'

import { waitForConfirmation } from '../../../contracts'
import {
  notificationCreated,
  notificationDismissed
} from '../../actions'

export function * makeTransaction (name, txCall) {
  try {
    const txHash = yield txCall

    yield put(notificationCreated({
      spinner: true,
      title: `${name} pending`,
      description: 'Please wait while the transaction is being confirmed'
    }))

    const notificationId = yield select(state => state.notifications.currentId)

    try {
      yield call(waitForConfirmation, txHash)
      yield put(notificationCreated({
        type: 'success',
        title: `${name} succesful`,
        description: 'The transaction was confirmed'
      }))
    } catch (error) {
      yield put(notificationCreated({
        type: 'error',
        title: `${name} unsuccesful`,
        description: error.message
      }))
    } finally {
      yield put(notificationDismissed(notificationId))
    }
  } catch (error) {
    // TODO: handle errors better
    console.error(error)
  }
}
