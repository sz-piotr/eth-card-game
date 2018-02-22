import { createStore, combineReducers } from 'redux'
import { reducer as web3 } from './web3'
import { reducer as counter } from './counter'
import { reducer as cardStore } from './cardStore'

const rootReducer = combineReducers({
  web3,
  counter,
  cardStore
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
