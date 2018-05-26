import { takeEvery, call, select, put, take } from 'redux-saga/effects'

import { Minter, waitForConfirmation } from '../../contracts'
import {
  PURCHASE_PACK_CLICKED,
  signTransactionOpened,
  SIGN_TRANSACTION_CLOSED,
  SIGN_TRANSACTION_CONFIRMED,
  notificationCreated,
  notificationDismissed
} from '../actions'

const BASE_EXPANSION_ID = 0
const PACK_PURCHASE_GAS_LIMIT = 500000

function * purchasePack () {
  yield put(signTransactionOpened('purchase-pack'))

  yield take([SIGN_TRANSACTION_CLOSED, SIGN_TRANSACTION_CONFIRMED])
  const confirmed = yield select(state => state.signTransaction.confirmed)
  if (!confirmed) {
    return
  }

  try {
    const packPrice = yield select(state => state.packPrice.data)
    const txHash = yield call(
      Minter.purchasePack,
      BASE_EXPANSION_ID,
      {
        value: packPrice,
        gas: PACK_PURCHASE_GAS_LIMIT
      }
    )

    yield put(notificationCreated({
      spinner: true,
      title: 'Pack purchase pending',
      description: 'Please wait while the transaction is being confirmed'
    }))

    const notificationId = yield select(state => state.notifications.currentId)

    try {
      yield call(waitForConfirmation, txHash)
      yield put(notificationCreated({
        type: 'success',
        title: 'Pack purchase successful',
        description: 'The transaction was confirmed'
      }))
    } catch (error) {
      yield put(notificationCreated({
        type: 'error',
        title: 'Pack purchase unsuccessful',
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

export function * saga () {
  yield takeEvery(PURCHASE_PACK_CLICKED, purchasePack)
}
