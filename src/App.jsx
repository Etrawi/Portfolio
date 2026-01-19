import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'; // استدعاء التنسيقات هنا

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* الـ Hero عادة يكون عرض كامل أو داخل Container حسب تصميمك */}
      <Hero />
      
      <main className="container">
        <About />
        <TechStack />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;