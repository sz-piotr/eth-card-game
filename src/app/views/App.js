import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './navigation/Navbar'
import AlertBar from './AlertBar'

import Shop from './shop/Shop'
import Collection from './collection/Collection'

const App = () =>
  <React.Fragment>
    <Navbar />
    <AlertBar />
    <main className='app'>
      <Route exact path='/' component={Collection} />
      <Route exact path='/shop' component={Shop} />
    </main>
  </React.Fragment>

export default App
