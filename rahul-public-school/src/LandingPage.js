// src/LandingPage.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const LandingPage = () => (
  <div>
    <Header />

    {/* Hero Section */}
    <section className="bg-blue-500 text-white text-center py-20">
      <h2 className="text-4xl font-bold">Welcome to Rahul Public School</h2>
      <p className="mt-4 text-lg">Empowering students to succeed and make a difference.</p>
      <button className="mt-8 px-6 py-2 bg-yellow-400 text-blue-700 rounded-full">Learn More</button>
    </section>

    {/* About Section */}
    <section id="about" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold">About Us</h2>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Rahul Public School is committed to fostering a learning environment that promotes academic excellence and character development.
      </p>
    </section>

    {/* Programs Section */}
    <section id="programs" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold">Our Programs</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div className="p-6 bg-white shadow rounded-lg">Science and Technology</div>
        <div className="p-6 bg-white shadow rounded-lg">Arts and Humanities</div>
        <div className="p-6 bg-white shadow rounded-lg">Sports and Physical Education</div>
        <div className="p-6 bg-white shadow rounded-lg">Community Service</div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <form className="mt-6 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mt-4" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mt-4" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded mt-4"></textarea>
        <button type="submit" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full">Submit</button>
      </form>
    </section>

    <Footer />
  </div>
);

export default LandingPage;
