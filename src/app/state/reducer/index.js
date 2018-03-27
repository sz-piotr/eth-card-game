import { combineReducers } from 'redux'

import { reducer as user } from './user'
import { reducer as notifications } from './notifications'
import { reducer as collection } from './collection'
import { reducer as cards } from './cards'
import { reducer as packPrice } from './packPrice'
import { reducer as pickCards } from './battle/pickCards'
import { reducer as market } from './market'

export const reducer = combineReducers({
  user,
  notifications,
  collection,
  cards,
  packPrice,
  pickCards,
  market
})
