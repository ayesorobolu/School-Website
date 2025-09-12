import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../css/Testimonial.css'
import WelcomePic from '../assets/welcome-pic.jpg'

const Testimonials = () => {

    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3500,
  };

      const testimonials = [
        {
          text: "Crystal Model School has built my child’s confidence and improved her academic performance tremendously",
          author: "Mrs Deborah Smith, Parent",
        },
        {
          text: "The teachers here are patient, caring, and truly invested in the success of every child. My son’s confidence has grown so much.",
          author: "Mrs Bankole, Parent",
        },
        {
          text: "I love how Crystal Model School combines strong academics with moral discipline. My child is excelling both in character and learning.",
          author: "Mr Alimi, Parent",
        },
        {
          text: "Enrolling my child at Crystal Model School is the best decision I ever made. The environment is safe, nurturing, and focused on excellence.",
          author: "Mr Oduka , Parent",
        },
        {
          text: "Crystal Model School treats every child like family. The attention and support my son receives is beyond my expectations.",
          author: "Mrs Ayodele, Parent",
        },
      ];

      
    
  return (
    <section className='testimonial-section'>
        <div className="testimonial-container">
          <h1 className="testimonial-title">What Our Parents Say</h1>
          {/* <p className="testimonial-subtitle">
            Hear from our satisfied parents about their experiences at Crystal Model School.
          </p> */}

           <p></p> 
           <Slider {...settings}>
           {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card">
              <h3 className="testimonial-text">{test.text}</h3> 
              <p className="testimonial-author">{test.author}</p>
            </div>
          ))}
          </Slider>
          </div>

         <div className='testimonial-image'>
          <img src={WelcomePic} alt="testimonial-image" />
        </div>
    </section>
  )
}

export default Testimonials
