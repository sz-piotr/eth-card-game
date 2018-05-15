import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../../components/Icon'

const ArenaLink = ({ icon, to, children }) =>
  <li className='page-link'><Link to={to}>
    <Icon name={icon} />
    {children}
  </Link></li>

const ArenaLinks = () =>
  <nav>
    <ul className='arena-links'>
      <ArenaLink to='/arena/ongoing' icon='arena'>
        Current battles
      </ArenaLink>
      <ArenaLink to='/arena/history' icon='counter-clockwise'>
        History
      </ArenaLink>
    </ul>
  </nav>

export default ArenaLinks
