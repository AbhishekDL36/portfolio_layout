
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll and sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } sticky top-0 z-50 transition-all duration-300 ease-in-out backdrop-filter`}
      style={{
        transition: "all 0.3s ease",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-7">
        {/* Logo with Stylish Font */}
        <h1 className="text-3xl font-bold text-gray-900 tracking-wide uppercase">
          ABHISHEK
        </h1>

        {/* Navbar Links */}
        <nav className="space-x-6">
          <a
            href="#about"
            className="text-gray-900 text-[20px] transition duration-300 transform hover:scale-105 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-900 text-[20px] transition duration-300 transform hover:scale-105 hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-900 text-[20px] transition duration-300 transform hover:scale-105 hover:text-blue-500"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-900 text-[20px] transition duration-300 transform hover:scale-105 hover:text-blue-500"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Bottom Border Animation */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 h-[2px] w-full opacity-20 mt-1"></div>
    </header>
  );
}

export default Navbar;

