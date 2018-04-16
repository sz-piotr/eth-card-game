import { takeEvery, call, put } from 'redux-saga/effects'

import { Minter } from '../../contracts'
import {
  PACK_PRICE_FETCH_REQUESTED,
  packPriceFetchSucceded,
  packPriceFetchFailed
} from '../actions'

function * fetchPackPrice ({ account }) {
  try {
    const data = yield call(Minter.packPrice)
    yield put(packPriceFetchSucceded(data))
  } catch (error) {
    console.error(error)
    yield put(packPriceFetchFailed(error.message))
  }
}

export function * saga () {
  yield takeEvery(PACK_PRICE_FETCH_REQUESTED, fetchPackPrice)
}
