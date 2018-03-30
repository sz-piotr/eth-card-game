import { combineReducers } from 'redux'

import { reducer as details } from './details'
import { reducer as byOwner } from './byOwner'

export const reducer = combineReducers({
  details,
  byOwner
})
