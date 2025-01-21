

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const skills = [
  { name: "React", bg: "bg-blue-100", text: "text-blue-500" },
  { name: "React-redux", bg: "bg-green-100", text: "text-green-500" },
  { name: "React-redux-toolkit", bg: "bg-yellow-100", text: "text-yellow-500" },
  { name: "Thunk", bg: "bg-red-100", text: "text-red-500" },
  { name: "Saga", bg: "bg-orange-100", text: "text-orange-500" },
  { name: "Javascript", bg: "bg-purple-100", text: "text-purple-500" },
  { name: "Typescript", bg: "bg-blue-100", text: "text-blue-500" },
  { name: "Node", bg: "bg-green-100", text: "text-green-500" },
  { name: "Express",  bg: "bg-yellow-100", text: "text-yellow-500" },
];

function Skills() {
  const [shuffledSkills, setShuffledSkills] = useState(skills);


  const shuffleSkills = () => {
    const shuffled = [...shuffledSkills];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    }
    setShuffledSkills(shuffled);
  };

 
  useEffect(() => {
    const interval = setInterval(shuffleSkills, 4000); 
    return () => clearInterval(interval);
  }, [shuffledSkills]);

  return (
    <section
      id="skills"
      className="min-h-screen py-20 flex items-center justify-center bg-gray-900 borderbtm"
    >



      <div className="container mx-auto text-center relative">
     
        <h3 className="text-[70px] font-bold text-white mb-16 font-playfair">
       
      Skills
        </h3>
       
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          animate="visible"
        >
           
          {shuffledSkills.map((skill, index) => (
            <motion.span
              key={index}
              layoutId={skill.name} 
              layout 
              className={`${skill.bg} ${skill.text} px-6 py-3 rounded-full text-xl font-medium hover:scale-110 transition-transform duration-300 shadow-lg`}
              transition={{
                type: "tween", 
                ease: "easeInOut", 
                duration: 1.5, 
              }}
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
