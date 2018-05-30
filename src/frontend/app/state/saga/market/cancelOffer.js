import { takeEvery, call, select } from 'redux-saga/effects'

import { Market } from '../../../contracts'
import { CANCEL_OFFER_CLICKED } from '../../actions'

import { signTransaction, makeTransaction } from '../utils'

const CANCEL_OFFER_GAS_LIMIT = 500000

function * cancelOffer () {
  const confirmed = yield * signTransaction('cancel-offer')
  if (confirmed) {
    const cardId = yield select(state => state.market.offerToCancel)
    yield * makeTransaction('Cancel offer', call(
      Market.cancelOffer,
      cardId,
      { gas: CANCEL_OFFER_GAS_LIMIT }
    ))
  }
}

export function * saga () {
  yield takeEvery(CANCEL_OFFER_CLICKED, cancelOffer)
}
