import React from 'react'

import ArenaLinks from './ArenaLinks'
import ArenaSelection from './ArenaSelection'

const Arena = (props) =>
  <section className='container page'>
    <h1 className='page-title'>Arena</h1>
    <ArenaLinks />
    <ArenaSelection />
  </section>

export default Arena
