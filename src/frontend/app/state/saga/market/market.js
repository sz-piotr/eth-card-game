import { eventChannel } from 'redux-saga'
import { call, take, put } from 'redux-saga/effects'

import { Market } from '../../../contracts'
import {
  marketOfferCreated,
  marketOfferCanceled,
  marketTokenPurchased
} from '../../actions'

function createMarketChannel (fromBlock) {
  return eventChannel(function (emitter) {
    const unsubscribe = Market.onEvent(
      fromBlock,
      (err, data) => !err && emitter(data) // TODO: better error handling
    )
    return unsubscribe
  })
}

export function * saga () {
  const marketChannel = yield call(createMarketChannel, 0)
  while (true) {
    const data = yield take(marketChannel)

    const at = [data.blockNumber, data.transactionIndex, data.logIndex]
    const { seller, tokenId, price } = data.args

    switch (data.event) {
      case 'OfferCreated':
        yield put(marketOfferCreated(at, seller, tokenId.toString(), price.toString()))
        break
      case 'OfferCanceled':
        yield put(marketOfferCanceled(at, tokenId.toString()))
        break
      case 'TokenPurchased':
        yield put(marketTokenPurchased(at, tokenId.toString()))
        break
    }
  }
}
