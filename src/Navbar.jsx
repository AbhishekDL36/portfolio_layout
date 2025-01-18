import React from 'react';

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0">
      <div className="container mx-auto flex items-center justify-between py-5 px-7">
        <h1 className="text-2xl font-bold name">ABHISHEK</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-500 text-[22px]">About</a>
          <a href="#projects" className="hover:text-blue-500 text-[22px]">Projects</a>
          <a href="#skills" className="hover:text-blue-500 text-[22px]">Skills</a>
          <a href="#contact" className="hover:text-blue-500 text-[22px]">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;