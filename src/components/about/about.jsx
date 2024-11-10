import React from 'react';
import mylogo from '../../assets/3.jpg';
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

function AboutMeSectiono() {
  return (
    <div className='py-16'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-72 space-y-10 lg:space-y-0">
        
        {/* Image and Social Links */}
        <div className='relative flex-shrink-0'>
          <img 
            src={mylogo} 
            alt="Profile" 
            className='rounded-full border-4 border-indigo-300 w-80 h-80 object-cover mx-auto' 
          />
          
          {/* Social Links */}
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex space-x-4'>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='bg-indigo-900 p-3 rounded-full text-white hover:bg-blue-600 transition duration-300'>
              <FaLinkedin size={20} />
            </a>
            <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" className='bg-indigo-900 p-3 rounded-full text-white hover:bg-blue-500 transition duration-300'>
              <FaTelegram size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='bg-indigo-900 p-3 rounded-full text-white hover:bg-gray-700 transition duration-300'>
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* About Text Section */}
        <div className='text-center lg:text-left max-w-lg space-y-4'>
          <h2 className='text-3xl font-bold text-gray-800'>Muhammadaziz Ravshanbekov</h2>
          <h3 className='text-xl font-semibold text-indigo-500'>MIT '18, M.Eng. Student, Software Engineer, and AI/ML Researcher</h3>
          <p className='text-gray-700'>
            I'm a graduate of MIT's Class of 2018, deeply passionate about Computer Science. My interests include software design and development, artificial intelligence, machine learning, computer vision, and natural language processing.
          </p>
          <p className='text-gray-700'>
            Currently, I'm pursuing a Master of Engineering (M.Eng.) in Computer Science and Artificial Intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSectiono;
