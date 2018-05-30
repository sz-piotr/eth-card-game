import { takeEvery, call, select } from 'redux-saga/effects'

import { Market } from '../../../contracts'
import { PURCHASE_CARD_CLICKED } from '../../actions'

import { signTransaction, makeTransaction } from '../utils'

const CARD_PURCHASE_GAS_LIMIT = 500000

function * purchaseCard () {
  const confirmed = yield * signTransaction('purchase-card')
  if (confirmed) {
    const cardId = yield select(state => state.market.cardToPurchase)
    const { price } = yield select(state => state.market.offers[cardId])
    yield * makeTransaction('Pack purchase', call(
      Market.purchase,
      cardId,
      {
        value: price,
        gas: CARD_PURCHASE_GAS_LIMIT
      }
    ))
  }
}

export function * saga () {
  yield takeEvery(PURCHASE_CARD_CLICKED, purchaseCard)
}
