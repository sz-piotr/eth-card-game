import React from 'react'
import { Link } from 'react-router-dom'

const ArenaLink = ({ icon, to, children }) =>
  <li className='page-link'><Link to={to}>
    <i className={`icon icon-${icon}`} />
    {children}
  </Link></li>

const ArenaLinks = () =>
  <nav>
    <ul className='arena-links'>
      <ArenaLink to='/arena/ongoing' icon='collection'>
        Current battles
      </ArenaLink>
      <ArenaLink to='/arena/history' icon='collection'>
        History
      </ArenaLink>
    </ul>
  </nav>

export default ArenaLinks
