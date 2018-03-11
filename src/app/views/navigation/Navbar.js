import React from 'react'
import { NavLink } from 'react-router-dom'

import NavbarLinks from './NavbarLinks'

const Navbar = () =>
  <nav className='navbar'>
    <div className='navbar-container'>
      <h1>Eth Card Game</h1>
      <NavbarLinks>
        <NavLink exact to='/'>Collection</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
      </NavbarLinks>
    </div>
  </nav>

export default Navbar
