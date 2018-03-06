import { createStore, combineReducers } from 'redux'
import { reducer as user } from './user/user'
import { reducer as counter } from './counter'
import { reducer as cardStore } from './cardStore'

const rootReducer = combineReducers({
  user,

  // TODO: remove
  counter,
  cardStore
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
