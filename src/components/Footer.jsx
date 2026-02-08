import React from 'react';

const Footer = () => {
  return (
    <footer className="container py-5 mt-5">
      {/* قسم التواصل الكبير (Contact Section) */}
      <div className="text-center mb-5 pb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#42446E', fontSize: '42px' }}>
          For any questions please mail us:
        </h2>
        <a href="mailto:etrawi@outlook.com" className="fw-bold text-decoration-none" style={{ 
          fontSize: '48px',
          background: 'linear-gradient(to right, #13B0F5, #E70FAA)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          fontFamily: "'DM Sans', sans-serif"
        }}>
          etrawi@outlook.com
        </a>
      </div>

      {/* بيانات التواصل السريعة قبل الخط الفاصل */}
      <div className="d-flex justify-content-end align-items-center gap-5 mb-4 text-secondary" style={{ fontSize: '18px' }}>
        <span>+20 10 11 71 58 04</span>
        
        <div className="d-flex gap-3">
          
          {/* 1. رابط جيت هاب (GitHub) */}
          <a 
            href="https://github.com/Etrawi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* 2. رابط لينكد إن (LinkedIn) */}
          <a 
            href="https://www.linkedin.com/in/etrawi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* 3. رابط واتساب (WhatsApp) - جاهز ويعمل مباشرة ✅ */}
          <a 
            href="https://wa.me/201011715804" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark"
            title="Chat on WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

        </div>
      </div>

      <hr className="mb-4" />

      {/* شريط الروابط السفلي */}
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex gap-4 mb-3 mb-md-0">
          <a href="#home" className="text-decoration-none text-dark small fw-medium">Home</a>
          <a href="#about" className="text-decoration-none text-dark small fw-medium">About</a>
          <a href="#tech" className="text-decoration-none text-dark small fw-medium">Technologies</a>
          <a href="#projects" className="text-decoration-none text-dark small fw-medium">Projects</a>
          <a href="#contact" className="text-decoration-none text-dark small fw-medium">Contact</a>
        </div>
        
        <p className="mb-0 small" style={{ color: '#666666' }}>
          "Ready to bring your ideas to life? <span style={{ 
            background: 'linear-gradient(to right, #13B0F5, #E70FAA)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>Let's work together!"</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;