import { createStore, combineReducers } from 'redux'
import { reducer as metamask } from './metamask'

const rootReducer = combineReducers({
  metamask
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
