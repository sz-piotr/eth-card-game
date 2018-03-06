import { createStore, combineReducers } from 'redux'
import { reducer as user } from './user/user'
import { reducer as cards } from './cards/cards'

const rootReducer = combineReducers({
  user,
  cards
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
