// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-[#EAEAEA] p-8 text-center relative">
      <div className="border-t-2 border-[#007BFF] absolute top-0 left-0 right-0" />
      <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col items-center">
          <motion.img 
            src="/path/to/logo.png" 
            alt="School Logo" 
            className="h-10 mb-4 transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
          />
          <p className="text-sm text-[#EAEAEA] text-center p-5">
            Brief description of the school goes here.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <motion.h4 
            className="text-xl font-bold mb-2"
            whileHover={{ scale: 1.1, color: '#007BFF' }}
          >
            Quick Links
          </motion.h4>
          {['Home', 'About Us', 'Admissions', 'Academics', 'Contact'].map((link, index) => (
            <motion.a 
              key={index}
              href="#"
              className="text-[#EAEAEA] text-lg uppercase mb-2 hover:underline hover:text-[#007BFF] transition duration-200"
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <motion.h4 
            className="text-xl font-bold mb-2"
            whileHover={{ scale: 1.1, color: '#007BFF' }}
          >
            Contact Us
          </motion.h4>
          <p className="text-sm text-[#EAEAEA] mb-2">Address: 123 School St, City, Country</p>
          <p className="text-sm text-[#EAEAEA] mb-2">Email: <a href="mailto:info@rahulpublicschool.com" className="hover:text-[#007BFF]">info@rahulpublicschool.com</a></p>
          <p className="text-sm text-[#EAEAEA] mb-2">Phone: <span className="hover:text-[#007BFF]">+1 (234) 567-8901</span></p>
          
          <div className="flex justify-center mt-4">
            {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
              <motion.a 
                key={index}
                href="#"
                className="mx-2 text-[#007BFF] transition duration-300"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  color: '#FF8C42',
                  transition: { duration: 0.5 }
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

