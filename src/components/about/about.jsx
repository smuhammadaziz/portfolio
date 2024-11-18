import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegCheckCircle } from "react-icons/fa"; // Importing icon

function AboutMeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16 space-y-10 py-5">
        {/* About Text Section */}
        <div
          className="text-center space-y-6 text-black max-w-4xl mx-auto shadow-lg p-6 rounded-lg bg-white"
          data-aos="fade-up">
          <h2 className="text-4xl text-indigo-900 font-bold mb-4">About Me</h2>
          <h2
            className="text-3xl font-bold mb-4 text-gray-800"
            data-aos="fade-right">
            Muhammadaziz Ravshanbekov
          </h2>
          <h3
            className="text-lg font-semibold mb-6 text-teal-600"
            data-aos="fade-left">
            Software Engineer with more than 2.5 years of experience
          </h3>
          <p
            className="text-black text-base max-w-xl mx-auto text-gray-700"
            data-aos="zoom-in">
            I am passionate about solving real-world problems through technology
            and creating intuitive, impactful user experiences.
          </p>

          {/* Career and Life Highlights */}
          <ul className="space-y-4 text-left text-gray-800 max-w-3xl mx-auto">
            <li
              className="flex items-start space-x-3"
              data-aos="fade-up"
              data-aos-delay="100">
              <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
              <p>
                Currently working on building an ERP system using{" "}
                <strong>React</strong>
                and <strong>Electron JS</strong>, consolidating data across
                multiple ecosystems.
              </p>
            </li>
            <li
              className="flex items-start space-x-3"
              data-aos="fade-up"
              data-aos-delay="200">
              <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
              <p>
                Experience as a <strong>frontend developer</strong>, CTO, and
                lead on several successful projects, including a startup online
                marketplace.
              </p>
            </li>
            <li
              className="flex items-start space-x-3"
              data-aos="fade-up"
              data-aos-delay="300">
              <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
              <p>
                Strong background in <strong>software development</strong>{" "}
                gained through specialized education and hands-on experience.
              </p>
            </li>
            <li
              className="flex items-start space-x-3"
              data-aos="fade-up"
              data-aos-delay="400">
              <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
              <p>
                Aspiring to further my education with a{" "}
                <strong>Master of Engineering (M.Eng.)</strong>
                in Computer Science and Artificial Intelligence.
              </p>
            </li>
            <li
              className="flex items-start space-x-3"
              data-aos="fade-up"
              data-aos-delay="500">
              <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
              <p>
                Deeply interested in <strong>project management</strong>,
                combining technical expertise with leadership skills.
              </p>
            </li>
          </ul>
        </div>

        {/* Decorative Section (Optional: Add a background or pattern) */}
        <div
          className="hidden lg:block lg:w-1/3"
          data-aos="fade-in"
          data-aos-delay="300">
          {/* Decorative gradient background */}
          <div className="w-full h-full bg-gradient-to-br from-teal-400 to-indigo-500 rounded-lg shadow-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
