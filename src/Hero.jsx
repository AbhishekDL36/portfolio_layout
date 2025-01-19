


import { motion } from "framer-motion"; 
import {ReactTyped} from "react-typed"; 
import { Link } from "react-router-dom";
import { FaReact, FaJsSquare, FaGithub } from "react-icons/fa"; 
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
      {/* Satellite Effect */}
      <div className="satellite-container">
        <div className="satellite"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center text-center px-4 relative z-10">
        {/* Profile Image */}
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

        {/* Heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50 }}
          className="text-5xl font-extrabold mt-6 text-gray-100"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
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
          <ReactTyped
            strings={["Frontend Developer", "React Developer", "JavaScript Developer"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>

        {/* Development Icons */}
        <div className="mt-6 flex justify-center gap-8 mb-8">
          <Link to="/React-Skills">
            <div className="text-4xl text-blue-500">
              <FaReact />
            </div>
          </Link>
          <Link to="/JS-Skills">
            <div className="text-4xl text-yellow-500">
              <FaJsSquare />
            </div>
          </Link>
          <div className="text-4xl text-gray-900">
            <a href="https://github.com/AbhishekDL36">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Button */}
        <motion.a
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0px 0px 5px rgba(255, 255, 255, 0.3)",
              "0px 0px 15px rgba(255, 255, 255, 0.5)",
              "0px 0px 5px rgba(255, 255, 255, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.8)",
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
