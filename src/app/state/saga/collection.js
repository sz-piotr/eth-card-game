import { delay } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'

import { CardsContract } from '../../contracts'
import {
  FETCH_COLLECTION_REQUEST,
  fetchCollectionSuccess,
  fetchCollectionFailure
} from '../actions'

function * fetchCollection ({ account }) {
  yield delay(2000) // artificial delay for testing
  try {
    let data = yield call(CardsContract.tokensOf, account)
    data = data.map(value => value.toString())
    yield put(fetchCollectionSuccess(account, data))
  } catch (error) {
    yield put(fetchCollectionFailure(account, error))
  }
}

export function * saga () {
  yield takeEvery(FETCH_COLLECTION_REQUEST, fetchCollection)
}
