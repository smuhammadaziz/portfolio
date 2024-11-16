import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import mylogo from "../../assets/rasm.png";

function Intro() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-6 md:px-40 flex justify-between items-center">
        {/* Wrapper */}
        <div className="p-10 md:p-16 lg:p-20 flex flex-col items-center text-center space-y-8">
          {/* Image Section */}
          <img
            src={mylogo}
            alt="Logo"
            className="w-48 md:w-60 lg:w-72 rounded-full border-4 shadow-lg"
          />

          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-roboto">
              Muhammadaziz Ravshanbekov
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-2 font-roboto">
              Software Engineer @KSB-SOFT
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-4 leading-relaxed font-roboto">
              Passionate about building scalable software and elegant
              user-centric experiences. Let’s solve complex problems together!
            </p>
          </div>

          {/* Button */}
          <button className="bg-indigo-900 text-white px-8 md:px-12 py-3 rounded-full text-lg md:text-xl shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 font-roboto">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
