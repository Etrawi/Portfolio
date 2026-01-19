import React from 'react';
// استيراد الصور بأسماء الملفات اللي ظهرت في فولدر assets
import MediBookImg from '../assets/MediBook.png';
import nexcentImg from '../assets/nexcent.png';
import modernImg from '../assets/modern.png';
import pricingImg from '../assets/pricingplans.png';
import authImg from '../assets/authentication.png';
import focusImg from '../assets/focus.png';

const Projects = () => {
  const projects = [
    { 
      title: "MediBook", 
      icon: "fa-solid fa-stethoscope",
      tech: "React.js, Vite, CSS, Git.", 
      desc: "Collaborated with the team to design, implement Collaborated with the team to design, implement responsive UI, smooth UX,medical booking platform simplify appointment scheduling for patients, doctors. UI, smooth UX medical booking platform.", 
      img: MediBookImg, //
      colorGradient: 'linear-gradient(to right, #0084D4, #75D4FF)' 
    },
    { 
      title: "Nexcent Agency", 
      icon: "fa-solid fa-leaf",
      tech: "HTML5, CSS3, Bootstrap, JS.", 
      desc: "Developed landing page for a digital agency as part of the DEPI grant, practical training. This project focuses on mastering UI layout structures.", 
      img: nexcentImg, //
      colorGradient: 'linear-gradient(to right, #4CAF4F, #39833B)' 
    },
    { 
      title: "Modern Contact", 
      icon: "fa-solid fa-tower-broadcast",
      tech: "HTML5, CSS3, Bootstrap.", 
      desc: "Designed implemented Designed implemented a fully responsive contact section, features a split-layout design a background overlay, custom-styled form inputs using input groups, consistent typography.a fully responsive contact section, features a split-layout design.", 
      img: modernImg, //
      colorGradient: 'linear-gradient(to right, #323B4B, #fee140)' 
    },
    { 
      title: "Pricing Plans", 
      icon: "fa-solid fa-tags",
      tech: "HTML5, CSS3, FontAwesome.", 
      desc: "Built a modern pricing table. Built a modern pricing table The design utilizes negative margins to create a floating element effect The layout structured with Flexbox perfect alignment responsiveness.The design utilizes negative margins to create a floating element.", 
      img: pricingImg, //
      colorGradient: 'linear-gradient(to right, #667eea, #764ba2)' 
    },
    { 
      title: "Authentication", 
      icon: "fa-solid fa-key",
      tech: "HTML5, CSS3, Flexbox.", 
      desc: "A clean, functionA clean, functional login interface, The project focuses on perfect vertical, horizontal alignment, form semantics,interactive states for buttons inputsal login interface. The project focuses on perfect vertical, horizontal alignment.", 
      img: authImg, //
      colorGradient: 'linear-gradient(to right, #FF40CF, #000000)' 
    },
    { 
      title: "Focus", 
      icon: "fa-solid fa-camera",
      tech: "HTML5, CSS3, Bootstrap.", 
      desc: "Built responsive, vBuilt responsive, visually immersive photography platform ensuring fast loading times, seamless browsing experience for clients.isually immersive photography platform ensuring fast loading times.", 
      img: focusImg, //
      colorGradient: 'linear-gradient(to right, #FFEA83, #A1A850)' 
    },
  ];

  return (
    <section className="container py-5 mt-5" id="projects">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ color: '#42446E', fontSize: '42px' }}>Projects</h2>
        <p className="text-secondary fs-5">Things I’ve built so far</p>
      </div>

      <div className="row g-4 justify-content-center">
        {projects.map((p, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ height: '220px' }}>
                <img src={p.img} className="w-100 h-100" alt={p.title} style={{ objectFit: 'cover' }} />
              </div>
              
              <div className="card-body p-4 d-flex flex-column text-center align-items-center">
                {/* الأيقونة والاسم بنفس الـ Gradient */}
                <div className="mb-3 d-flex align-items-center gap-2">
                   <i className={p.icon} style={{ 
                     background: p.colorGradient,
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     fontSize: '24px'
                   }}></i>
                   
                   <h4 className="fw-bold mb-0" style={{ 
                     background: p.colorGradient, 
                     WebkitBackgroundClip: 'text', 
                     WebkitTextFillColor: 'transparent'
                   }}>{p.title}</h4>
                </div>
                
                <p className="text-secondary small flex-grow-1" style={{ fontSize: '14px', lineHeight: '1.6' }}>{p.desc}</p>
                <p className="mb-4 text-start w-100 px-2" style={{ fontSize: '12px', color: '#42446E' }}>
                  <strong>Tech Stack : </strong> {p.tech}
                </p>
                
                <div className="d-flex justify-content-between align-items-center w-100 mt-auto border-top pt-3">
                  <a href="#" className="text-dark text-decoration-none small">
                    <i className="fas fa-link me-2"></i> Live Preview
                  </a>
                  <a href="#" className="text-dark text-decoration-none small">
                    <i className="fab fa-github me-2"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;