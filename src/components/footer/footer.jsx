import React from "react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white py-6">
      <div className="container mx-auto px-6 md:px-40 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p className="text-black  mb-4 md:mb-0 text-md md:text-base">
          Copyright © Muhammadaziz 2024
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-3 lg:mt-0 gap-6 mb-4 md:mb-0">
          <a
            href="https://t.me/rmuhammadaziz"
            target="_blank"
            className="bg-indigo-900 text-white p-3 rounded-full hover:bg-indigo-700 transition duration-300">
            <FaTelegram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadaziz-ravshanbekov/"
            target="_blank"
            className="bg-indigo-900 text-white p-3 rounded-full hover:bg-indigo-700 transition duration-300">
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/smuhammadaziz"
            target="_blank"
            className="bg-indigo-900 text-white p-3 rounded-full hover:bg-indigo-700 transition duration-300">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex gap-6 mt-3 lg:mt-0 text-black font-semibold text-sm md:text-base text-center">
          <a href="#intro" className="hover:underline">
            About Me
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
