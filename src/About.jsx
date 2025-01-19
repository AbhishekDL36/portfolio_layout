
// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
// // function About() {
// //   const textVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: (i) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { delay: i * 0.1 },
// //     }),
// //   };

// //   const content = [
// //     "Hello!",
// //     "I'm",
// //     "Abhishek,",
// //     "a",
// //     "passionate",
// //     "full-stack",
// //     "developer",
// //     "currently",
// //     "pursuing",
// //     "my",
// //     "MCA",
// //     "from",
// //     "SRM",
// //     "University.",
// //     "My",
// //     "expertise",
// //     "lies",
// //     "in",
// //     "HTML,",
// //     "CSS,",
// //     "Tailwind",
// //     "CSS,",
// //     "JavaScript,",
// //     "and",
// //     "React.",
// //     "I",
// //     "also",
// //     "have",
// //     "secondary",
// //     "knowledge",
// //     "of",
// //     "Node.js",
// //     "and",
// //     "Express.",
// //     "I'm",
// //     "always",
// //     "eager",
// //     "to",
// //     "explore",
// //     "new",
// //     "technologies,",
// //     "with",
// //     "a",
// //     "particular",
// //     "interest",
// //     "in",
// //     "AI",
// //     "and",
// //     "video",
// //     "editing.",
// //     "My",
// //     "biggest",
// //     "motivation",
// //     "for",
// //     "coding",
// //     "comes",
// //     "from",
// //     "the",
// //     "excitement",
// //     "of",
// //     "seeing",
// //     "words",
// //     "turn",
// //     "into",
// //     "actions,",
// //     "which",
// //     "is",
// //     "what",
// //     "I",
// //     "love",
// //     "most",
// //     "about",
// //     "development.",
// //     "Outside",
// //     "of",
// //     "coding,",
// //     "I",
// //     "enjoy",
// //     "vlogging,",
// //     "editing,",
// //     "and",
// //     "sharing",
// //     "my",
// //     "thoughts",
// //     "as",
// //     "a",
// //     "motivational",
// //     "speaker.",
// //     "Looking",
// //     "ahead,",
// //     "I'm",
// //     "excited",
// //     "to",
// //     "delve",
// //     "into",
// //     "future",
// //     "technologies",
// //     "such",
// //     "as",
// //     "DevOps",
// //     "and",
// //     "Next.js."
// //   ];

// //   return (
// //     <section
// //       id="about"
// //       className="min-h-screen flex items-center justify-center relative bgAbout"
// //     >
// //       <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
// //       <div className="container mx-auto text-center relative z-10 p-5">
// //         <h3 className="text-[70px] font-bold mb-[100px] font-playfair">About Me</h3>
// //         <div className="flex flex-wrap justify-center">
// //           {content.map((word, index) => (
// //             <motion.span
// //               key={index}
// //               variants={textVariants}
// //               initial="hidden"
// //               animate="visible"
// //               custom={index}
// //               className="text-xl font-semibold mx-1 leading-relaxed text-white"
// //             >
// //               {word}
// //             </motion.span>
// //           ))}
// //         </div>
// //         <div className="mt-8">
// //           <h4 className="text-2xl font-bold text-white">Connect with Me:</h4>
// //           <div className="flex justify-center mt-4">
// //             <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-4">
// //             <FaWhatsapp className="text-3xl text-white hover:text-green-500" />
// //             </a>
// //             <a href="mailto:abhishekofficials12@gmail.com" className="text-blue-400 mx-4">
// //             <FaEnvelope className="text-3xl text-white hover:text-red-500" />
// //             </a>
// //             <a href="https://www.linkedin.com/in/abhishek-7784a2247/" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-4">
// //             <FaLinkedin className="text-3xl text-white hover:text-blue-700" />
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default About;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// function About() {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }),
//   };

//   const content = [
//     "Hello!",
//     "I'm",
//     "Abhishek,",
//     "a",
//     "passionate",
//     "full-stack",
//     "developer",
//     "currently",
//     "pursuing",
//     "my",
//     "MCA",
//     "from",
//     "SRM",
//     "University.",
//     "My",
//     "expertise",
//     "lies",
//     "in",
//     "HTML,",
//     "CSS,",
//     "Tailwind",
//     "CSS,",
//     "JavaScript,",
//     "and",
//     "React.",
//     "I",
//     "also",
//     "have",
//     "secondary",
//     "knowledge",
//     "of",
//     "Node.js",
//     "and",
//     "Express.",
//     "I'm",
//     "always",
//     "eager",
//     "to",
//     "explore",
//     "new",
//     "technologies,",
//     "with",
//     "a",
//     "particular",
//     "interest",
//     "in",
//     "AI",
//     "and",
//     "video",
//     "editing.",
//     "My",
//     "biggest",
//     "motivation",
//     "for",
//     "coding",
//     "comes",
//     "from",
//     "the",
//     "excitement",
//     "of",
//     "seeing",
//     "words",
//     "turn",
//     "into",
//     "actions,",
//     "which",
//     "is",
//     "what",
//     "I",
//     "love",
//     "most",
//     "about",
//     "development.",
//     "Outside",
//     "of",
//     "coding,",
//     "I",
//     "enjoy",
//     "vlogging,",
//     "editing,",
//     "and",
//     "sharing",
//     "my",
//     "thoughts",
//     "as",
//     "a",
//     "motivational",
//     "speaker.",
//     "Looking",
//     "ahead,",
//     "I'm",
//     "excited",
//     "to",
//     "delve",
//     "into",
//     "future",
//     "technologies",
//     "such",
//     "as",
//     "DevOps",
//     "and",
//     "Next.js."
//   ];

//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-blue-800 to-purple-800"
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
//       <div className="container mx-auto text-center relative z-10 p-5">
//         <h3 className="text-[70px] font-bold mb-[100px] font-playfair text-white">About Me</h3>
//         <div className="flex flex-wrap justify-center">
//           {content.map((word, index) => (
//             <motion.span
//               key={index}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               custom={index}
//               className="text-xl font-semibold mx-1 leading-relaxed text-white"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </div>
//         <div className="mt-8">
//           <h4 className="text-2xl font-bold text-white font-roboto">Connect with Me:</h4>
//           <div className="flex justify-center mt-4">
//             <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-4">
//               <FaWhatsapp className="text-3xl text-white hover:text-green-500" />
//             </a>
//             <a href="mailto:abhishekofficials12@gmail.com" className="text-blue-400 mx-4">
//               <FaEnvelope className="text-3xl text-white hover:text-red-500" />
//             </a>
//             <a href="https://www.linkedin.com/in/abhishek-7784a2247/" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-4">
//               <FaLinkedin className="text-3xl text-white hover:text-blue-700" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const content = [
    "Hello!",
    "I'm",
    <span className="text-yellow-400 font-bold">Abhishek,</span>, // Highlight "Abhishek"
    "a",
    "passionate",
    "full-stack",
    "developer",
    "currently",
    "pursuing",
    "my",
    "MCA",
    "from",
    "SRM",
    "University.",
    "My",
    "expertise",
    "lies",
    "in",
    "HTML,",
    "CSS,",
    "Tailwind",
    "CSS,",
    "JavaScript,",
    "and",
    "React.",
    "I",
    "also",
    "have",
    "secondary",
    "knowledge",
    "of",
    "Node.js",
    "and",
    "Express.",
    "I'm",
    "always",
    "eager",
    "to",
    "explore",
    "new",
    "technologies,",
    "with",
    "a",
    "particular",
    "interest",
    "in",
    "AI",
    "and",
    "video",
    "editing.",
    "My",
    "biggest",
    "motivation",
    "for",
    "coding",
    "comes",
    "from",
    "the",
    "excitement",
    "of",
    "seeing",
    "words",
    "turn",
    "into",
    "actions,",
    "which",
    "is",
    "what",
    "I",
    "love",
    "most",
    "about",
    "development.",
    "Outside",
    "of",
    "coding,",
    "I",
    "enjoy",
    "vlogging,",
    "editing,",
    "and",
    "sharing",
    "my",
    "thoughts",
    "as",
    "a",
    "motivational",
    "speaker.",
    "Looking",
    "ahead,",
    "I'm",
    "excited",
    "to",
    "delve",
    "into",
    "future",
    "technologies",
    "such",
    "as",
    "DevOps",
    "and",
    "Next.js."
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative bg-gray-900 borderbtm"
    >
      <div className="satellite-container">
        <div className="satellite"></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="container mx-auto text-center relative z-10 p-5">
        <h3 className="text-[70px] font-bold mb-[100px] font-playfair text-white">About Me</h3>
        <div className="flex flex-wrap justify-center">
          {content.map((word, index) => (
            <motion.span
              key={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="text-xl font-roboto mx-1 leading-relaxed text-white"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div className="mt-8">
          <h4 className="text-2xl font-bold text-white font-roboto">Connect with Me:</h4>
          <div className="flex justify-center mt-4">
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-4">
              <FaWhatsapp className="text-3xl text-white hover:text-green-500" />
            </a>
            <a href="mailto:abhishekofficials12@gmail.com" className="text-blue-400 mx-4">
              <FaEnvelope className="text-3xl text-white hover:text-red-500" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-7784a2247/" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-4">
              <FaLinkedin className="text-3xl text-white hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
