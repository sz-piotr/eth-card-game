import { takeEvery, call, select, put, take } from 'redux-saga/effects'

import { Minter } from '../../contracts'
import {
  PURCHASE_PACK_CLICKED,
  signTransactionOpened,
  SIGN_TRANSACTION_CLOSED,
  SIGN_TRANSACTION_CONFIRMED
} from '../actions'

const BASE_EXPANSION_ID = 0

function * purchasePack () {
  const packPrice = yield select(state => state.packPrice.data)

  yield put(signTransactionOpened())

  const action = yield take([SIGN_TRANSACTION_CLOSED, SIGN_TRANSACTION_CONFIRMED])
  if (action.type === SIGN_TRANSACTION_CLOSED) {
    return
  }

  try {
    yield call(Minter.purchasePack, BASE_EXPANSION_ID, {
      value: packPrice,
      gas: 1200000 // dummy value
    })
  } catch (error) {
    console.error(error.message)
  }
}

export function * saga () {
  yield takeEvery(PURCHASE_PACK_CLICKED, purchasePack)
}
