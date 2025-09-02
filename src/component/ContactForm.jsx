import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-container'>
        <p className='contact-text'>Kindly fill the form for your enquiry and feedback</p>
      <form action="">
        <div className='contact-form'>

        <div className='contact-left'>
        <input type="text" placeholder='Name' required className='contact-name' />
        <input type="email" placeholder='Email' required className='contact-mail'/>
        <input type="number" placeholder='Phone' required className='contact-phone'/>    
        </div>    
        
        <div className='contact-right'>
        <input type="text" placeholder='Subject' required className='contact-subject'/>
        <textarea rows='4' type="text" placeholder='Message' required className='contact-message'/>    
        </div>

        </div>

        <button type="submit" className='contact-btn'>
         Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
