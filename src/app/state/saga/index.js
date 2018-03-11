import { all } from 'redux-saga/effects'

import { saga as cards } from './cards'
import { saga as collection } from './collection'
import { saga as packPurchase } from './packPurchase'

export function * saga () {
  yield all([
    cards(),
    collection(),
    packPurchase()
  ])
}
