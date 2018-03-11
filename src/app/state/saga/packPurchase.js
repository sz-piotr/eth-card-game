import { takeEvery, call } from 'redux-saga/effects'

import { MinterContract } from '../../contracts'
import {
  PURCHASE_PACK_TRANSACTION
} from '../actions'

function * purchasePack () {
  try {
    yield call(MinterContract.purchasePack, 1, {
      // dummy values
      value: '200000000000000000000',
      gas: 1200000
    })
  } catch (error) {
    console.error(error)
  }
}

export function * saga () {
  yield takeEvery(PURCHASE_PACK_TRANSACTION, purchasePack)
}
