import { takeEvery, call, select } from 'redux-saga/effects'

import { Minter } from '../../../contracts'
import { PURCHASE_PACK_CLICKED } from '../../actions'

import { signTransaction, makeTransaction } from '../utils'

const BASE_EXPANSION_ID = 0
const PACK_PURCHASE_GAS_LIMIT = 500000

function * purchasePack () {
  const confirmed = yield * signTransaction('purchase-pack')
  if (confirmed) {
    const packPrice = yield select(state => state.packPrice.data)
    yield * makeTransaction('Pack purchase', call(
      Minter.purchasePack,
      BASE_EXPANSION_ID,
      {
        value: packPrice,
        gas: PACK_PURCHASE_GAS_LIMIT
      }
    ))
  }
}

export function * saga () {
  yield takeEvery(PURCHASE_PACK_CLICKED, purchasePack)
}
