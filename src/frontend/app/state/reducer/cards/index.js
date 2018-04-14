import { combineReducers } from 'redux'

import { reducer as details } from './details'
import { reducer as byOwner } from './byOwner'
import { reducer as filter } from './filter'

export const reducer = combineReducers({
  details,
  byOwner,
  filter
})
