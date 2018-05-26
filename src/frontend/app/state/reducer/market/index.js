import { combineReducers } from 'redux'

import { reducer as offers } from './offers'
import { reducer as view } from './view'
import { reducer as cardToPurchase } from './cardToPurchase'
import { reducer as offerToCancel } from './offerToCancel'
import { reducer as offerToCreate } from './offerToCreate'

export const reducer = combineReducers({
  offers,
  view,
  cardToPurchase,
  offerToCancel,
  offerToCreate
})
