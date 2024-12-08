import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function AboutSection() {
  const personalInfo = {
    location: "Tashkent/Andijan, Uzbekistan",
    email: "workmuhammadaziz@gmail.com",
    experience:
      "2.5+ years in Software Development, Currently working on building an ERP system using React and Electron JS, consolidating data across multiple ecosystems. Strong background in Software Development gained through specialized education and hands-on experience.",
    interests: [
      "Web Development",
      "System Architecture",
      "Project Management",
      "Desktop Engineer",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about creating elegant solutions to complex problems
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Hero Section */}
            <div className="relative px-6 py-16 sm:px-12 sm:py-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

              <div className="relative">
                <motion.div
                  variants={itemVariants}
                  className="max-w-3xl mx-auto text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Muhammadaziz Ravshanbekov
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    A passionate software engineer focused on creating beautiful
                    and functional web applications. I love turning complex
                    problems into simple, beautiful, and intuitive solutions.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors group">
                      <FaEnvelope className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      <span>{personalInfo.email}</span>
                    </a>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                      <span>{personalInfo.location}</span>
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="max-w-3xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
                    <div className="pl-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-indigo-50 rounded-xl">
                          <FaBriefcase className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                          Professional Journey
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {personalInfo.experience}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="px-6 py-12 sm:px-12 bg-gradient-to-b from-gray-50/50 to-white border-t border-gray-100">
              <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
                <div className="flex flex-wrap justify-center gap-3">
                  {personalInfo.interests.map((interest) => (
                    <motion.span
                      key={interest}
                      variants={itemVariants}
                      className="px-6 py-3 bg-white shadow-sm hover:shadow-md rounded-xl text-gray-600 transition-all duration-300">
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="px-6 py-8 sm:px-12 bg-gray-50 border-t border-gray-100">
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center gap-6">
                <a
                  href="https://github.com/smuhammadaziz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300">
                  <FaGithub className="w-6 h-6 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammadaziz-ravshanbekov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300">
                  <FaLinkedin className="w-6 h-6 text-[#0077b5]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
