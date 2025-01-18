import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center fade-in">Projects</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow fade-in-stagger">
            <h4 className="text-xl font-bold">Project Title</h4>
            <p className="mt-2">Brief description of the project and technologies used.</p>
            <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;