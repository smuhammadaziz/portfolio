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

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  const menuItems = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achieve", label: "Achievements" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          nav ? "z-[666]" : "z-[555]"
        } ${
          !nav &&
          (scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg"
            : "bg-white/60 backdrop-blur-sm")
        }`}>
        <div className="container mx-auto px-6 md:px-40">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                nav
                  ? "text-white relative z-[502]"
                  : "bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent"
              }`}>
              Muhammadaziz
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-slate-100/80">
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-slate-100/80 flex items-center">
                Resume
                <MdOutlineFileDownload className="ml-1.5 text-lg" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                href="#contact"
                className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg hover:from-slate-900 hover:to-slate-800 transition-all duration-300 shadow-sm hover:shadow-md">
                Contact
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={handleNav}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                nav
                  ? "text-white fixed right-4 top-5 z-[502]"
                  : "text-slate-900 hover:bg-slate-100"
              }`}
              aria-label="Toggle menu">
              {nav ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-[500]"
              onClick={handleNav}
            />

            {/* Mobile Menu Content */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-[501] lg:hidden overflow-y-auto">
              {/* Menu Header */}

              {/* Menu Items */}
              <div className="min-h-screen w-full flex items-center justify-center p-4">
                <nav className="w-full max-w-sm mx-auto">
                  <div className="flex flex-col items-stretch space-y-4">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={handleNav}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.1 },
                        }}
                        className="w-full text-center text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                        {item.label}
                      </motion.a>
                    ))}
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: menuItems.length * 0.1 },
                      }}
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      onClick={handleNav}
                      className="w-full text-center text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                      Resume
                      <MdOutlineFileDownload className="ml-1.5 text-xl" />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: (menuItems.length + 1) * 0.1 },
                      }}
                      href="#contact"
                      onClick={handleNav}
                      className="w-full text-center bg-white text-slate-900 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/90 transition-colors duration-300">
                      Contact
                    </motion.a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
