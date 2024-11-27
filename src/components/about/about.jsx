import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaRegCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import mylogo from "../../assets/rasm.png";

function App() {
  return (
    <div>
      {/* About Me Section */}
      <div id="about-me" className="bg-slate-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16 space-y-10 py-5">
          {/* About Text Section */}
          <div className="text-center space-y-6 text-black max-w-4xl mx-auto shadow-lg p-6 rounded-lg bg-white">
            <h2 className="text-4xl text-indigo-900 font-bold mb-4">
              About Me
            </h2>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Muhammadaziz Ravshanbekov
            </h2>
            <h3 className="text-lg font-semibold mb-6 text-teal-600">
              Software Engineer with more than 2.5 years of experience
            </h3>
            <p className="text-black text-base max-w-xl mx-auto text-gray-700">
              I am passionate about solving real-world problems through
              technology and creating intuitive, impactful user experiences.
            </p>

            {/* Career and Life Highlights */}
            <ul className="space-y-4 text-left text-gray-800 max-w-3xl mx-auto">
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
                <p>
                  Currently working on building an ERP system using{" "}
                  <strong>React</strong> and <strong>Electron JS</strong>,
                  consolidating data across multiple ecosystems.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
                <p>
                  Experienced as a <strong>frontend developer</strong>, CTO, and
                  lead on several successful projects, including a startup
                  online marketplace.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
                <p>
                  Strong background in <strong>Software Development</strong>{" "}
                  gained through specialized education and hands-on experience.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-teal-600 text-xl mt-1" />
                <p>
                  Deeply interested in <strong>project management</strong>,
                  combining technical expertise with leadership skills.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
