import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeEnchancers } from './devtools'
import { reducer } from './reducer'
import { saga } from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeEnchancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(saga)

export { store }
