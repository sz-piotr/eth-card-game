import { takeEvery, call, put } from 'redux-saga/effects'

import { Cards } from '../../contracts'
import {
  FETCH_CARD_DETAILS_REQUEST,
  fetchCardDetailsSuccess,
  fetchCardDetailsFailure
} from '../actions'

function * fetchCardDetails ({ cardId }) {
  try {
    const data = yield call(Cards.getCard, cardId)
    yield put(fetchCardDetailsSuccess(cardId, data))
  } catch (error) {
    yield put(fetchCardDetailsFailure(cardId, error.message))
  }
}

export function * saga () {
  yield takeEvery(FETCH_CARD_DETAILS_REQUEST, fetchCardDetails)
}
