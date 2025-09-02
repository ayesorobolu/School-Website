import React from 'react'
import Hero from '../component/Hero'
import Welcome from '../component/Welcome'
import AcademicsPreview from '../component/AcademicsPreview'
import Testimonials from '../component/Testimonials'
import Stats from '../component/Stats'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Welcome/>
      <AcademicsPreview/>
      <Stats/>
      <Testimonials/>
    </div>
  )
}

export default Homepage
