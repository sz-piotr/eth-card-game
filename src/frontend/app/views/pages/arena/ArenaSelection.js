import React from 'react'
import { Link } from 'react-router-dom'

const ArenaOption = () =>
  <li class='arena-option'><Link to='/arena/locations/1'>
    <img class='arena-option-image' src='images/placeholders/arena.jpg' />
    <div class='arena-option-info'>
      <h3 class='arena-option-title'>Babel Arena</h3>
      <p class='arena-option-description'>Levels 1-2, common only</p>
    </div>
  </Link></li>

const ArenaSelection = () =>
  <section>
    <h2 className='section-title'>Start a new battle</h2>
    <nav>
      <ul className='arena-select'>
        <ArenaOption />
        <ArenaOption />
        <ArenaOption />
        <ArenaOption />
        <ArenaOption />
        <ArenaOption />
      </ul>
    </nav>
  </section>

export default ArenaSelection
