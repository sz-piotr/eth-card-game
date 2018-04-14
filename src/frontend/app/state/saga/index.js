import { all } from 'redux-saga/effects'

import { saga as metamask } from './metamask'
import { saga as cards } from './cards'
import { saga as collection } from './collection'
import { saga as fetchNewCards } from './fetchNewCards'
import { saga as packPrice } from './packPrice'
import { saga as packPurchase } from './packPurchase'
import { saga as market } from './market'
import { saga as resize } from './resize'

export function * saga () {
  yield all([
    metamask(),
    cards(),
    collection(),
    fetchNewCards(),
    packPrice(),
    packPurchase(),
    market(),
    resize()
  ])
}
