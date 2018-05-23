import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary'

import Navbar from './components/navigation/Navbar'
import AlertBar from './components/info/AlertBar'
import NotificationList from './components/info/NotificationList'
import SignTransaction from './components/info/SignTransaction'

import Arena from './pages/arena/Arena'
import Collection from './pages/collection/Collection'
import Market from './pages/market/Market'
import Shop from './pages/shop/Shop'
import NotFound from './pages/NotFound'

const App = () =>
  <ErrorBoundary>
    <SignTransaction />
    <Navbar />
    <AlertBar />
    <NotificationList />
    <Switch>
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/collection' component={Collection} />
      <Route exact path='/collection/:account' component={Collection} />
      <Route exact path='/arena' component={Arena} />
      <Route exact path='/market' component={Market} />
      <Redirect exact from='/' to='/shop' />
      <Route component={NotFound} />
    </Switch>
  </ErrorBoundary>

export default App
