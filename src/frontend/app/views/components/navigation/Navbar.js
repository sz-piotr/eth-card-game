import React from 'react'
import { NavLink } from 'react-router-dom'

import { Icon } from '../Icon'
import NavbarLinks from './NavbarLinks'

const Navbar = () =>
  <nav className='navbar'>
    <div className='navbar-container'>
      <h1>Eth Card Game</h1>
      <NavbarLinks>
        <NavLink to='/shop'>
          <Icon name='cart' />
          <span>Shop</span>
        </NavLink>
        <NavLink exact to='/collection'>
          <Icon name='collection' />
          <span>Collection</span>
        </NavLink>
        <NavLink to='/arena'>
          <Icon name='arena' />
          <span>Arena</span>
        </NavLink>
        <NavLink to='/market'>
          <Icon name='market' />
          <span>Market</span>
        </NavLink>
      </NavbarLinks>
    </div>
  </nav>

export default Navbar
