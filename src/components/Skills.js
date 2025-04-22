import React from 'react';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    { title: "PROGRAMMING", data: portfolioData.skills[0].technologies.split(', ') },
    { title: "WEB TECHNOLOGIES", data: portfolioData.skills[1].technologies.split(', ') },
    { title: "TOOLS", data: portfolioData.skills[2].technologies.split(', ') }
  ];

  return (
    <div id="skills" className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-6xl font-mono font-bold mb-2">SKILLS</h2>
          <div className="h-1 w-24 bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="border-4 border-black p-8">
              <h3 className="text-2xl font-mono font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4 font-mono">
                {category.data.slice(0, 5).map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-xl">→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;