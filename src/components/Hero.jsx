import React from 'react';
import profileImg from '../assets/me.png'; // تأكد أن الصورة me.png موجودة في assets

const Hero = () => {
  return (
    <section className="container py-5 mt-5">
      <div className="row align-items-center flex-column-reverse flex-md-row text-center text-md-start">
        {/* النصوص جهة اليسار */}
        <div className="col-md-7">
          <h1 className="display-2 fw-bold lh-sm mb-0" style={{ color: '#42446E', fontFamily: "'DM Sans', sans-serif" }}>
            Hi 👋, <br />
            My name is <br />
            <span style={{ 
              background: 'linear-gradient(to right, #13B0F5, #E70FAA)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>
              ANWR MOHAMED
            </span> <br />
            Software Engineer | <br />
            Front-End <span style={{ color: '#13B0F5' }}>React</span> <br />
            Developer
          </h1>
        </div>

        {/* الصورة الشخصية مع البرواز الملون جهة اليمين */}
        <div className="col-md-5 d-flex justify-content-center mb-5 mb-md-0">
          <div className="p-2 rounded-circle shadow-lg" style={{ 
            background: 'linear-gradient(to bottom, #E70FAA, #13B0F5)',
            width: 'fit-content'
          }}>
            <img 
              src={profileImg} 
              alt="Anwr Mohamed" 
              className="rounded-circle border border-5 border-white" 
              style={{ width: '350px', height: '350px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;