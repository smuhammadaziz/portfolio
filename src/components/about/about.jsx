import React from "react";
import { NavLink } from "react-router-dom";

function AboutMeSectiono() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16 space-y-10 py-5">
        {/* About Text Section */}
        <div className="text-center space-y-6 text-black max-w-4xl mx-auto shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-4xl text-indigo-900 font-bold mb-4 animate__animated animate__fadeIn">
            About Me
          </h2>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Muhammadaziz Ravshanbekov
          </h2>
          <h3 className="text-lg font-semibold mb-6 text-teal-600">
            MIT '18, M.Eng. Student, Software Engineer, and AI/ML Researcher
          </h3>
          <p className="text-black text-base max-w-3xl mx-auto text-gray-700">
            I'm a graduate of MIT's Class of 2018, deeply passionate about
            Computer Science. My interests include software design and
            development, artificial intelligence, machine learning, computer
            vision, and natural language processing.
          </p>
          <p className="text-black text-base max-w-3xl mx-auto text-gray-700">
            Currently, I'm pursuing a Master of Engineering (M.Eng.) in Computer
            Science and Artificial Intelligence.
          </p>

          {/* See More Button */}
          <NavLink
            to="/about"
            className="inline-block mt-10 py-3 px-8 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Read More
          </NavLink>
        </div>

        {/* Decorative Section (Optional: Add a background or pattern) */}
        <div className="hidden lg:block lg:w-1/3">
          {/* Decorative gradient background */}
          <div className="w-full h-full bg-gradient-to-br from-teal-400 to-indigo-500 rounded-lg shadow-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSectiono;
