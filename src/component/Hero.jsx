import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='hero-text'>Welcome to <br /> Crystal Model School</h1>
      <div class="hero-buttons">
  <button class="btn-primary">Enroll Your Child Today</button>
  <button class="btn-secondary"> <Link to={"about"}>Discover Crystal Model School</Link> </button>
</div>

    </div>
  )
}

export default Hero
