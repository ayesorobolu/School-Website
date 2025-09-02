import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className='info-line'></div>
      <div className="info-item">
        <FaMapMarkerAlt className="info-icon" />
        <span>5 Abraham, Runsewe Road Ogbogbo, Ijebu, Ogun State</span>
      </div>
      <div className="info-item">
        <FaPhoneAlt className="info-icon" />
        <span>+234 801 234 5678</span>
      </div>
      <div className="info-item">
        <FaWhatsapp className="info-icon" />
        <span>+234 800 123 4567</span>
      </div>
      <div className="info-item">
        <FaEnvelope className="info-icon" />
        <span>info@crystalmodelschool.com</span>
      </div>
      </div>
  )
}

export default ContactInfo
