import React from 'react'
import { Link, Route } from 'react-router-dom'

import Navbar from './Navbar'
import AlertBar from './AlertBar'
import CardStore from './CardStore'
import Counter from './Counter'

const App = () =>
  <React.Fragment>
    <Navbar />
    <AlertBar />
    <main className='app'>
      <Route path='/' component={Counter} />
      <Route path='/cards' component={CardStore} />
      <p><Link to='/'>Counter</Link></p>
      <p><Link to='/cards'>Cards</Link></p>
    </main>
  </React.Fragment>

export default App
