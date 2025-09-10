import React from "react";
import { FaBookReader, FaUsers, FaGlobe, FaUserTie, FaSchool, FaChalkboardTeacher, FaFutbol, FaBook, FaLaptop, FaTree, FaHandsHelping } from "react-icons/fa";
import '../css/AboutUs.css'
import Pic from '../assets/school1.jpg'

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <div className="about-line"></div>
          <p>
            Nurturing future leaders with excellence, care, and lifelong values.
          </p>
        </div>
      </section>

      {/* History Section (formerly Who We Are) */}
      <section className="about-history">
        <div className="container">
          <h2>Our History</h2>
          <div className="history-flex">
            <div className="history-text">
              <p>
                <strong>Crystal Model School</strong> began its journey in 2005 with a small but passionate team of educators and a vision to redefine quality education in our community. What started as a modest school with just two classrooms and thirty students has blossomed into a vibrant institution recognized for academic excellence, innovation, and holistic development.
              </p>
              <p>
                Over the years, we have expanded our facilities, introduced cutting-edge technology, and enriched our curriculum to meet the evolving needs of our students. Our commitment to nurturing every child’s potential has remained unwavering, and our alumni continue to excel in various fields, making us proud.
              </p>
              <ul className="history-timeline">
                <li><span className="history-year">2005</span> – School founded with 2 classrooms and 30 students</li>
                <li><span className="history-year">2010</span> – First graduating class and expansion to primary section</li>
                <li><span className="history-year">2015</span> – Introduction of ICT and Science labs</li>
                <li><span className="history-year">2020</span> – Over 500 students and 40+ staff members</li>
                <li><span className="history-year">2024</span> – Recognized as a leading school in the region</li>
              </ul>
              <p>
                Today, Crystal Model School stands as a beacon of hope and excellence, dedicated to shaping responsible, confident, and creative leaders of tomorrow.
              </p>
            </div>
            <div className="history-img-col">
              <img src={Pic} alt="School Building" className="history-img" />
              <img src={Pic} alt="First Classroom" className="history-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Proprietress Speech */}
      <section className="about-proprietress">
        <div className="container">
          <h2>Message from the Proprietress</h2>
          <div style={{display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap"}}>
            <img
              src={Pic}
              alt="Proprietress"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 2px 12px rgba(38,99,235,0.09)"
              }}
            />
            <div>
              <p style={{fontSize: "18px", color: "#334155", lineHeight: 1.7}}>
                Welcome to Crystal Model School! Our mission is to provide every child with a solid foundation for lifelong learning and success. We believe in nurturing not just academic excellence, but also character, creativity, and confidence. Thank you for entrusting us with your child’s education and growth.
              </p>
              <div style={{fontWeight: 600, color: "#2563eb", marginTop: "10px"}}>Mrs. Grace Johnson<br/>Proprietress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="about-mvv">
        <div className="container">
          <h2>Our Mission, Vision & Values</h2>
          <div className="about-mvv-flex">
            <div>
              <h3>Our Mission</h3>
              <p>
                To provide quality education that inspires creativity, builds
                character, and develops future leaders.
              </p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To be a leading institution recognized for academic excellence,
                moral integrity, and global impact.
              </p>
            </div>
            <div>
              <h3>Our Core Values</h3>
              <p>
                Discipline, Respect, Innovation, Integrity, and Teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="stat-row">
          <div className="stat-number">500+</div>
          <div className="stat-text">Happy Students</div>
        </div>
        <div className="stat-row">
          <div className="stat-text">Qualified Teachers</div>
          <div className="stat-number">40</div>
        </div>
        <div className="stat-row">
          <div className="stat-number">20</div>
          <div className="stat-text">Clubs & Activities</div>
        </div>
        <div className="stat-row">
          <div className="stat-text">Exam Success Rate</div>
          <div className="stat-number">100%</div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="about-facilities">
        <div className="container">
          <h2>Our Facilities</h2>
          <p>
            We believe a great learning environment goes beyond the classroom. Our campus is equipped with modern facilities to support every aspect of student growth and well-being.
          </p>
          <ul className="facilities-list">
            <li><FaSchool style={{color: "#2563eb"}} /> Spacious, well-ventilated classrooms</li>
            <li><FaChalkboardTeacher style={{color: "#2563eb"}} /> Science and ICT laboratories</li>
            <li><FaBook style={{color: "#2563eb"}} /> Well-stocked library</li>
            <li><FaFutbol style={{color: "#2563eb"}} /> Sports field and playground</li>
            <li><FaLaptop style={{color: "#2563eb"}} /> Computer suite with internet access</li>
            <li><FaTree style={{color: "#2563eb"}} /> Green spaces and gardens</li>
            <li><FaUsers style={{color: "#2563eb"}} /> Multipurpose hall for events and assemblies</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="container">
          <h2>Why Choose Crystal Model School?</h2>
          <ul>
            <li><FaBookReader /> Balanced curriculum of academics & creativity</li>
            <li><FaUsers /> Experienced and caring teachers</li>
            <li><FaGlobe /> Global standard education with local values</li>
            <li><FaUserTie /> Strong moral and character development</li>
          </ul>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="about-team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="about-leaders">
            <div className="leader">
              <img src={Pic} alt="Head Teacher" />
              <h3>Mrs. Jane Doe</h3>
              <p>Head Teacher</p>
            </div>
            <div className="leader">
              <img src={Pic} alt="Administrator" />
              <h3>Mr. John Smith</h3>
              <p>School Administrator</p>
            </div>
            <div className="leader">
              <img src={Pic} alt="Science Teacher" />
              <h3>Mrs. Ada Okeke</h3>
              <p>Science Teacher</p>
            </div>
            <div className="leader">
              <img src={Pic} alt="Sports Coach" />
              <h3>Coach Daniel</h3>
              <p>Sports Coach</p>
            </div>
            <div className="leader">
              <img src={Pic} alt="School Counselor" />
              <h3 id="leader-last">Ms. Blessing Udo</h3>
              <p id="leader-last">School Counselor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="cta-box">
          <h2>Join Our Family</h2>
          <p>
            Be part of a community that builds strong foundations for life.
          </p>
          <a href="/contact" className="cta-btn">Enroll Today</a>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
