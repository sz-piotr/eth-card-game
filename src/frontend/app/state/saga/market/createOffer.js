import { takeEvery, call, select } from 'redux-saga/effects'

import { Cards, Market, ethToWei, encodeAsBytes } from '../../../contracts'
import { CREATE_OFFER_CLICKED } from '../../actions'

import { signTransaction, makeTransaction } from '../utils'

const CREATE_OFFER_GAS_LIMIT = 500000

function * purchaseCard () {
  const confirmed = yield * signTransaction('create-offer')
  if (confirmed) {
    const account = yield select(state => state.user.account)
    const offer = yield select(state => state.market.offerToCreate)
    const marketAddress = yield call(Market.getAddress)

    const data = encodeAsBytes(ethToWei(offer.price))

    yield * makeTransaction('Create offer', call(
      Cards.safeTransferFrom,
      account,
      marketAddress,
      offer.cardId,
      data,
      { gas: CREATE_OFFER_GAS_LIMIT }
    ))
  }
}

export function * saga () {
  yield takeEvery(CREATE_OFFER_CLICKED, purchaseCard)
}
