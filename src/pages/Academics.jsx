import React from "react";
import { FaBookOpen, FaPalette, FaMusic, FaUsers, FaRunning, FaPencilAlt, FaFlask, FaGlobe, FaLaptop, FaTheaterMasks, FaFootballBall, FaPaintBrush, FaBook, FaLightbulb, FaChild, FaChalkboardTeacher, FaSmile, FaStar } from "react-icons/fa";
import nurseryImg from "../assets/school1.jpg";
import primaryImg from "../assets/school2.jpg";
import curriculumImg from "../assets/school3.jpg";
import activityImg from "../assets/activity.jpg";
import student1Img from "../assets/school2.jpg";
import student2Img from "../assets/school1.jpg";
import '../css/Academics.css'

const Academics = () => {
  return (
    <div className="academics-page">

      {/* Hero Section - Only Pictures */}
      <section className="academics-hero">
        {/* No overlay here, just the background image via CSS */}
      </section>

      {/* Hero Overlay Section - Full Width */}
      <div className="academics-hero-overlay">
        <h1>Academics at Crystal Model School</h1>
        <p>
          We nurture every child’s potential with a rich blend of academics, creativity, and character-building experiences. Our goal is to inspire lifelong learners and confident leaders.
        </p>
      </div>

      {/* Nursery Program */}
      <section className="academics-container">
        <h2>Nursery Program</h2>
        <div className="academics-programs-row">
          <img src={nurseryImg} alt="Nursery Class" className="academics-program-img" />
          <div className="academics-program-details">
            <h3>Building Strong Foundations</h3>
            <p>
              Our Nursery program is designed for children ages 2-5, focusing on holistic development in a warm, caring environment. We blend play-based learning with early academics to spark curiosity and joy.
            </p>
            <ul>
              <li><FaBookOpen /> Early literacy: phonics, storytelling, and letter recognition</li>
              <li><FaPalette /> Creative arts: painting, crafts, and sensory play</li>
              <li><FaMusic /> Music & movement: singing, dancing, and rhythm games</li>
              <li><FaUsers /> Social skills: sharing, teamwork, and emotional intelligence</li>
              <li><FaRunning /> Motor skills: outdoor play, climbing, and coordination</li>
              <li><FaChild /> Personal care: independence, hygiene, and routines</li>
              <li><FaSmile /> Emotional support: positive reinforcement and gentle guidance</li>
            </ul>
            <div style={{marginTop: "18px"}}>
              <h4 style={{color: "#2563eb", fontWeight: 600}}>Highlights</h4>
              <ul>
                <li><FaStar style={{color: "#fbbf24"}} /> Small class sizes for individual attention</li>
                <li><FaStar style={{color: "#fbbf24"}} /> Safe, stimulating indoor and outdoor spaces</li>
                <li><FaStar style={{color: "#fbbf24"}} /> Experienced, nurturing teachers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Program */}
      <section className="academics-container">
        <h2>Primary Program</h2>
        <div className="academics-programs-row">
          <img src={primaryImg} alt="Primary Class" className="academics-program-img" />
          <div className="academics-program-details">
            <h3>Empowering Young Learners</h3>
            <p>
              Our Primary program (ages 5-11) builds on the nursery foundation, encouraging academic excellence, creativity, and character. We foster independence, critical thinking, and a love for learning.
            </p>
            <ul>
              <li><FaPencilAlt /> Literacy: reading, writing, grammar, and comprehension</li>
              <li><FaFlask /> Science: hands-on experiments and discovery</li>
              <li><FaGlobe /> Social studies: history, geography, and cultural awareness</li>
              <li><FaLaptop /> ICT: basic computer skills and digital citizenship</li>
              <li><FaTheaterMasks /> Arts & drama: music, performance, and visual arts</li>
              <li><FaFootballBall /> Sports: football, athletics, and team games</li>
              <li><FaChalkboardTeacher /> Leadership: class responsibilities and public speaking</li>
            </ul>
            <div style={{marginTop: "18px"}}>
              <h4 style={{color: "#2563eb", fontWeight: 600}}>What Makes Us Unique</h4>
              <ul>
                <li><FaStar style={{color: "#fbbf24"}} /> Project-based learning and group work</li>
                <li><FaStar style={{color: "#fbbf24"}} /> Regular assessments and feedback</li>
                <li><FaStar style={{color: "#fbbf24"}} /> Parent-teacher partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="academics-container">
        <h2>Our Curriculum</h2>
        <div className="academics-curriculum-row">
          <img src={curriculumImg} alt="Curriculum Overview" className="academics-curriculum-img" />
          <div className="academics-curriculum-details">
            <p>
              Our curriculum is a blend of the Nigerian National Curriculum and international best practices. We emphasize core subjects, creative arts, and values education, ensuring every child is well-rounded and prepared for future challenges.
            </p>
            <div className="academics-subjects-list">
              <div className="academics-subject-item"><FaBookOpen /> English Language</div>
              <div className="academics-subject-item"><FaPencilAlt /> Mathematics</div>
              <div className="academics-subject-item"><FaFlask /> Basic Science</div>
              <div className="academics-subject-item"><FaGlobe /> Social Studies</div>
              <div className="academics-subject-item"><FaLaptop /> Computer Studies</div>
              <div className="academics-subject-item"><FaPaintBrush /> Creative Arts</div>
              <div className="academics-subject-item"><FaMusic /> Music & Drama</div>
              <div className="academics-subject-item"><FaRunning /> Physical Education</div>
              <div className="academics-subject-item"><FaLightbulb /> Values & Life Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="academics-container">
        <h2>Beyond the Classroom</h2>
        <div className="academics-activities-row">
          <img src={activityImg} alt="Extracurricular Activities" className="academics-activities-img" />
          <div className="academics-activities-details">
            <p>
              We offer a wide range of extracurricular activities to help students discover their passions, develop leadership, and build lifelong friendships.
            </p>
            <ul className="academics-activities-list">
              <li><FaFootballBall /> Sports & Games</li>
              <li><FaMusic /> Music & Choir</li>
              <li><FaPaintBrush /> Art & Creativity Club</li>
              <li><FaBook /> Reading & Writing Club</li>
              <li><FaLightbulb /> Science & Innovation Club</li>
              <li><FaUsers /> Debate & Public Speaking</li>
              <li><FaSmile /> Community Service Projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Our Students Say Section */}
      <section className="academics-container">
        <h2>What Our Students Say</h2>
        <div style={{display: "flex", gap: "32px", flexWrap: "wrap", marginTop: "18px"}}>
          <div style={{flex: "1", minWidth: "260px", display: "flex", alignItems: "center", gap: "16px"}}>
            <img src={student1Img} alt="Student Testimonial 1" style={{width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 8px rgba(38,99,235,0.09)"}} />
            <div>
              <p style={{fontStyle: "italic", color: "#2563eb"}}>
                "I love my teachers and friends at Crystal Model School. We learn new things every day and have lots of fun!"
              </p>
              <div style={{fontWeight: 600, marginTop: "8px"}}>— Aisha, Primary 3</div>
            </div>
          </div>
          <div style={{flex: "1", minWidth: "260px", display: "flex", alignItems: "center", gap: "16px"}}>
            <img src={student2Img} alt="Student Testimonial 2" style={{width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 8px rgba(38,99,235,0.09)"}} />
            <div>
              <p style={{fontStyle: "italic", color: "#2563eb"}}>
                "Crystal Model School helps me to be confident and creative. I enjoy science club and playing football with my classmates."
              </p>
              <div style={{fontWeight: 600, marginTop: "8px"}}>— David, Primary 5</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="academics-cta">
        <div className="academics-cta-box">
          <h2>Give Your Child the Best Start in Life</h2>
          <p>Enroll today and join our community of learners and leaders.</p>
          <a href="/contact" className="academics-cta-btn">Enroll Now</a>
        </div>
      </section>

    </div>
  );
};

export default Academics;
