// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#002B5B] text-[#FAFAFA] p-8 text-center relative">
      <div className="border-t-2 border-[#1E90FF] absolute top-0 left-0 right-0" /> {/* Top border */}
      <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Grid layout */}
        
        {/* Left Column: Logo and Description */}
        <div className="flex flex-col items-center">
          <motion.img 
            src="/path/to/logo.png" 
            alt="School Logo" 
            className="h-10 mb-4 transition-transform duration-300 hover:scale-110" // Logo with hover effect
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
          />
          <p className="text-sm text-[#FAFAFA] text-center p-5"> {/* Description text */}
            Brief description of the school goes here.
          </p>
        </div>

        {/* Center Column: Quick Links */}
        <div className="flex flex-col items-center">
          <motion.h4 
            className="text-xl font-bold mb-2"
            whileHover={{ scale: 1.1, color: '#1E90FF' }} // Change color and scale on hover
          >
            Quick Links
          </motion.h4>
          {['Home', 'About Us', 'Admissions', 'Academics', 'Contact'].map((link, index) => (
            <motion.a 
              key={index}
              href="#"
              className="text-[#FAFAFA] text-lg uppercase mb-2 hover:underline hover:text-[#1E90FF] transition duration-200"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Right Column: Contact Info and Social Media Icons */}
        <div className="flex flex-col items-center">
          <motion.h4 
            className="text-xl font-bold mb-2"
            whileHover={{ scale: 1.1, color: '#1E90FF' }} // Change color and scale on hover
          >
            Contact Us
          </motion.h4>
          <p className="text-sm text-[#FAFAFA] mb-2">Address: 123 School St, City, Country</p>
          <p className="text-sm text-[#FAFAFA] mb-2">Email: <a href="mailto:info@rahulpublicschool.com" className="hover:text-[#1E90FF]">info@rahulpublicschool.com</a></p>
          <p className="text-sm text-[#FAFAFA] mb-2">Phone: <span className="hover:text-[#1E90FF]">+1 (234) 567-8901</span></p>
          
          <div className="flex justify-center mt-4">
            {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
              <motion.a 
                key={index}
                href="#"
                className="mx-2 text-[#1E90FF] transition duration-300"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360, // Rotate 360 degrees
                  color: '#FF8C42', // Change color on hover
                  transition: { duration: 0.5 } // Set duration for the hover effect
                }} 
              >
                <FontAwesomeIcon icon={icon} size="2x" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

