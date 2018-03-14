import { delay } from 'redux-saga'
import { takeEvery, call, put, select } from 'redux-saga/effects'
import localForage from 'localforage'

import { CardsContract } from '../../contracts'
import {
  FETCH_CARD_DETAILS_REQUEST,
  fetchCardDetailsSuccess,
  fetchCardDetailsFailure
} from '../actions'

/* TODO: maybe make cache into a wrapper instead of manual implementation
 * This is not testable :/
 * Also, the localForage implementation imposes limits on storage size,
 * it should be possible to handle full storage in the wrapper
 */
async function getCardWithCache (cardId, network) {
  const key = `cards/${network}/${cardId}`
  let data = await localForage.getItem(key)
  if (data === null) {
    data = await CardsContract.getCard(cardId)
    data = data.map(value => value.toString())
    await localForage.setItem(key, data)
  }
  return data
}

function * fetchCardDetails ({ cardId }) {
  yield delay(1000 + Math.random() * 3000) // artificial delay for testing
  const network = yield select(state => state.user.network)
  try {
    const data = yield call(getCardWithCache, cardId, network)
    yield put(fetchCardDetailsSuccess(cardId, data))
  } catch (error) {
    yield put(fetchCardDetailsFailure(cardId, error.message))
  }
}

export function * saga () {
  yield takeEvery(FETCH_CARD_DETAILS_REQUEST, fetchCardDetails)
}
