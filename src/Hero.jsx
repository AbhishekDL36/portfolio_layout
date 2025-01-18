import { motion } from 'framer-motion';
import img1 from './WhatsApp Image 2025-01-18 at 1.00.45 PM.jpeg'
function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-500 text-white text-center py-20"
      id="hero"
    >
      <div className="container mx-auto flex gap-[50px] ">
        <img src={img1} className='h-[250px] w-[250px] rounded-2xl
        ' />
        <div>

        <h2 className="text-4xl font-bold">Hi, I'm Your Name</h2>
        <p className="mt-4 text-lg">
          A Passionate Full-Stack Developer Building Scalable Solutions
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded"
        >
          View My Work
        </a>
        </div>
       
      </div>
    </motion.section>
  );
}
export default Hero