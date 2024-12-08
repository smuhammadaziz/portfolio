import React from "react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 text-slate-800">
              Muhammadaziz Ravshanbekov
            </h3>
            <p className="text-slate-600 text-sm">
              {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          {/* Middle: Navigation */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex justify-center space-x-6 text-slate-600">
              <a
                href="#intro"
                className="hover:text-slate-900 transition-colors duration-300 text-sm hover:underline decoration-slate-400 underline-offset-4">
                About Me
              </a>
              <a
                href="#skills"
                className="hover:text-slate-900 transition-colors duration-300 text-sm hover:underline decoration-slate-400 underline-offset-4">
                Skills
              </a>
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://t.me/rmuhammadaziz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-200 p-3 rounded-lg hover:bg-slate-300 transition-all duration-300 group">
              <FaTelegram className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadaziz-ravshanbekov/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-200 p-3 rounded-lg hover:bg-slate-300 transition-all duration-300 group">
              <FaLinkedin className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
            </a>
            <a
              href="https://github.com/smuhammadaziz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-200 p-3 rounded-lg hover:bg-slate-300 transition-all duration-300 group">
              <FaGithub className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
