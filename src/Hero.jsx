// // // // // import { motion } from 'framer-motion';
// // // // // import img1 from './WhatsApp Image 2025-01-18 at 1.00.45 PM.jpeg'
// // // // // function Hero() {
// // // // //   return (
// // // // //     <motion.section
// // // // //       initial={{ opacity: 0 }}
// // // // //       animate={{ opacity: 1 }}
// // // // //       transition={{ duration: 1 }}
// // // // //       className="bg-blue-500 text-white text-center py-20"
// // // // //       id="hero"
// // // // //     >
// // // // //       <div className="container mx-auto flex gap-[50px] ">
// // // // //         <img src={img1} className='h-[250px] w-[250px] rounded-2xl
// // // // //         ' />
// // // // //         <div>

// // // // //         <h2 className="text-4xl font-bold">Hi, I'm Your Name</h2>
// // // // //         <p className="mt-4 text-lg">
// // // // //           A Passionate Full-Stack Developer Building Scalable Solutions
// // // // //         </p>
// // // // //         <a
// // // // //           href="#projects"
// // // // //           className="mt-6 inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded"
// // // // //         >
// // // // //           View My Work
// // // // //         </a>
// // // // //         </div>
       
// // // // //       </div>
// // // // //     </motion.section>
// // // // //   );
// // // // // }
// // // // // export default Hero




// // // // import { motion } from 'framer-motion';
// // // // import img1 from './WhatsApp Image 2025-01-18 at 1.00.45 PM.jpeg';

// // // // function Hero() {
// // // //   return (
// // // //     <motion.section
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 1 }}
// // // //       className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20"
// // // //       id="hero"
// // // //     >
// // // //       <div className="container mx-auto flex flex-col items-center text-center px-4">
// // // //         <div className="relative">
// // // //           <img
// // // //             src={img1}
// // // //             alt="Profile"
// // // //             className="h-[200px] w-[200px] rounded-full border-4 border-white shadow-lg"
// // // //           />
// // // //           <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-pulse"></div>
// // // //         </div>
// // // //         <h2 className="text-5xl font-extrabold mt-6">
// // // //           Hi, I'm <span className="text-yellow-300">Your Name</span>
// // // //         </h2>
// // // //         <p className="mt-4 text-lg max-w-2xl">
// // // //           A <span className="text-yellow-300 font-bold">Passionate Full-Stack Developer</span> Focused on Building
// // // //           Scalable & Innovative Solutions.
// // // //         </p>
// // // //         <a
// // // //           href="#projects"
// // // //           className="mt-8 inline-block bg-yellow-300 text-blue-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
// // // //         >
// // // //           View My Work
// // // //         </a>
// // // //       </div>
// // // //     </motion.section>
// // // //   );
// // // // }

// // // // export default Hero;

// // // import { motion } from "framer-motion";
// // // import img1 from "./WhatsApp Image 2025-01-18 at 1.00.45 PM.jpeg";

// // // function Hero() {
// // //   return (
// // //     <motion.section
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 1 }}
// // //       className="bg-gray-900 text-white py-20"
// // //       id="hero"
// // //     >
// // //       <div className="container mx-auto flex flex-col items-center text-center px-4">
// // //         <div className="relative">
// // //           <img
// // //             src={img1}
// // //             alt="Profile"
// // //             className="h-[200px] w-[200px] rounded-full border-4 border-gray-700 shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
// // //           />
// // //         </div>
// // //         <h2 className="text-4xl font-extrabold mt-6 text-gray-100">
// // //           Hi, I'm <span className="text-gray-400">Your Name</span>
// // //         </h2>
// // //         <p className="mt-4 text-lg text-gray-300 max-w-2xl">
// // //           A <span className="font-semibold text-gray-200">Passionate Full-Stack Developer</span> Dedicated to Crafting Scalable & Innovative Solutions.
// // //         </p>
// // //         <a
// // //           href="#projects"
// // //           className="mt-8 inline-block bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
// // //         >
// // //           View My Work
// // //         </a>
// // //       </div>
// // //     </motion.section>
// // //   );
// // // }

// // // export default Hero;

// // import { motion } from "framer-motion";
// // import img1 from "./WhatsApp Image 2025-01-18 at 1.00.45 PM.jpeg";

// // function Hero() {
// //   return (
// //     <motion.section
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 1 }}
// //       className="bg-gray-900 text-white py-20"
// //       id="hero"
// //     >
// //       <div className="container mx-auto flex flex-col items-center text-center px-4">
// //         {/* Image with Hover Effect */}
// //         <motion.div
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 1.2, ease: "easeOut" }}
// //           className="relative"
// //         >
// //           <img
// //             src={img1}
// //             alt="Profile"
// //             className="h-[200px] w-[200px] rounded-full border-4 border-gray-700 shadow-lg grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
// //           />
// //         </motion.div>

// //         {/* Header Text */}
// //         <motion.h2
// //           initial={{ y: 30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
// //           className="text-5xl font-extrabold mt-6 text-gray-100"
// //         >
// //           Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">Your Name</span>
// //         </motion.h2>

// //         {/* Subheading */}
// //         <motion.p
// //           initial={{ y: 30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
// //           className="mt-4 text-lg text-gray-300 max-w-2xl"
// //         >
// //           A <span className="font-semibold text-gray-200">Passionate Full-Stack Developer</span> Dedicated to Crafting Scalable & Innovative Solutions.
// //         </motion.p>

// //         {/* Call to Action Button */}
// //         <motion.a
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
// //           href="#projects"
// //           className="mt-8 inline-block bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
// //         >
// //           View My Work
// //         </motion.a>
// //       </div>
// //     </motion.section>
// //   );
// // }

// // export default Hero;



// import { motion } from "framer-motion";
// import img1 from "./WhatsApp Image 2025-01-18 at 1.00.45 PM.jpeg";

// function Hero() {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="bg-gray-900 text-white py-20 relative overflow-hidden"
//       id="hero"
//     >
//       {/* Background Animation */}
//       <motion.div
//         animate={{
//           background: [
//             "linear-gradient(to right, #000000, #1a1a1a)",
//             "linear-gradient(to right, #1a1a1a, #333333)",
//             "linear-gradient(to right, #333333, #000000)"
//           ],
//         }}
//         transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0"
//       ></motion.div>

//       {/* Content */}
//       <div className="container mx-auto flex flex-col items-center text-center px-4 relative z-10">
//         {/* Image with Rotational Animation */}
//         <motion.div
//           initial={{ scale: 0, rotate: -45, opacity: 0 }}
//           animate={{ scale: 1, rotate: 0, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="relative"
//         >
//           <img
//             src={img1}
//             alt="Profile"
//             className="h-[200px] w-[200px] rounded-full border-4 border-gray-700 shadow-lg grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-300"
//           />
//         </motion.div>

//         {/* Heading Animation */}
//         <motion.h2
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50 }}
//           className="text-5xl font-extrabold mt-6 text-gray-100"
//         >
//           Hi, I'm{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">
//             Your Name
//           </span>
//         </motion.h2>

//         {/* Subheading Animation */}
//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 50 }}
//           className="mt-4 text-lg text-gray-300 max-w-2xl"
//         >
//           A <span className="font-semibold text-gray-200">Passionate Full-Stack Developer</span> Dedicated to Crafting Scalable & Innovative Solutions.
//         </motion.p>

//         {/* Button Animation */}
//         <motion.a
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
//           whileHover={{
//             scale: 1.1,
//             boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
//           }}
//           href="#projects"
//           className="mt-8 inline-block bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition-transform duration-300"
//         >
//           View My Work
//         </motion.a>
//       </div>
//     </motion.section>
//   );
// }

// export default Hero;



import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";

import img1 from "./WhatsApp Image 2025-01-18 at 1.00.45 PM.jpeg";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white py-20 relative overflow-hidden"
      id="hero"
    >
      {/* Background Animation */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(to right, #000000, #1a1a1a)",
            "linear-gradient(to right, #1a1a1a, #333333)",
            "linear-gradient(to right, #333333, #000000)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      ></motion.div>

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center text-center px-4 relative z-10">
        {/* Image with Rotational Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -45, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={img1}
            alt="Profile"
            className="h-[200px] w-[200px] rounded-full border-4 border-gray-700 shadow-lg grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* Heading with Dynamic Typing Effect */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50 }}
          className="text-5xl font-extrabold mt-6 text-gray-100"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">
            Your Name
          </span>
        </motion.h2>

        {/* Typing Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 50 }}
          className="mt-2 text-lg text-gray-300 max-w-2xl"
        >
          <Typed
            strings={[
              "Frontend Developer",
              "React Developer",
              "JavaScript Developer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>

        {/* Button Animation */}
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
          }}
          href="#projects"
          className="mt-8 inline-block bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition-transform duration-300"
        >
          View My Work
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;

