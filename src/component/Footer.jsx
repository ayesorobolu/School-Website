import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Logo / About */}
        <div className="footer-section">
          <h2 className="footer-logo">Crystal Model Academy</h2>
          <p className="footer-text">
            Building Tomorrow's World Today
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt className="icon" /> 5 Abraham, Runsewe Road Ogbogbo, Ijebu, Ogun State</li>
            <li><FaPhoneAlt className="icon" /> +234 801 234 5678</li>
            <li><FaEnvelope className="icon" /> info@crystalmodelschool.com</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3 className="footer-heading">Opening Hours</h3>
          <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
          <p>Sat: 9:00 AM - 1:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Albesta Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
