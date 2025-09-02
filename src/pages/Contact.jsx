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
   
    
    </div>
  )
}

export default Contact
