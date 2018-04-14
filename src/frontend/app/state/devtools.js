import { compose } from 'redux'

export const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose
