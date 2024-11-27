import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import mylogo from "../../assets/rasm.png";

function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-slate-100 py-10 mt-12 lg:mt-16 flex items-center justify-center">
      <div className="container px-6 md:px-40 flex flex-col items-center text-center space-y-8">
        {/* Image Section */}
        <motion.img
          src={mylogo}
          alt="Logo"
          className="w-48 md:w-60 lg:w-72 rounded-full border-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-roboto">
            Muhammadaziz Ravshanbekov
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-2 font-roboto">
            Software Engineer @KSB-SOFT
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-4 leading-relaxed font-roboto max-w-xl mx-auto">
            Passionate about building scalable software and perfect user-centric
            experiences. Let's solve complex problems together!
          </p>
        </motion.div>
        {/* Social Media Icons */}
        <motion.div
          className="flex space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>
          <a
            href="https://t.me/rmuhammadaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-110">
            <FaTelegram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadaziz-ravshanbekov/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/smuhammadaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-110">
            <FaGithub size={24} />
          </a>
        </motion.div>
        {/* Button */}
        <motion.a
          href="#experience"
          className="bg-indigo-900 text-white px-8 md:px-12 py-3 rounded-full text-lg md:text-xl shadow-lg hover:bg-transparent border-2 border-indigo-900 hover:text-indigo-800 transition transform hover:scale-105 font-roboto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}>
          My Experience
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Intro;
