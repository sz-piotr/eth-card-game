import { takeEvery, call, select } from 'redux-saga/effects'

import { Minter } from '../../contracts'
import {
  PURCHASE_PACK_CLICKED
} from '../actions'

const BASE_EXPANSION_ID = 0

function * purchasePack () {
  const packPrice = yield select(state => state.packPrice.data)
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
