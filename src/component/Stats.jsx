import React from "react";

const Stats = () => {
  return (
    <section className="stats-section">
      <h2 className="stats-title">Why Choose Crystal Model School?</h2>

      
      <div className="stats-grid">
        <div className="stat-item">
          <h3 className="stat-number">500+</h3>
          <p className="stat-label">Happy Students</p>
        </div>

        <div className="stat-item">
          <h3 className="stat-number">50+</h3>
          <p className="stat-label">Dedicated Teachers</p>
        </div>

        <div className="stat-item">
          <h3 className="stat-number">100%</h3>
          <p className="stat-label">Success Rate</p>
        </div>

        <div className="stat-item">
          <h3 className="stat-number">20+</h3>
          <p className="stat-label">Years of Excellence</p>
        </div>
      </div>

      
      <div className="cta-container">
        <a href="/enroll" className="cta-button">
          Enroll Your Child Today
        </a>
      </div>
    </section>
  );
};

export default Stats;
