import { takeEvery, call, put } from 'redux-saga/effects'

import { Cards } from '../../../contracts'
import {
  CARD_DETAILS_FETCH_REQUESTED,
  cardDetailsFetchSucceded,
  cardDetailsFetchFailed
} from '../../actions'

function * fetchCardDetails ({ cardId }) {
  try {
    const data = yield call(Cards.getCard, cardId)
    yield put(cardDetailsFetchSucceded(cardId, data))
  } catch (error) {
    yield put(cardDetailsFetchFailed(cardId, error.message))
  }
}

export function * saga () {
  yield takeEvery(CARD_DETAILS_FETCH_REQUESTED, fetchCardDetails)
}
