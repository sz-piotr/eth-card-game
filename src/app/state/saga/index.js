import { all } from 'redux-saga/effects'

import { saga as cards } from './cards'
import { saga as collection } from './collection'

export function * saga () {
  yield all([
    cards(),
    collection()
  ])
}
