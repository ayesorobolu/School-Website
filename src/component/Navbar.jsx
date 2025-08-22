import React from 'react'
import Logo from '../assets/school_logo.png'

const Navbar = () => {
  return (
  <nav>
    <div id='school-logo'>
    <img src={Logo} alt="school logo" className='logo'/>
    </div>

    <ul id='link'>
      <li><a href="">Home</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Academics</a></li>
      <li><a href="">Gallery</a></li>
      <li><a href="">Contact Us</a></li>
    </ul>
  </nav>
  )
}

export default Navbar
