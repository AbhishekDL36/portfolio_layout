// import React from 'react';

// function About() {
//   return (
//     <section id="about" className="py-20 bg-gray-100 fade-in">
//       <div className="container mx-auto text-center">
//         <h3 className="text-3xl font-bold">About Me</h3>
//         <p className="mt-4 max-w-3xl mx-auto">
//           I am a full-stack developer with expertise in React, Node.js, and MongoDB. I create intuitive and responsive web applications, turning ideas into reality.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;



import React from 'react';
import { motion } from "framer-motion"; // Import Framer Motion for animations

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-gray-900">About Me</h3>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-lg text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I am a full-stack developer with expertise in React, Node.js, and MongoDB. I create intuitive and responsive web applications, turning ideas into reality.
        </motion.p>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-lg text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I have a passion for learning and adapting to new technologies, which allows me to stay up-to-date in this fast-paced industry. My goal is to build applications that not only solve problems but also provide an exceptional user experience.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default About;

