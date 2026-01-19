import React from 'react';

// لاحظ هنا إننا بنستخدم export عادي مش default عشان نقدر نطلع الـ Navbar والـ Footer مع بعض
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white pt-4 pb-2 container">
      <div className="container-fluid d-flex justify-content-end align-items-center">
        
        {/* روابط القائمة */}
        <div className="navbar-nav flex-row gap-5 me-5">
          <a className="nav-link fw-medium p-0" href="#home" style={{ color: '#666666', fontSize: '18px' }}>Home</a>
          <a className="nav-link fw-medium p-0" href="#about" style={{ color: '#666666', fontSize: '18px' }}>About</a>
          <a className="nav-link fw-medium p-0" href="#tech" style={{ color: '#666666', fontSize: '18px' }}>Tech Stack</a>
          <a className="nav-link fw-medium p-0" href="#projects" style={{ color: '#666666', fontSize: '18px' }}>Projects</a>
          <a className="nav-link fw-medium p-0" href="#contact" style={{ color: '#666666', fontSize: '18px' }}>Contact</a>
        </div>

        {/* أيقونات التواصل - استخدمنا FontAwesome كلاسات مباشرة */}
        <div className="d-flex gap-3 align-items-center">
          <a href="#" className="text-secondary"><i className="fab fa-github fs-4"></i></a>
          <a href="#" className="text-secondary"><i className="fab fa-twitter fs-4"></i></a>
          <a href="#" className="text-secondary"><i className="fab fa-linkedin fs-4"></i></a>
        </div>
        
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="container py-4 border-top mt-5">
      <p className="text-center text-muted">© 2026 ANWR MOHAMED</p>
    </footer>
  );
};