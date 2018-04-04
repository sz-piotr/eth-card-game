import React from 'react'
import { NavLink } from 'react-router-dom'

import NavbarLinks from './NavbarLinks'

const Navbar = () =>
  <nav className='navbar'>
    <div className='navbar-container'>
      <h1>Eth Card Game</h1>
      <NavbarLinks>
        <NavLink exact to='/'>
          <i className='icon-home' />
          <span>Home</span>
        </NavLink>
        <NavLink to='/shop'>
          <i className='icon-shop' />
          <span>Shop</span>
        </NavLink>
        <NavLink exact to='/collection'>
          <i className='icon-collection' />
          <span>Collection</span>
        </NavLink>
        <NavLink to='/arena'>
          <i className='icon-arena' />
          <span>Arena</span>
        </NavLink>
        <NavLink to='/market'>
          <i className='icon-shop' />
          <span>Market</span>
        </NavLink>
      </NavbarLinks>
    </div>
  </nav>

export default Navbar
