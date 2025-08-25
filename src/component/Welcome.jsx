import React from 'react'
import WelcomePic from '../assets/welcome-pic.jpg'

const Welcome = () => {
  return (
    <section className='welcome-main'>
      <div className='welcome-pic'>
        <img src={WelcomePic} alt="welcome-pic" />
      </div>

      <div className='welcome-text'>
        <p>
        At Crystal Model School, we believe education goes beyond the classroom. We are a family committed to nurturing not only the minds of our students but also their hearts and values. Every child is guided to pursue academic excellence while being shaped into individuals of strong character, discipline, and faith. Our mission is to walk hand in hand with parents in raising confident, responsible, and compassionate young leaders who will shine their light and positively influence the world.
        </p>

        <br />

        <button className='welcome-button'>
        Learn More
        </button>
      </div>
    </section>
  )
}

export default Welcome
