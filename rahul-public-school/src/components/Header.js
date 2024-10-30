// src/components/Header.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome, faInfoCircle, faBook, faEnvelope, faUsers, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header 
      className="bg-[rgb(0,150,200)] shadow-lg p-4 fixed top-0 w-full z-20 transition-colors duration-300"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800 transition-transform duration-300 transform hover:scale-105">
          Rahul Public School
        </h1>
        <div className="md:hidden flex items-center">
          <motion.button 
            onClick={toggleMenu} 
            className="text-gray-800 focus:outline-none"
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
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center text-yellow-300 hover:text-yellow-400 transition duration-300 transform hover:underline"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />Home
            </Link>
          </li>
          <li>
            <Link 
              to="#about"
              onClick={handleLinkClick}
              className="flex items-center text-yellow-300 hover:text-yellow-400 transition duration-300 transform hover:underline"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />About
            </Link>
          </li>
          <li>
            <Link 
              to="/admissions"
              onClick={handleLinkClick}
              className="flex items-center text-yellow-300 hover:text-yellow-400 transition duration-300 transform hover:underline"
            >
              <FontAwesomeIcon icon={faBook} className="mr-2" />Admissions
            </Link>
          </li>
          <li>
            <Link 
              to="/academics"
              onClick={handleLinkClick}
              className="flex items-center text-yellow-300 hover:text-yellow-400 transition duration-300 transform hover:underline"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />Academics
            </Link>
          </li>
          <li>
            <Link 
              to="/contact"
              onClick={handleLinkClick}
              className="flex items-center text-yellow-300 hover:text-yellow-400 transition duration-300 transform hover:underline"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />Contact
            </Link>
          </li>
        </ul>
        <motion.button 
          className="mt-4 md:mt-0 bg-yellow-300 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
          onClick={() => handleLinkClick() || (window.location.href = '/admissions')}
        >
          Enroll Now
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;
