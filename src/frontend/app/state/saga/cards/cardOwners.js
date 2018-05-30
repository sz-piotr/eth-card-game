import { takeEvery, call, put } from 'redux-saga/effects'

import { Cards } from '../../../contracts'
import {
  CARD_OWNER_FETCH_REQUESTED,
  cardOwnerFetchSucceded,
  cardOwnerFetchFailed
} from '../../actions'

function * fetchCardOwner ({ cardId }) {
  try {
    const data = yield call(Cards.ownerOf, cardId)
    yield put(cardOwnerFetchSucceded(cardId, data))
  } catch (error) {
    yield put(cardOwnerFetchFailed(cardId, error.message))
  }
}

export function * saga () {
  yield takeEvery(CARD_OWNER_FETCH_REQUESTED, fetchCardOwner)
}
