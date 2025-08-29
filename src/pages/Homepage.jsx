import React from 'react'
import Hero from '../component/Hero'
import Welcome from '../component/Welcome'
import AcademicsPreview from '../component/AcademicsPreview'
import Testimonials from '../component/Testimonials'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Welcome/>
      <AcademicsPreview/>
      <Testimonials/>
    </div>
  )
}

export default Homepage
