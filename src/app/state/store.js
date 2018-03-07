import { createStore, combineReducers } from 'redux'
import { reducer as user } from './reducers/user'
import { reducer as collection } from './reducers/collection'
import { reducer as cards } from './reducers/cards'

const rootReducer = combineReducers({
  user,
  collection,
  cards
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
