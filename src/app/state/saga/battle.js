import { takeEvery, put } from 'redux-saga/effects'

import {
  PICK_CARD,
  unselectCard
} from '../actions'

function * afterPick () {
  yield put(unselectCard())
}

export function * saga () {
  yield takeEvery(PICK_CARD, afterPick)
}
