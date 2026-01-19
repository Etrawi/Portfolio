import React from 'react';
// استيراد الأيقونات من مجلد assets عندك
import html from '../assets/html5.png';
import css from '../assets/css3.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import bs from '../assets/bootstrap.png';
import tw from '../assets/tailwind.png';
import vs from '../assets/visualstudio.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';
import ts from '../assets/typescript.png';
import vite from '../assets/vite.png';

const TechStack = () => {
  const icons = [html, css, js, react, ts, bs, tw, vs, git, github, figma, vite];
  
  return (
    <section className="container py-5 mt-5" id="tech">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#42446E', fontSize: '42px' }}>My Tech Stack</h2>
        <p className="text-secondary fs-5">Technologies I’ve been working with recently</p>
      </div>
      
      <div className="row g-5 justify-content-center align-items-center mt-4">
        {icons.map((icon, idx) => (
          <div key={idx} className="col-4 col-md-3 col-lg-2 d-flex justify-content-center">
            <img 
              src={icon} 
              alt="tech icon" 
              className="img-fluid" 
              style={{ width: '80px', height: '80px', objectFit: 'contain', filter: 'grayscale(20%)' }} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;