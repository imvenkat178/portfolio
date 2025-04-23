import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white p-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* <Link to="/" className="text-2xl font-mono">VENKATA.DEV</Link> */}
        <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="text-2xl font-mono">VENKATA.DEV</a>
        <div className="hidden md:flex gap-6 text-sm">
          <button 
            onClick={() => scrollToSection('experience')} 
            className="uppercase hover:text-gray-400 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className="uppercase hover:text-gray-400 transition-colors"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="uppercase hover:text-gray-400 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="uppercase hover:text-gray-400 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="uppercase hover:text-gray-400 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;