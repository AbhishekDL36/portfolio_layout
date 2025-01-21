
import About from "./About";

import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Project";
import Skills from "./Skills";
import './styles.css'
function Mainfile() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
  
      <Footer />
    </div>
  );
}

export default Mainfile;

