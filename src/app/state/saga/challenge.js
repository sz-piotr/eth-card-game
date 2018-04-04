/* import { takeEvery, call, select } from 'redux-saga/effects'

//import { Minter } from '../../contracts'
import {
  INIT_CHALLENGE
} from '../actions'

const BASE_EXPANSION_ID = 0

function* initChallenge () {
  const selectedCards = yield select(state => state.pickCards.selected)
  try {
    yield call(Minter.purchasePack, BASE_EXPANSION_ID, {
      value: packPrice,
      gas: 1200000 // dummy value
    })
  } catch (error) {
    console.error(error.message)
  }
}

export function* saga () {
  yield takeEvery(PURCHASE_PACK_TRANSACTION, purchasePack)
}
*/
