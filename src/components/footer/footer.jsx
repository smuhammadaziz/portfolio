import React from "react";
import { FaTelegram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Muhammadaziz</h3>
            <p className="text-sm">Building digital experiences that matter.</p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="https://github.com/smuhammadaziz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/muhammadaziz-ravshanbekov/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://t.me/rmuhammadaziz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300">
              <FaTelegram />
            </a>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Muhammadaziz Ravshanbekov. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> in Tashkent
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
