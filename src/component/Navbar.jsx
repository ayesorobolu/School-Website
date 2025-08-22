import React from 'react'
import Logo from '../assets/school_logo.png'

const Navbar = () => {
  return (
  <nav>
    <div id='school-logo'>
    <img src={Logo} alt="school logo" className='logo'/>
    </div>

    <ul className='link'>
      <li><a href="">HOME</a></li>
      <li><a href="">ABOUT US</a></li>
      <li><a href="">ACADEMICS</a></li>
      <li><a href="">GALLERY</a></li>
      <li><a href="">CONTACT US</a></li>
    </ul>
  </nav>
  )
}

export default Navbar
