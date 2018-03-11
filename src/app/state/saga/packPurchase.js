import { takeEvery, call, select } from 'redux-saga/effects'

import { MinterContract } from '../../contracts'
import {
  PURCHASE_PACK_TRANSACTION
} from '../actions'

function * purchasePack () {
  const packPrice = yield select(state => state.packPrice.data)
  try {
    yield call(MinterContract.purchasePack, 1, {
      value: packPrice,
      gas: 1200000 // dummy value
    })
  } catch (error) {
    console.error(error)
  }
}

export function * saga () {
  yield takeEvery(PURCHASE_PACK_TRANSACTION, purchasePack)
}
