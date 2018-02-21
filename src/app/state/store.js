import { createStore, combineReducers } from 'redux'
import { reducer as web3 } from './web3'

const rootReducer = combineReducers({
  web3
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
