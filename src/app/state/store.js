import { createStore, combineReducers } from 'redux'
import { reducer as user } from './user/user'
import { reducer as collection } from './collection/collection'

const rootReducer = combineReducers({
  user,
  collection
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
