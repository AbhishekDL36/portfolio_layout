


import React, { useState, useEffect } from "react";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
        <h1 className="text-3xl font-bold tracking-wide">ABHISHEK</h1>

        <nav className="space-x-6">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-[20px] transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="bg-gradient-to-r from-gray-700 to-gray-900 h-[2px] w-full opacity-20 mt-1"></div>
    </header>
  );
}

export default Navbar;
