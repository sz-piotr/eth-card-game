import { combineReducers } from 'redux'

import { reducer as details } from './details'
import { reducer as byOwner } from './byOwner'
import { reducer as view } from './view'

export const reducer = combineReducers({
  details,
  byOwner,
  view
})
