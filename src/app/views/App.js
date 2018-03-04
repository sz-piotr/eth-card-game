import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './navigation/Navbar'
import AlertBar from './AlertBar'
import CardStore from './CardStore'
import Counter from './Counter'

const App = () =>
  <React.Fragment>
    <Navbar />
    <AlertBar />
    <main className='app'>
      <Route exact path='/' component={Counter} />
      <Route exact path='/cards' component={CardStore} />
    </main>
  </React.Fragment>

export default App
