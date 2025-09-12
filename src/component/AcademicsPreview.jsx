import React from "react";
import { FaBookOpen, FaChalkboardTeacher} from "react-icons/fa";
import '../css/Academicspreview.css'

const AcademicPreview = () => {
  const programs = [
    {
      icon: <FaBookOpen className="icon blue" />,
      title: "Nursery",
      desc: "Building strong foundations through play, creativity, and early learning.",
    },
    {
      icon: <FaChalkboardTeacher className="icon green" />,
      title: "Primary",
      desc: "Developing skills in literacy, numeracy, and critical thinking.",
    },
  ];

  return (
    <section className="academic-section" id="academics">
      <div className="academic-container">
        <h2 className="academic-title">Academics at Our School</h2>
        <p className="academic-subtitle">
          Our academic programs are designed to nurture curiosity, inspire
          creativity, and prepare students for the future.
        </p>

        
        <div className="academic-grid">
          {programs.map((prog, index) => (
            <div key={index} className="academic-card">
              <div className="icon-wrapper">{prog.icon}</div>
              <h3 className="card-title">{prog.title}</h3>
              <p className="card-desc">{prog.desc}</p>
            </div>
          ))}
        </div>

        
        {/* <div className="btn-wrapper">
          <a href="/academics" className="academic-btn">
            Explore Academics
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default AcademicPreview;
