// import React from 'react';

// function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h3 className="text-3xl font-bold fade-in">Skills</h3>
//         <div className="mt-8 flex flex-wrap justify-center space-x-4">
//           <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg fade-in-stagger">React</span>
//           <span className="bg-green-100 text-green-500 px-4 py-2 rounded-lg fade-in-stagger">Node.js</span>
//           <span className="bg-yellow-100 text-yellow-500 px-4 py-2 rounded-lg fade-in-stagger">MongoDB</span>
//           <span className="bg-red-100 text-red-500 px-4 py-2 rounded-lg fade-in-stagger">Express.js</span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;


import React from "react";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const skills = [
  { name: "React", bg: "bg-blue-100", text: "text-blue-500" },
  { name: "Node.js", bg: "bg-green-100", text: "text-green-500" },
  { name: "MongoDB", bg: "bg-yellow-100", text: "text-yellow-500" },
  { name: "Express.js", bg: "bg-red-100", text: "text-red-500" },
  { name: "JavaScript", bg: "bg-orange-100", text: "text-orange-500" },
  { name: "CSS", bg: "bg-purple-100", text: "text-purple-500" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-b from-purple-800 to-blue-800"
    >
      <div className="container mx-auto text-center relative">
        <h3 className="text-5xl font-bold text-white mb-16 font-playfair">
          Skills
        </h3>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillVariants}
              custom={index}
              className={`${skill.bg} ${skill.text} px-6 py-3 rounded-full text-xl font-medium hover:scale-110 transition-transform duration-300 shadow-lg`}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
