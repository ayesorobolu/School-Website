import React from 'react'
import Logo from '../assets/school_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
    <Link to={'/'}>
    <div id='school-logo'>
    <img src={Logo} alt="school logo" className='logo'/>
    </div>
    </Link>

    <ul className='link'>
     <Link to={'/'}> <li> HOME </li> </Link>
     <Link to={'about'}> <li> ABOUT US</li> </Link>
     <Link to={'academics'}> <li> ACADEMICS</li> </Link>
     <Link to={'gallery'}> <li> GALLERY</li> </Link>
     <Link to={'contact'}> <li> CONTACT US</li> </Link>
    </ul>
  </nav>
  )
}

export default Navbar
