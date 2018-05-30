import { all } from 'redux-saga/effects'

import { saga as cardOwners } from './cards/cardOwners'
import { saga as cards } from './cards/cards'
import { saga as collection } from './cards/collection'
import { saga as fetchNewCards } from './cards/fetchNewCards'

import { saga as cancelOffer } from './market/cancelOffer'
import { saga as cardPurchase } from './market/cardPurchase'
import { saga as market } from './market/market'

import { saga as packPrice } from './shop/packPrice'
import { saga as packPurchase } from './shop/packPurchase'

import { saga as challenge } from './challenge'
import { saga as metamask } from './metamask'
import { saga as resize } from './resize'

export function * saga () {
  yield all([
    cardOwners(),
    cards(),
    collection(),
    fetchNewCards(),

    cancelOffer(),
    cardPurchase(),
    market(),

    packPrice(),
    packPurchase(),

    challenge(),
    metamask(),
    resize()
  ])
}
