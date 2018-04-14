import React from 'react'
import { NavLink } from 'react-router-dom'

import NavbarLinks from './NavbarLinks'

const Navbar = () =>
  <nav className='navbar'>
    <div className='navbar-container'>
      <h1>Eth Card Game</h1>
      <NavbarLinks>
        <NavLink to='/shop'>
          <img src='images/placeholders/square.svg' />
          <span>Shop</span>
        </NavLink>
        <NavLink exact to='/collection'>
          <img src='images/placeholders/square.svg' />
          <span>Collection</span>
        </NavLink>
        <NavLink to='/arena'>
          <img src='images/placeholders/square.svg' />
          <span>Arena</span>
        </NavLink>
        <NavLink to='/market'>
          <img src='images/placeholders/square.svg' />
          <span>Market</span>
        </NavLink>
      </NavbarLinks>
    </div>
  </nav>

export default Navbar
