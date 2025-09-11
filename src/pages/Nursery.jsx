import React from "react";
import { FaBookOpen, FaPalette, FaMusic, FaUsers, FaRunning, FaPencilAlt, FaFlask, FaGlobe, FaLaptop, FaPaintBrush, FaTheaterMasks, FaFootballBall, FaBook, FaLightbulb, FaChild, FaChalkboardTeacher, FaSmile, FaStar, FaBaby, FaPuzzlePiece, FaBirthdayCake } from "react-icons/fa";
import nurseryImg from "../assets/school1.jpg";
import playgroupImg from "../assets/school2.jpg";
import nursery1Img from "../assets/school3.jpg";
import nursery2Img from "../assets/activity.jpg";
import '../css/Academics.css';

const Nursery = () => {
  return (
    <div className="academics-page">

      {/* Hero Section */}
      <section className="academics-hero">
        <div className="academics-hero-overlay">
          <h1>Nursery</h1>
          <div className="academics-line"></div>
          <p>
            A joyful start to lifelong learning, creativity, and friendship.
          </p>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="academics-agegroups">
        <div className="agegroups-container">
          <h2>Our Classes & Age Groups</h2>
          <div className="academics-agegroups-flex">
            {/* Playgroup */}
            <div className="academics-agegroup-card">
              <img src={playgroupImg} alt="Playgroup" />
              <h3><FaBaby /> Playgroup</h3>
              <p>Ages: 2 – 3 years</p>
              <p className="desc">First steps in learning through play, music, and social interaction.</p>
            </div>
            {/* Nursery 1 */}
            <div className="academics-agegroup-card">
              <img src={nursery1Img} alt="Nursery 1" />
              <h3><FaPuzzlePiece /> Nursery 1</h3>
              <p>Ages: 3 – 4 years</p>
              <p className="desc">Building curiosity and confidence with hands-on activities and stories.</p>
            </div>
            {/* Nursery 2 */}
            <div className="academics-agegroup-card">
              <img src={nursery2Img} alt="Nursery 2" />
              <h3><FaBirthdayCake /> Nursery 2</h3>
              <p>Ages: 4 – 5 years</p>
              <p className="desc">Preparing for primary school with early literacy, numeracy, and teamwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nursery Program */}
      <section className="academics-program">
        <div className="program-container">
          <h2>Our Nursery Program</h2>
          <div className="academics-program-flex">
            <img src={nurseryImg} alt="Nursery Class" className="academics-program-img" />
            <div className="academics-program-details">
              <h3><FaChalkboardTeacher /> Building Strong Foundations</h3>
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
              <div className="highlights">
                <h4>Highlights</h4>
                <ul>
                  <li><FaStar style={{ color: "#fbbf24" }} /> Small class sizes for individual attention</li>
                  <li><FaStar style={{ color: "#fbbf24" }} /> Safe, stimulating indoor and outdoor spaces</li>
                  <li><FaStar style={{ color: "#fbbf24" }} /> Experienced, nurturing teachers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="academics-curriculum">
        <div className="curriculum-container">
          <h2>Our Curriculum</h2>
          <div className="academics-curriculum-flex">
            <img src={nursery1Img} alt="Curriculum Overview" className="academics-curriculum-img" />
            <div className="academics-curriculum-details">
              <p>
                Our curriculum blends the Nigerian National Curriculum with international best practices. We emphasize core subjects, creative arts, and values education, ensuring every child is well-rounded and prepared for future challenges.
              </p>
              <div className="subjects-list">
                <span className="subject-item"><FaBookOpen /> English Language</span>
                <span className="subject-item"><FaPencilAlt /> Mathematics</span>
                <span className="subject-item"><FaFlask /> Basic Science</span>
                <span className="subject-item"><FaPaintBrush /> Creative Arts</span>
                <span className="subject-item"><FaMusic /> Music & Drama</span>
                <span className="subject-item"><FaRunning /> Physical Education</span>
                <span className="subject-item"><FaLightbulb /> Values & Life Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="academics-extracurriculars">
        <div className="extracurriculars-container">
          <h2>Beyond the Classroom</h2>
          <div className="academics-extracurriculars-flex">
            <img src={nursery2Img} alt="Extracurricular Activities" className="academics-extracurriculars-img" />
            <div className="academics-extracurriculars-details">
              <p>
                We offer a wide range of extracurricular activities to help students discover their passions, develop leadership, and build lifelong friendships.
              </p>
              <ul>
                <li><FaFootballBall /> Sports & Games</li>
                <li><FaMusic /> Music & Choir</li>
                <li><FaPaintBrush /> Art & Creativity Club</li>
                <li><FaBook /> Reading & Writing Club</li>
                <li><FaSmile /> Community Service Projects</li>
              </ul>
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

export default Nursery;