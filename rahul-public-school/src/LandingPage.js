// src/LandingPage.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faBook, faChalkboardTeacher, faUsers, faHandsHelping, faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [cursorColor, setCursorColor] = useState('text-gray-800'); // Updated default cursor color
  const [draggedIcon, setDraggedIcon] = useState(null); // Define draggedIcon state

  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.transition = 'background-color 0.2s ease';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = cursorColor; // Set initial colorn

    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    // Intersection Observer to change cursor color based on section
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Change cursor color based on the section
          switch (entry.target.id) {
            case 'about':
              setCursorColor('text-blue-500');
              cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.7)'; // Blue color
              break;
            case 'programs':
              setCursorColor('text-green-500');
              cursor.style.backgroundColor = 'rgba(34, 197, 94, 0.7)'; // Green color
              break;
            case 'contact':
              setCursorColor('text-red-500');
              cursor.style.backgroundColor = 'rgba(239, 68, 68, 0.7)'; // Red color
              break;
            default:
              setCursorColor('text-black');
              cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Default color
          }
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      observer.disconnect();
    };
  }, [cursorColor]);

  const handleDragStart = (icon) => {
    setDraggedIcon(icon); // Set the dragged icon
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedIcon) {
      alert(`You dropped: ${draggedIcon}`);
      setDraggedIcon(null); // Reset dragged icon
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('hovered'); // Add a class to indicate hover
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('hovered'); // Remove class when not hovering
  };

  const handleMouseEnter = (e, index) => {
    if (e && e.currentTarget) { // Check if e and e.currentTarget are valid
      const icon = e.currentTarget.querySelector('svg');
      if (icon) { // Check if icon exists
        icon.style.transition = 'transform 0.3s'; // Add transition for smooth effect
        icon.style.transform = 'rotate(360deg)'; // Rotate icon on mouse enter
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (e && e.currentTarget) { // Check if e and e.currentTarget are valid
      const icon = e.currentTarget.querySelector('svg');
      if (icon) { // Check if icon exists
        icon.style.transition = 'transform 0.3s'; // Add transition for smooth effect
        icon.style.transform = 'rotate(0deg)'; // Reset rotation on mouse leave
      }
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden bg-gray-100"> {/* Updated background color */}
      <Header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg" /> {/* Updated shadow */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold tracking-wide mb-4"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Welcome to Rahul Public School
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl font-light"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering students to succeed and make a difference.
          </motion.p>
          <motion.button 
            className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-full border-4 border-transparent hover:border-yellow-400 transition-all duration-300 hover:scale-110 shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 0, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </motion.button>
          <div className="mt-10 flex flex-wrap justify-center space-x-4">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon 
                icon={faBook} 
                className="text-5xl hover:text-yellow-400 transition duration-300 transform cursor-pointer" 
                draggable 
                onDragStart={() => handleDragStart('Book Icon')}
              />
              <span className="mt-2 text-sm">Books</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon 
                icon={faChalkboardTeacher} 
                className="text-5xl hover:text-blue-400 transition duration-300 transform cursor-pointer" 
                draggable 
                onDragStart={() => handleDragStart('Teacher Icon')}
              />
              <span className="mt-2 text-sm">Teachers</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon 
                icon={faUsers} 
                className="text-5xl hover:text-green-400 transition duration-300 transform cursor-pointer" 
                draggable 
                onDragStart={() => handleDragStart('Users Icon')}
              />
              <span className="mt-2 text-sm">Community</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon 
                icon={faHandsHelping} 
                className="text-5xl hover:text-red-400 transition duration-300 transform cursor-pointer" 
                draggable 
                onDragStart={() => handleDragStart('Helping Hands Icon')}
              />
              <span className="mt-2 text-sm">Support</span>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <motion.img 
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" 
            alt="Hero" 
            className="w-full h-64 md:h-96 object-cover rounded-t-lg shadow-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 text-center bg-gradient-to-r from-[#4A90E2] to-[#A3D8E0] flex flex-col justify-center items-center">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-6 text-[#4A90E2]"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, color: '#FFD700', textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)' }}
        >
          <span className="text-yellow-300">About</span> <span className="text-white">Us</span>
        </motion.h2>
        <p className="mt-4 text-white max-w-2xl mx-auto text-lg md:text-xl animate__animated animate__fadeIn animate__delay-1s">
          At Rahul Public School, we are dedicated to fostering a nurturing environment that promotes academic excellence, character development, and lifelong learning. Our mission is to empower students to reach their full potential and make a positive impact in the world.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['Academic Excellence', 'Dedicated Faculty', 'Community Engagement'].map((title, index) => (
            <motion.div 
              key={index} 
              className={`p-6 shadow-lg rounded-lg transition-transform transform hover:shadow-xl relative overflow-hidden ${index === 0 ? 'bg-green-400' : index === 1 ? 'bg-red-400' : 'bg-yellow-400'} h-70 flex flex-col justify-between rounded-xl`}
              whileHover={{ scale: 1.05 }} 
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(null, index)}
              onTouchEnd={() => handleMouseLeave(null)}
            >
              <div className="flex justify-center mt-4">
                <motion.div 
                  className={`text-blue-500 text-5xl`} 
                  whileHover={{ rotateY: 180 }} 
                >
                  <FontAwesomeIcon 
                    icon={index === 0 ? faBook : index === 1 ? faChalkboardTeacher : faUsers} 
                  />
                </motion.div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">{title}</h3>
              <p className="mt-2 text-gray-600">
                {index === 0 && "We provide a rigorous curriculum that challenges students and prepares them for future success."}
                {index === 1 && "Our dedicated faculty members are committed to nurturing and guiding students in their academic journey."}
                {index === 2 && "We engage with the community through various programs that foster collaboration and growth."}
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition transform" 
                onClick={() => scrollToSection('contact')}
              >
                <FontAwesomeIcon icon={faHandsHelping} className="mr-2 w-50" />
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-[#FF6F61] to-[#A3D8E0] text-center min-h-screen flex flex-col justify-center">
        <h2 className="text-5xl font-semibold text-[#4A90E2] mb-6 animate__animated animate__fadeInDown">
          <span className="text-yellow-500">Our</span> <span className="text-blue-600">Programs</span>
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {[
            {
              icon: faBook,
              title: "Science and Technology",
              description: "Our Science and Technology program encourages students to explore the wonders of the universe through hands-on experiments and innovative projects.",
              bgColor: 'bg-blue-300',
              iconColor: 'text-blue-700'
            },
            {
              icon: faChalkboardTeacher,
              title: "Arts and Humanities",
              description: "Our Arts and Humanities program fosters creativity and critical thinking, allowing students to express themselves through various artistic mediums.",
              bgColor: 'bg-purple-300',
              iconColor: 'text-purple-700'
            },
            {
              icon: faUsers,
              title: "Sports and Physical Education",
              description: "Our Sports and Physical Education program promotes teamwork, discipline, and physical fitness through a variety of sports and activities.",
              bgColor: 'bg-green-300',
              iconColor: 'text-green-700'
            },
            {
              icon: faHandsHelping,
              title: "Community Service",
              description: "Our Community Service program encourages students to engage with the community, fostering a sense of responsibility and empathy.",
              bgColor: 'bg-red-300',
              iconColor: 'text-red-700'
            },
          ].map((program, index) => (
            <motion.div 
              key={index} 
              className={`p-6 ${program.bgColor} shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={program.icon} className={`${program.iconColor} text-5xl hover:animate-bounce`} />
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-600">{program.title}</h3>
              <p className="mt-2 text-gray-600">{program.description}</p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition transform" 
                onClick={() => scrollToSection('contact')}
              >
                <FontAwesomeIcon icon={faHandsHelping} className="mr-2" />
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 text-center bg-gradient-to-b from-[#FF6F61] to-[#A3D8E0] min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-5xl font-semibold text-[#4A90E2] mb-6 animate__animated animate__fadeInDown" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Contact Us</h2>
        <form className="mt-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faComment} className="absolute left-3 top-3 text-gray-400" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="mt-6 px-6 py-2 bg-[#4A90E2] text-white rounded-full hover:bg-[#FFD700] transition duration-300 w-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHandsHelping} className="mr-2" />
            Submit
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
