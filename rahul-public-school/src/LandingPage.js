// src/LandingPage.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faBook, faChalkboardTeacher, faUsers, faHandsHelping, faUser, faEnvelope, faComment, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [cursorColor, setCursorColor] = useState('text-gray-800'); // Updated default cursor color
  const [draggedIcon, setDraggedIcon] = useState(null); // Define draggedIcon state
  const [hoveredImage, setHoveredImage] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      hoverImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Science Fair",
      description: "Students showcasing their innovative projects at the annual science fair."
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      hoverImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Art Exhibition",
      description: "Creative artworks displayed by our talented students during the art exhibition."
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Sports Day",
      description: "Exciting moments captured during the sports day events."
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Community Service",
      description: "Students engaging in community service activities to give back."
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Graduation Ceremony",
      description: "Celebrating the achievements of our graduating class."
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Field Trip",
      description: "Exploring new places during our educational field trips."
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Cultural Fest",
      description: "Students showcasing their cultural heritage during the cultural fest."
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Music Concert",
      description: "A memorable evening filled with music and performances by our students."
    }
  ];

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

  const openModal = (item) => {
    setModalImage(item.image);
    setModalTitle(item.title);
    setModalDescription(item.description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-hidden bg-gray-100"> {/* Updated background color */}
      <Header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg" /> {/* Updated shadow */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] text-white h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide mb-4" // Responsive font size
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FFDD57]">Welcome</span> <span className="text-[#00BFFF]">to</span> <span className="text-[#FFDD57]">Rahul Public School</span>
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl font-light"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white text-xl">Empowering</span> <span className="text-white text-xl">students</span> <span className="text-white text-xl">to succeed</span> <span className="text-white text-xl">and make a difference.</span>
          </motion.p>
          <motion.button 
            className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-full border-4 border-transparent hover:border-yellow-400 transition-all duration-300 hover:scale-110 shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 0, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </motion.button>
          <div className="mt-10 flex flex-wrap justify-center space-x-4">
            {/* Icons Section */}
            {['Book', 'Teacher', 'Users', 'Support'].map((icon, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon 
                  icon={icon === 'Book' ? faBook : icon === 'Teacher' ? faChalkboardTeacher : icon === 'Users' ? faUsers : faHandsHelping} 
                  className="text-4xl hover:text-yellow-400 transition duration-300 transform cursor-pointer" 
                  draggable 
                  onDragStart={() => handleDragStart(`${icon} Icon`)}
                />
                <span className="mt-2 text-sm">{icon}s</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <motion.img 
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" 
            alt="Hero" 
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-t-lg shadow-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-20 px-4 text-center bg-gradient-to-r from-[#4A90E2] to-[#A3D8E0] flex flex-col justify-center items-center">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4A90E2]"
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
              className={`p-4 md:p-6 shadow-lg rounded-lg transition-transform transform hover:shadow-xl relative overflow-hidden ${index === 0 ? 'bg-green-400' : index === 1 ? 'bg-red-400' : 'bg-yellow-400'} h-70 flex flex-col justify-between rounded-xl`}
              whileHover={{ scale: 1.05 }} 
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(null, index)}
              onTouchEnd={() => handleMouseLeave(null)}
            >
              <div className="flex justify-center mt-4">
                <motion.div 
                  className={`text-blue-500 text-4xl md:text-5xl`} 
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

      {/* Gallery Section */}
      <section id="gallery" className="py-10 md:py-20 px-4 text-center bg-gradient-to-r from-[#3A7D9A] to-[#A3D8E0]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A90E2]">
          <span className="text-yellow-500">Our</span> <span className="text-white">Gallery</span>
        </h2>
        <p className="mb-10 text-lg text-gray-200">
          Explore the vibrant moments captured at Rahul Public School, showcasing our events, activities, and the joy of learning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(item)}
            >
              <motion.img 
                src={item.image} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300" 
                initial={{ scale: 1 }} 
                whileHover={{ scale: 1.1 }} // Scale image on hover
              />
              <motion.img 
                src={item.hoverImage} 
                alt={`Gallery Hover Image ${index + 1}`} 
                className="absolute inset-0 w-full h-48 md:h-64 object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" // Initially hidden
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                <span className="text-white text-lg font-semibold">{item.title}</span>
                <p className="text-white text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Full-Screen Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full">
            <img src={modalImage} alt={modalTitle} className="w-full h-auto rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white p-4">
              <h3 className="text-2xl font-bold">{modalTitle}</h3>
              <p className="mt-2 text-lg">{modalDescription}</p>
              <button 
                className="mt-4 px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Programs Section */}
      <section id="programs" className="py-10 md:py-20 bg-gradient-to-b from-[#3A7D9A] to-[#A3D8E0] text-center min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4A90E2]">
          <span className="text-yellow-500">Our</span> <span className="text-white">Programs</span>
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {[{ icon: faBook, title: "Science and Technology", description: "Our Science and Technology program encourages students to explore the wonders of the universe through hands-on experiments and innovative projects.", bgColor: 'bg-blue-300', iconColor: 'text-blue-700' },
            { icon: faChalkboardTeacher, title: "Arts and Humanities", description: "Our Arts and Humanities program fosters creativity and critical thinking, allowing students to express themselves through various artistic mediums.", bgColor: 'bg-purple-300', iconColor: 'text-purple-700' },
            { icon: faUsers, title: "Sports and Physical Education", description: "Our Sports and Physical Education program promotes teamwork, discipline, and physical fitness through a variety of sports and activities.", bgColor: 'bg-green-300', iconColor: 'text-green-700' },
            { icon: faHandsHelping, title: "Community Service", description: "Our Community Service program encourages students to engage with the community, fostering a sense of responsibility and empathy.", bgColor: 'bg-red-300', iconColor: 'text-red-700' },
          ].map((program, index) => (
            <motion.div 
              key={index} 
              className={`p-4 md:p-6 ${program.bgColor} shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={program.icon} className={`${program.iconColor} text-4xl md:text-5xl hover:animate-bounce`} />
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-[#4A90E2] mt-4">{program.title}</h3>
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
      <section id="contact" className="py-10 md:py-20 px-4 text-center bg-gradient-to-b from-[#4A90E2] to-[#A3D8E0] min-h-[400px] flex flex-col justify-center items-center relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-semibold text-[#4A90E2] mb-6 animate__animated animate__fadeInDown" 
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
        >
          <span className="text-yellow-300">Contact</span> <span className="text-white">Us</span>
        </motion.h2>
        
        {/* Icons related to contact with hover effects */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          <div className="flex flex-col items-center transition-transform transform hover:scale-110">
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="text-white text-4xl transition-all duration-300 hover:text-yellow-300 hover:animate-bounce hover:rotate-360 hover:flip" 
            />
            <span className="text-white">Email</span>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-110">
            <FontAwesomeIcon 
              icon={faPhone} 
              className="text-white text-4xl transition-all duration-300 hover:text-yellow-300 hover:animate-bounce hover:rotate-360 hover:flip" 
            />
            <span className="text-white">Phone</span>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-110">
            <FontAwesomeIcon 
              icon={faMapMarkerAlt} 
              className="text-white text-4xl transition-all duration-300 hover:text-yellow-300 hover:animate-bounce hover:rotate-360 hover:flip" 
            />
            <span className="text-white">Location</span>
          </div>
        </div>

        <form className="mt-6 w-full max-w-lg mx-auto bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"> {/* Adjusted width and added max-width */}
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100" />
          </div>
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100" />
          </div>
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faComment} className="absolute left-3 top-3 text-gray-400" />
            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-100"></textarea>
          </div>
          <button type="submit" className="mt-6 px-6 py-2 bg-[#4A90E2] text-white rounded-full hover:bg-[#FFD700] transition duration-300 w-full flex items-center justify-center transform hover:scale-105 hover:shadow-lg">
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