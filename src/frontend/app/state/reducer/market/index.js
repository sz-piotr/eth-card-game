import { combineReducers } from 'redux'

import { reducer as offers } from './offers'
import { reducer as view } from './view'

export const reducer = combineReducers({
  offers,
  view
})
