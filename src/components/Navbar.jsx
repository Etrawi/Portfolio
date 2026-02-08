import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-4 sticky-top">
      <div className="container">
        {/* اللوجو أو الاسم (يمكنك تغييره لصورة لو أردت) */}
        <a className="navbar-brand fw-bold fs-4" href="#" style={{ color: '#42446E' }}>
          {/* يمكنك وضع <img> هنا لو عندك لوجو، أو تركه نص */}
          {/* portfolio */}
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* روابط القائمة في المنتصف */}
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 gap-4 fw-medium" style={{ fontSize: '18px' }}>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#tech">Tech Stack</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">Contact</a>
            </li>
          </ul>

          {/* 👇👇 أيقونات السوشيال ميديا (التعديل هنا) 👇👇 */}
          <div className="d-flex gap-3 align-items-center mt-3 mt-lg-0">
            
            {/* 1. GitHub */}
            <a href="https://github.com/Etrawi" target="_blank" rel="noopener noreferrer" className="text-dark fs-5">
              <i className="fab fa-github"></i>
            </a>

            {/* 2. LinkedIn */}
            <a href="https://www.linkedin.com/in/etrawi" target="_blank" rel="noopener noreferrer" className="text-dark fs-5">
              <i className="fab fa-linkedin"></i>
            </a>

            {/* 3. WhatsApp (الجديد ✅) */}
            <a href="https://wa.me/201011715804" target="_blank" rel="noopener noreferrer" className="text-dark fs-5">
              <i className="fab fa-whatsapp"></i>
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};