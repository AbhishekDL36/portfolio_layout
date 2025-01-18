import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold fade-in">Skills</h3>
        <div className="mt-8 flex flex-wrap justify-center space-x-4">
          <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg fade-in-stagger">React</span>
          <span className="bg-green-100 text-green-500 px-4 py-2 rounded-lg fade-in-stagger">Node.js</span>
          <span className="bg-yellow-100 text-yellow-500 px-4 py-2 rounded-lg fade-in-stagger">MongoDB</span>
          <span className="bg-red-100 text-red-500 px-4 py-2 rounded-lg fade-in-stagger">Express.js</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;