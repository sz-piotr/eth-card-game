import React from 'react'

import ArenaLinks from './ArenaLinks'
import ArenaSelection from './ArenaSelection'

const Arena = (props) =>
  <main className='page'>
    <header className='header'>
      <h1 className='header__title'>Arena</h1>
    </header>
    <ArenaLinks />
    <ArenaSelection />
  </main>

export default Arena
