// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-blue-700 text-white p-4">
    <h1 className="text-2xl font-bold">Rahul Public School</h1>
    <nav className="mt-2">
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-yellow-300">About</a></li>
        <li><a href="#programs" className="hover:text-yellow-300">Programs</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
