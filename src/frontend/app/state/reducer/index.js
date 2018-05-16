import { combineReducers } from 'redux'

import { reducer as user } from './user'
import { reducer as notifications } from './notifications'
import { reducer as cards } from './cards'
import { reducer as packPrice } from './packPrice'
import { reducer as pickCards } from './pickCards'
import { reducer as market } from './market'
import { reducer as signTransaction } from './signTransaction'

export const reducer = combineReducers({
  user,
  notifications,
  cards,
  packPrice,
  pickCards,
  market,
  signTransaction
})
