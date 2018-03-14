import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './navigation/Navbar'
import AlertBar from './info/AlertBar'
import NotificationOverlay from './info/NotificationOverlay'

import Shop from './shop/Shop'
import Collection from './collection/Collection'
import ErrorBoundary from './ErrorBoundary'
import InitBattle from './battle/InitBattle'

const App = () =>
  <ErrorBoundary>
    <Navbar />
    <AlertBar />
    <main className='app'>
      <NotificationOverlay />
      <Route exact path='/' component={Collection} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/init' component={InitBattle} />
    </main>
  </ErrorBoundary>

export default App
