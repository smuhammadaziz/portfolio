import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-40 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p className="text-gray-700 mb-4 md:mb-0">
          Copyright © Muhammadaziz 2023
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4 md:mb-0">
          <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
            <FaFacebook />
          </a>
          <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
            <FaLinkedin />
          </a>
          <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
            <FaGithub />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex gap-4 text-black font-semibold">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
