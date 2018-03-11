import { takeEvery, call, put } from 'redux-saga/effects'

import { MinterContract } from '../../contracts'
import {
  FETCH_PACK_PRICE_REQUEST,
  fetchPackPriceSuccess,
  fetchPackPriceFailure
} from '../actions'

function * fetchPackPrice ({ account }) {
  try {
    let data = yield call(MinterContract.packPrice)
    yield put(fetchPackPriceSuccess(data.toString()))
  } catch (error) {
    console.error(error)
    yield put(fetchPackPriceFailure(error))
  }
}

export function * saga () {
  yield takeEvery(FETCH_PACK_PRICE_REQUEST, fetchPackPrice)
}
