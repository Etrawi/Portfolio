import React from 'react';

const Contact = () => {
  return (
    <section id="contact-page">
      {/* 1. الأسود العلوي مع العنوان المتدرج */}
      <div className="bg-dark text-white py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
        <h1 className="display-3 fw-bold mb-0" style={{ 
          background: 'linear-gradient(to right, #13B0F5, #E70FAA)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          textTransform: 'uppercase'
        }}>
          Contact Me
        </h1>
        <p className="text-secondary mt-2 fs-5" style={{ letterSpacing: '5px' }}>SAY HELLO TO ME</p>
      </div>

      {/* 2. نموذج التواصل */}
      <div className="container py-5 my-5">
        <h2 className="fw-bold mb-5" style={{ color: '#42446E' }}>Contact me</h2>
        <form>
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-bold">Name</label>
              <input type="text" className="form-control border-0 border-bottom rounded-0" placeholder="Your Name" />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control border-0 border-bottom rounded-0" placeholder="email@example.com" />
            </div>
          </div>
          <div className="mb-5">
            <label className="form-label fw-bold">Nachricht (Message)</label>
            <input type="text" className="form-control border-0 border-bottom rounded-0" placeholder="Hello, my name is . . ." />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-secondary px-5 py-2 rounded-0" style={{ backgroundColor: '#D9D9D9', color: '#000', border: 'none' }}>
              Send message
            </button>
          </div>
        </form>
      </div>

      {/* 3. الفوتر الأسود الصغير */}
      <div className="bg-dark text-white py-5 mt-5">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex gap-4">
            <a href="#projects" className="text-white text-decoration-none small fw-bold">PROJECTS</a>
            <a href="#about" className="text-white text-decoration-none small fw-bold">ABOUT</a>
            <a href="#contact" className="text-white text-decoration-none small fw-bold">CONTACT</a>
          </div>
          <div className="text-center small">
            <p className="mb-1">etrawi@outlook.com</p>
            <p className="mb-0">+20 10 11 71 58 04</p>
          </div>
          <p className="mb-0 small" style={{ color: '#E70FAA' }}>
            "Ready to bring your ideas to life? Let's work together!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;