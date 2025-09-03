import React from 'react'
import ContactForm from '../component/ContactForm'
import ContactInfo from '../component/ContactInfo'

const Contact = () => {
  return (
    <div>
      <div className='contact-hero'>
      <h1 className='contact-hero-text'>Contact Us</h1>
      <div className='contact-line'></div>
    </div>

    <div className='contact-section'> 
    <ContactForm/>
    <ContactInfo/>
    </div>

    <div className='google-map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3612850086724!2d3.9533825731201873!3d6.847221319320668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10396ee5950e6f83%3A0x3b78534b3137c12d!2sOgbogbo-Ijebu!5e0!3m2!1sen!2sng!4v1756907902035!5m2!1sen!2sng" width="1150" height="600" style={{border: "10"}} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </div>
  )
}

export default Contact
