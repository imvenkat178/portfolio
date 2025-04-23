// src/components/Header.js
import React from 'react';
import Logo from './Logo'; // Import the Logo component

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    // Call the function to reveal the celebration button
    if (window.revealCelebration) {
      window.revealCelebration();
    }
  };

  return (
    <div className="bg-black text-white p-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="https://imvenkat178.github.io/portfolio/" 
          className="flex items-center"
          onClick={handleLogoClick}
        >
          <Logo size={30} />
        </a>
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