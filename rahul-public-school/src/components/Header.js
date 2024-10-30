// src/components/Header.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBook, faEnvelope, faUsers, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className="bg-transparent shadow-md p-4 fixed top-0 w-full z-10 transition-colors duration-300"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      onScroll={() => {
        if (window.scrollY > 0) {
          document.querySelector('header').classList.add('bg-navy');
        } else {
          document.querySelector('header').classList.remove('bg-navy');
        }
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 transition-transform duration-300 transform hover:scale-105">
          Rahul Public School
        </h1>
        <div className="md:hidden flex items-center">
          <motion.button 
            onClick={toggleMenu} 
            className="text-blue-600 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </motion.button>
        </div>
      </div>
      <nav className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row justify-end space-x-0 md:space-x-8 space-y-4 md:space-y-0">
          <li>
            <motion.a 
              href="#home" 
              className="flex items-center text-gray-700 hover:text-blue-500 transition duration-300 transform hover:underline hover:underline-sky-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />Home
            </motion.a>
          </li>
          <li>
            <motion.a 
              href="#about" 
              className="flex items-center text-gray-700 hover:text-blue-500 transition duration-300 transform hover:underline hover:underline-sky-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />About
            </motion.a>
          </li>
          <li>
            <motion.a 
              href="#admissions" 
              className="flex items-center text-gray-700 hover:text-blue-500 transition duration-300 transform hover:underline hover:underline-sky-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FontAwesomeIcon icon={faBook} className="mr-2" />Admissions
            </motion.a>
          </li>
          <li>
            <motion.a 
              href="#academics" 
              className="flex items-center text-gray-700 hover:text-blue-500 transition duration-300 transform hover:underline hover:underline-sky-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />Academics
            </motion.a>
          </li>
          <li>
            <motion.a 
              href="#contact" 
              className="flex items-center text-gray-700 hover:text-blue-500 transition duration-300 transform hover:underline hover:underline-sky-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />Contact
            </motion.a>
          </li>
        </ul>
        <motion.button 
          className="mt-4 md:mt-0 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
        >
          Enroll Now
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;
