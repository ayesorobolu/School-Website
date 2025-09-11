import React from "react";
import { FaBookOpen, FaPalette, FaMusic, FaUsers, FaRunning, FaPencilAlt, FaFlask, FaGlobe, FaLaptop, FaPaintBrush, FaTheaterMasks, FaFootballBall, FaBook, FaLightbulb, FaChalkboardTeacher, FaSmile, FaStar, FaUserGraduate, FaMedal, FaLaptopCode } from "react-icons/fa";
import primaryImg from "../assets/school1.jpg";
import lowerPrimaryImg from "../assets/school2.jpg";
import upperPrimaryImg from "../assets/school3.jpg";
import activityImg from "../assets/activity.jpg";
import '../css/Academics.css';

const Primary = () => {
  return (
    <div className="academics-page">
      {/* Hero Section */}
      <section className="academics-hero">
        <div className="academics-hero-overlay">
          <h1>Primary</h1>
          <div className="academics-line"></div>
          <p>
            Building strong academic foundations and lifelong skills for every child.
          </p>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="academics-agegroups">
        <div className="agegroups-container">
          <h2>Our Classes & Age Groups</h2>
          <div className="academics-agegroups-flex">
            {/* Lower Primary */}
            <div className="academics-agegroup-card-primary">
              <img src={lowerPrimaryImg} alt="Lower Primary" />
              <h3><FaUserGraduate /> Lower Primary (Grades 1-3)</h3>
              <p>Ages: 5 – 8 years</p>
              <p className="desc">Focus on literacy, numeracy, and social skills in a nurturing environment.</p>
            </div>
            {/* Upper Primary */}
            <div className="academics-agegroup-card-primary">
              <img src={upperPrimaryImg} alt="Upper Primary" />
              <h3><FaMedal /> Upper Primary (Grades 4-6)</h3>
              <p>Ages: 8 – 11 years</p>
              <p className="desc">Advanced learning, leadership, and preparation for secondary school.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Program */}
      <section className="academics-program">
        <div className="program-container">
          <h2>Our Primary Program</h2>
          <div className="academics-program-flex">
            <img src={primaryImg} alt="Primary Class" className="academics-program-img" />
            <div className="academics-program-details">
              <h3><FaChalkboardTeacher /> Nurturing Excellence</h3>
              <p>
                Our Primary program is designed to develop confident, independent learners. We combine a robust academic curriculum with creative and critical thinking, character education, and digital literacy.
              </p>
              <ul>
                <li><FaBookOpen /> Literacy & Numeracy Mastery</li>
                <li><FaPalette /> Creative Arts & Expression</li>
                <li><FaMusic /> Music, Drama & Performance</li>
                <li><FaUsers /> Social & Emotional Learning</li>
                <li><FaRunning /> Physical Education & Sports</li>
                <li><FaLaptopCode /> ICT & Digital Skills</li>
                <li><FaSmile /> Values & Citizenship</li>
              </ul>
              <div className="highlights">
                <h4>Highlights</h4>
                <ul>
                  <li><FaStar style={{ color: "#fbbf24" }} /> Individualized support for every learner</li>
                  <li><FaStar style={{ color: "#fbbf24" }} /> Modern classrooms and learning resources</li>
                  <li><FaStar style={{ color: "#fbbf24" }} /> Experienced, passionate teachers</li>
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
            <img src={lowerPrimaryImg} alt="Curriculum Overview" className="academics-curriculum-img" />
            <div className="academics-curriculum-details">
              <p>
                Our curriculum integrates the Nigerian National Curriculum with global best practices. We emphasize core academic subjects, digital literacy, and creative arts, ensuring our pupils are well-prepared for the future.
              </p>
              <div className="subjects-list">
                <span className="subject-item"><FaBookOpen /> English Language</span>
                <span className="subject-item"><FaPencilAlt /> Mathematics</span>
                <span className="subject-item"><FaFlask /> Basic Science & Technology</span>
                <span className="subject-item"><FaGlobe /> Social Studies</span>
                <span className="subject-item"><FaPaintBrush /> Creative Arts</span>
                <span className="subject-item"><FaMusic /> Music & Drama</span>
                <span className="subject-item"><FaLaptop /> ICT/Computer Studies</span>
                <span className="subject-item"><FaRunning /> Physical & Health Education</span>
                <span className="subject-item"><FaLightbulb /> Civic & Moral Education</span>
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
            <img src={activityImg} alt="Extracurricular Activities" className="academics-extracurriculars-img" />
            <div className="academics-extracurriculars-details">
              <p>
                Our pupils enjoy a variety of clubs and activities that foster teamwork, creativity, and leadership.
              </p>
              <ul>
                <li><FaFootballBall /> Sports & Games</li>
                <li><FaMusic /> Music & Choir</li>
                <li><FaPaintBrush /> Art & Creativity Club</li>
                <li><FaBook /> Reading & Debate Club</li>
                <li><FaSmile /> Community Service Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="academics-cta">
        <div className="academics-cta-box">
          <h2>Empower Your Child for Success</h2>
          <p>Enroll today and watch your child thrive academically and socially.</p>
          <a href="/contact" className="academics-cta-btn">Enroll Now</a>
        </div>
      </section>

    </div>
  );
};

export default Primary;