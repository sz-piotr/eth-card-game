import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './components/navigation/Navbar'
import AlertBar from './components/info/AlertBar'
import NotificationOverlay from './components/info/NotificationOverlay'
import ErrorBoundary from './components/ErrorBoundary'

import Arena from './pages/arena/Arena'
import Collection from './pages/collection/Collection'
import Market from './pages/market/Market'
import Shop from './pages/shop/Shop'

const App = () =>
  <ErrorBoundary>
    <Navbar />
    <AlertBar />
    <NotificationOverlay />
    <Route exact path='/shop' component={Shop} />
    <Route exact path='/collection' component={Collection} />
    <Route exact path='/arena' component={Arena} />
    <Route exact path='/market' component={Market} />
  </ErrorBoundary>

export default App
