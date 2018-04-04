import React from 'react'

const NavbarLinks = ({ children }) =>
  <ul className='navbar-links'>
    {children.map((child, i) => <li key={i}>{child}</li>)}
  </ul>

export default NavbarLinks
