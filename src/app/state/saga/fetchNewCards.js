import { takeEvery, select, put } from 'redux-saga/effects'

import {
  FETCH_COLLECTION_SUCCESS,
  MARKET_OFFER_CREATED,
  fetchCardDetailsRequest
} from '../actions'

function * onFetchCollectionSuccess ({ data }) {
  for (const cardId of data) {
    yield * fetchCardDetailsIfNew(cardId)
  }
}

function * onMarketOfferCreated ({ tokenId }) {
  yield * fetchCardDetailsIfNew(tokenId)
}

function * fetchCardDetailsIfNew (cardId) {
  const cardDetails = yield select(state => state.cards.details[cardId])
  if (shouldFetch(cardDetails)) {
    yield put(fetchCardDetailsRequest(cardId))
  }
}

function shouldFetch (cardDetails) {
  return !cardDetails ||
    !(cardDetails.data || cardDetails.isFetching)
}

export function * saga () {
  yield takeEvery(FETCH_COLLECTION_SUCCESS, onFetchCollectionSuccess)
  yield takeEvery(MARKET_OFFER_CREATED, onMarketOfferCreated)
}
