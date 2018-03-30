import { takeEvery, call, put } from 'redux-saga/effects'

import { Minter } from '../../contracts'
import {
  FETCH_PACK_PRICE_REQUEST,
  fetchPackPriceSuccess,
  fetchPackPriceFailure
} from '../actions'

function * fetchPackPrice ({ account }) {
  try {
    const data = yield call(Minter.packPrice)
    yield put(fetchPackPriceSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(fetchPackPriceFailure(error.message))
  }
}

export function * saga () {
  yield takeEvery(FETCH_PACK_PRICE_REQUEST, fetchPackPrice)
}
