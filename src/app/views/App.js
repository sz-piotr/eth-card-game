import React from 'react'

import Navbar from './Navbar'
import Counter from './Counter'
import AlertBar from './AlertBar'

const App = () =>
  <React.Fragment>
    <Navbar />
    <AlertBar />
    <main className='app'>
      <Counter />
    </main>
  </React.Fragment>

export default App
