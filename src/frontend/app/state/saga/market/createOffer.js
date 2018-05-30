import { takeEvery, call, select } from 'redux-saga/effects'

import { Market } from '../../../contracts'
import { CREATE_OFFER_CLICKED } from '../../actions'

import { signTransaction, makeTransaction } from '../utils'

const CREATE_OFFER_GAS_LIMIT = 500000

function * purchaseCard () {
  const confirmed = yield * signTransaction('create-offer')
  if (confirmed) {
    const offer = yield select(state => state.market.offerToCreate)
    yield * makeTransaction('Create offer', call(
      Market.createOffer,
      offer.cardId,
      offer.price,
      { gas: CREATE_OFFER_GAS_LIMIT }
    ))
  }
}

export function * saga () {
  yield takeEvery(CREATE_OFFER_CLICKED, purchaseCard)
}
