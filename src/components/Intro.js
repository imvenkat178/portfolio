// src/components/Intro.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Intro = () => {
  // This will help with GitHub Pages deployment
  const PUBLIC_URL = process.env.PUBLIC_URL || '';
  
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <div className="text-5xl font-mono font-bold mb-8 leading-tight">{portfolioData.profile.title}</div>
            <p className="font-mono mb-8">{portfolioData.profile.bio}</p>
            <a 
              href={`${PUBLIC_URL}/resume.pdf`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white font-mono py-3 px-6 hover:bg-gray-900 transition-colors inline-block"
            >
              VIEW RESUME ↓
            </a>
          </div>
          
          <div className="md:col-span-5">
            <div className="relative">
              <img 
                src={`${PUBLIC_URL}/Venkat.JPG`} 
                alt="Portrait" 
                className="grayscale border-8 border-black w-full h-auto object-cover" 
              />
              <div className="absolute bottom-6 right-6 bg-white p-2 font-mono text-sm text-black">
                {portfolioData.profile.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;