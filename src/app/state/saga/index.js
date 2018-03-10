import { all } from 'redux-saga/effects'

import { saga as cards } from './cards'

export function * saga () {
  yield all([
    cards()
  ])
}
