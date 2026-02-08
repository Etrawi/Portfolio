import React from 'react';

const About = () => {
  return (
    <section className="container py-5 mt-5" id="about">
      {/* 1. About Me Section */}
      <div className="mb-5 pb-4">
        <h2 className="fw-bold mb-4" style={{ color: '#42446E', fontSize: '42px' }}>About Me</h2>
        <p className="text-secondary lh-lg fs-5" style={{ maxWidth: '800px' }}>
          "I am a Computer Science graduate and a passionate Frontend Developer based in Egypt. 
          I specialize in building responsive, user-friendly web interfaces using React.js and modern CSS frameworks. 
          My unique strength lies in combining academic problem-solving skills with practical expertise in component-based architecture."
        </p>
      </div>

      {/* 2. Work Experience Section */}
      <div className="mb-5 pb-4">
        <h2 className="fw-bold mb-5" style={{ color: '#42446E', fontSize: '42px' }}>Work Experience</h2>
        
        {/* Experience 1: Frontend Team Leader */}
        <div className="border-bottom pb-3 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h4 className="mb-0 text-secondary fw-normal">Frontend (Trainee)</h4>
            <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: '#D7FFE0', color: '#018C0F' }}>Full Time</span>
          </div>
          <div className="d-flex justify-content-between text-muted small">
            <span><i className="fas fa-building me-2"></i>Build a medical booking platform using React.js. <i className="fas fa-location-dot ms-3 me-2"></i>DEPI, EGY</span>
            <span><i className="far fa-calendar-alt me-2"></i>Nov 2025 - Present</span>
          </div>
        </div>

        {/* Experience 2: Focus Website */}
        <div className="border-bottom pb-3 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h4 className="mb-0 text-secondary fw-normal">Focus Website</h4>
            <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: '#D7FFE0', color: '#018C0F' }}>Internship</span>
          </div>
          <div className="d-flex justify-content-between text-muted small">
            <span><i className="fas fa-building me-2"></i>Developed Graduation Project photography site. <i className="fas fa-location-dot ms-3 me-2"></i>HIMIT, EGY</span>
            <span><i className="far fa-calendar-alt me-2"></i>Sep 2022 - Jun 2023</span>
          </div>
        </div>

        {/* Experience 3: Graphic Designer */}
        <div className="border-bottom pb-3 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h4 className="mb-0 text-secondary fw-normal">Graphic Designer</h4>
            <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: '#D7FFE0', color: '#018C0F' }}>Internship</span>
          </div>
          <div className="d-flex justify-content-between text-muted small">
            <span><i className="fas fa-building me-2"></i>Background in Print & Advertising Design. <i className="fas fa-location-dot ms-3 me-2"></i>Riyadh, SA</span>
            <span><i className="far fa-calendar-alt me-2"></i>Jan 2021 - Sep 2022</span>
          </div>
        </div>
      </div>

      {/* 3. Education Section */}
      <div className="mb-5">
        <h2 className="fw-bold mb-5" style={{ color: '#42446E', fontSize: '42px' }}>Education</h2>
        <div className="border-bottom pb-3 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h4 className="mb-0 text-secondary fw-normal">Bachelor of Computer Science and Information.</h4>
            <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: '#D7FFE0', color: '#018C0F' }}>Full Time</span>
          </div>
          <div className="d-flex justify-content-between text-muted small">
            <span><i className="fas fa-school me-2"></i>HIMIT</span>
            <span><i className="far fa-calendar-alt me-2"></i>Aug 2019 - Dec 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;