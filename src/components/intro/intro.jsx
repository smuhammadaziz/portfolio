import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import mylogo from "../../assets/rasm.png";

function Intro() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="bg-slate-100 py-10 mt-16 flex items-center justify-center">
      <div
        className="container px-6 md:px-40 flex flex-col items-center text-center space-y-8"
        data-aos="fade-up">
        {/* Image Section */}
        <img
          src={mylogo}
          alt="Logo"
          className="w-48 md:w-60 lg:w-72 rounded-full border-4 shadow-lg"
          data-aos="zoom-in"
        />

        {/* Text Section */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-roboto">
            Muhammadaziz Ravshanbekov
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-2 font-roboto">
            Software Engineer @KSB-SOFT
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-4 leading-relaxed font-roboto max-w-xl mx-auto">
            Passionate about building scalable software and elegant user-centric
            experiences. Let’s solve complex problems together!
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6" data-aos="fade-up">
          <a
            href="https://t.me/your-telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-110">
            <FaTelegram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-110">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Button */}
        <button
          className="bg-indigo-900 text-white px-8 md:px-12 py-3 rounded-full text-lg md:text-xl shadow-lg hover:bg-transparent border-2 border-indigo-900 hover:text-indigo-800 transition transform hover:scale-105 font-roboto"
          data-aos="flip-up">
          My Experience
        </button>
      </div>
    </div>
  );
}

export default Intro;
