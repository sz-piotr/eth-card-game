import { takeEvery, call, put } from 'redux-saga/effects'

import { Cards } from '../../contracts'
import {
  FETCH_COLLECTION_REQUEST,
  fetchCollectionSuccess,
  fetchCollectionFailure
} from '../actions'

function * fetchCollection ({ account }) {
  try {
    const data = yield call(Cards.tokensOf, account)
    yield put(fetchCollectionSuccess(account, data))
  } catch (error) {
    yield put(fetchCollectionFailure(account, error.message))
  }
}

export function * saga () {
  yield takeEvery(FETCH_COLLECTION_REQUEST, fetchCollection)
}
