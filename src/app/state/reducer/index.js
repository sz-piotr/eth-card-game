import { combineReducers } from 'redux'

import { reducer as user } from './user'
import { reducer as collection } from './collection'
import { reducer as cards } from './cards'
import { reducer as packPrice } from './packPrice'

export const reducer = combineReducers({
  user,
  collection,
  cards,
  packPrice
})
