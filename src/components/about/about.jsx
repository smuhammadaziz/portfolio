import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function AboutSection() {
  const personalInfo = {
    education: "Bachelor's in Computer Science",
    location: "Tashkent/Andijan, Uzbekistan",
    email: "workmuhammadaziz@gmail.com",
    experience:
      "2.5+ years in Software Development, Currently working on building an ERP system using React and Electron JS, consolidating data across multiple ecosystems. Strong background in Software Development gained through specialized education and hands-on experience.",
    skills: [
      "React/Next.js",
      "Node.js",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Git",
    ],
    interests: [
      "Web Development",
      "System Architecture",
      "Project Management",
      "Cloud Computing",
    ],
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_40%_at_10%_0%,#000_70%,transparent_110%)] opacity-[0.1]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center py-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-4">
                About Me
              </h2>
            </div>
            {/* Card Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Muhammadaziz Ravshanbekov
                  </h3>
                  <p className="text-indigo-600 font-semibold">
                    Full Stack Developer
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    <span>{personalInfo.email}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A passionate software engineer focused on creating beautiful and
                functional web applications. I love turning complex problems
                into simple, beautiful, and intuitive solutions.
              </p>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <FaBriefcase className="text-indigo-600 w-5 h-5 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-800">
                        Experience
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-7">
                      {personalInfo.experience}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors">
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Interests
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.interests.map((interest, index) => (
                        <motion.span
                          key={interest}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
