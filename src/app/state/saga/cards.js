import { delay } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'

import { CardsContract } from '../../contracts/CardsContract'
import {
  FETCH_CARD_DETAILS_REQUEST,
  fetchCardDetailsSuccess,
  fetchCardDetailsFailure
} from '../actions'

function * fetchCardDetails ({ cardId }) {
  yield delay(1000 + Math.random() * 3000) // artificial delay for testing
  try {
    let data = yield call(CardsContract.getCard, cardId)
    data = data.map(value => value.toString())
    yield put(fetchCardDetailsSuccess(cardId, data))
  } catch (error) {
    yield put(fetchCardDetailsFailure(cardId, error))
  }
}

export function * saga () {
  yield takeEvery(FETCH_CARD_DETAILS_REQUEST, fetchCardDetails)
}
