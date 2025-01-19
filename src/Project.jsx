// // import React from 'react';

// // function Projects() {
// //   return (
// //     <section id="projects" className="py-20 bg-white">
// //       <div className="container mx-auto">
// //         <h3 className="text-3xl font-bold text-center fade-in">Projects</h3>
// //         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           <div className="bg-gray-100 p-6 rounded-lg shadow fade-in-stagger">
// //             <h4 className="text-xl font-bold">Project Title</h4>
// //             <p className="mt-2">Brief description of the project and technologies used.</p>
// //             <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project</a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Projects;


// import React from 'react';

// const projects = [
//   {
//     title: "Project Title 1",
//     description: "Brief description of the first project and technologies used.",
//     link: "#",
//   },
//   {
//     title: "Project Title 2",
//     description: "Brief description of the second project and technologies used.",
//     link: "#",
//   },
//   // Add more projects as needed
// ];

// function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="container mx-auto">
//         <h3 className="text-3xl font-bold text-center fade-in">Projects</h3>
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-6 rounded-lg shadow fade-in-stagger"
//             >
//               <h4 className="text-xl font-bold">{project.title}</h4>
//               <p className="mt-2">{project.description}</p>
//               <a
//                 href={project.link}
//                 className="text-blue-500 hover:underline mt-4 block"
//                 aria-label={`View details of ${project.title}`}
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;


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
  // Add more projects as needed
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
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-b from-blue-800 to-purple-800"
    >
      <div className="container mx-auto text-center relative">
        <h3 className="text-[70px] font-bold text-white mb-16 font-playfair">
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
              className="bg-gray-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <h4 className="text-2xl font-bold text-gray-800">{project.title}</h4>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-500 hover:text-blue-700 hover:underline font-medium"
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
