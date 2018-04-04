import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './components/navigation/Navbar'
import AlertBar from './components/info/AlertBar'
import NotificationOverlay from './components/info/NotificationOverlay'
import ErrorBoundary from './components/ErrorBoundary'
import {
  Arena,
  Collection,
  Home,
  Market,
  Shop
} from './pages'

const App = () =>
  <ErrorBoundary>
    <Navbar />
    <AlertBar />
    <main className='app'>
      <NotificationOverlay />
      <Route exact path='/home' component={Home} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/collection' component={Collection} />
      <Route exact path='/arena' component={Arena} />
      <Route exact path='/market' component={Market} />
    </main>
  </ErrorBoundary>

export default App
