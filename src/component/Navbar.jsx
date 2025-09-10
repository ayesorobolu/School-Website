import React from 'react'
import Logo from '../assets/school_logo.png'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

const Navbar = () => {
  return (
  <div>
    <div className='topbar'>
      <p> Call us: +123 456 7890 | Email: info@crystalmodelschool.com </p>
    </div>
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
  </div>
  )
}

export default Navbar
