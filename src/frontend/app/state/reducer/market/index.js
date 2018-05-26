import { combineReducers } from 'redux'

import { reducer as offers } from './offers'
import { reducer as view } from './view'
import { reducer as cardToPurchase } from './cardToPurchase'

export const reducer = combineReducers({
  offers,
  view,
  cardToPurchase
})
