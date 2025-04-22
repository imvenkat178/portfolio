import React from 'react';
import portfolioData from '../data/portfolioData';

const Education = () => {
  return (
    <div id="education" className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-6xl font-mono font-bold mb-2">EDUCATION</h2>
          <div className="h-1 w-24 bg-black"></div>
        </div>
        
        <div className="space-y-12">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-black pl-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-mono font-bold">{edu.degree}</h4>
                <span className="bg-black text-white p-1 text-xs font-mono">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="font-mono text-gray-900 mb-2">{edu.university}</p>
              <p className="font-mono text-gray-700">{edu.major} - GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;