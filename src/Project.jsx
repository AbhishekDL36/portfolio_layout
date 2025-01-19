

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Title 1",
    description: "Brief description of the first project and technologies used.",
    link: "#",
  },
  {
    title: "Project Title 2",
    description: "Brief description of the second project and technologies used.",
    link: "#",
  },
  {
    title: "Project Title 3",
    description: "Brief description of the third project and technologies used.",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 15px rgba(0, 0, 255, 0.5)",
    border: "3px solid #00d4ff",
    transition: { duration: 0.3 },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center justify-center bg-gray-900 border-b border-gray-700"
    >
      <div className="container mx-auto text-center relative">

         
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 font-playfair">
          Projects
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

        
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 h-auto p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              variants={itemVariants}
              whileHover="hover"
            >
              <h4 className="text-2xl font-bold text-white">{project.title}</h4>
              <p className="mt-4 text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
                aria-label={`View details of ${project.title}`}
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    
    </section>
  );
}

export default Projects;
