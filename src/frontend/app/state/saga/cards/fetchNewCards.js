import { takeEvery, select, put } from 'redux-saga/effects'

import {
  COLLECTION_FETCH_SUCCEDED,
  MARKET_OFFER_CREATED,
  cardDetailsFetchRequested
} from '../../actions'

function * onCollectionFetchSucceded ({ data }) {
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
    yield put(cardDetailsFetchRequested(cardId))
  }
}

function shouldFetch (cardDetails) {
  return !cardDetails ||
    !(cardDetails.data || cardDetails.isFetching)
}

export function * saga () {
  yield takeEvery(COLLECTION_FETCH_SUCCEDED, onCollectionFetchSucceded)
  yield takeEvery(MARKET_OFFER_CREATED, onMarketOfferCreated)
}
