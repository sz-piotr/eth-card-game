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
      <p><Link to='/'>Counter</Link>, <Link to='/cards'>Cards</Link></p>
      <Route exact path='/' component={Counter} />
      <Route exact path='/cards' component={CardStore} />
    </main>
  </React.Fragment>

export default App
