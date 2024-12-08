import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import resume from "../../assets/Muhammadaziz's Resume.pdf";

function Header() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const menuItems = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achieve", label: "Achievements" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[800] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-40">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent hover:from-slate-900 hover:to-slate-800 transition-all duration-300"
          >
            Muhammadaziz
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-slate-100"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-slate-100 flex items-center"
            >
              Resume
              <MdOutlineFileDownload className="ml-1.5 text-lg" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              href="#contact"
              className="ml-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg hover:from-slate-900 hover:to-slate-800 transition-all duration-300 shadow-sm hover:shadow"
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleNav}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
          >
            {nav ? (
              <FaTimes className="w-6 h-6 text-slate-900" />
            ) : (
              <FaBars className="w-6 h-6 text-slate-900" />
            )}
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {nav && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-0 bg-white z-50 md:hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-xl font-bold text-slate-900">Menu</span>
                    <button
                      onClick={handleNav}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                    >
                      <FaTimes className="w-6 h-6 text-slate-900" />
                    </button>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-2">
                      {menuItems.map((item, index) => (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          onClick={handleNav}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="block px-4 py-3 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </div>
                    <div className="mt-6 space-y-3">
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        onClick={handleNav}
                        className="flex items-center justify-center px-4 py-3 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                      >
                        Resume
                        <MdOutlineFileDownload className="ml-1.5 text-lg" />
                      </motion.a>
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        href="#contact"
                        onClick={handleNav}
                        className="block text-center px-4 py-3 text-white bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg hover:from-slate-900 hover:to-slate-800 transition-all duration-300"
                      >
                        Contact
                      </motion.a>
                    </div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default Header;
