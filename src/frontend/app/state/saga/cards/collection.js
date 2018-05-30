import { takeEvery, call, put } from 'redux-saga/effects'

import { Cards } from '../../../contracts'
import {
  COLLECTION_FETCH_REQUESTED,
  collectionFetchSucceded,
  collectionFetchFailed
} from '../../actions'

function * fetchCollection ({ account }) {
  try {
    const data = yield call(Cards.tokensOf, account)
    yield put(collectionFetchSucceded(account, data))
  } catch (error) {
    yield put(collectionFetchFailed(account, error.message))
  }
}

export function * saga () {
  yield takeEvery(COLLECTION_FETCH_REQUESTED, fetchCollection)
}
