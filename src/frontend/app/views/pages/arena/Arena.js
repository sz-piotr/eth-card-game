import React from 'react'
import { Link } from 'react-router-dom'

import ArenaLinks from './ArenaLinks'

const ArenaSelection = () =>
  <nav>
    <ul className='arena-select'>
      <li><Link to='/arena/locations/1'>
        <img src='images/placeholders/arena.jpg' />
      </Link></li>
      <li><Link to='/arena/locations/1'>
        <img src='images/placeholders/arena.jpg' />
      </Link></li>
      <li><Link to='/arena/locations/1'>
        <img src='images/placeholders/arena.jpg' />
      </Link></li>
      <li><Link to='/arena/locations/1'>
        <img src='images/placeholders/arena.jpg' />
      </Link></li>
      <li><Link to='/arena/locations/1'>
        <img src='images/placeholders/arena.jpg' />
      </Link></li>
      <li><Link to='/arena/locations/1'>
        <img src='images/placeholders/arena.jpg' />
      </Link></li>
    </ul>
  </nav>

const Arena = (props) =>
  <section className='container page'>
    <h1 className='page-title'>Arena</h1>
    <ArenaLinks />
    <h2>Start a new battle</h2>
    <ArenaSelection />
  </section>

export default Arena
