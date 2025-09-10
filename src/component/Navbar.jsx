import React, { useState } from 'react'
import Logo from '../assets/school_logo.png'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            style={{ position: "relative" }}
          >
            <li className="dropdown-toggle">
              ACADEMICS
            </li>
            {showDropdown && (
              <ul className="dropdown-menu">
                <Link to={'/academics#nursery'}><li>Nursery</li></Link>
                <Link to={'/academics#primary'}><li>Primary</li></Link>
                <Link to={'/academics#curriculum'}><li>Curriculum</li></Link>
                <Link to={'/academics#activities'}><li>Activities</li></Link>
              </ul>
            )}
          </div>
          <Link to={'gallery'}> <li> GALLERY</li> </Link>
          <Link to={'contact'}> <li> CONTACT US</li> </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
