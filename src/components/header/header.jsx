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

  const handleNav = () => setNav(!nav);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-500 z-[999] ${scrolled || nav
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm"
          : "bg-transparent backdrop-blur-none"
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300">
              M
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Muhammadaziz
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/40 shadow-sm gap-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href={resume}
                download
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100/50 hover:bg-slate-100 text-slate-900 font-medium text-sm transition-all border border-slate-200"
              >
                Resume
                <MdOutlineFileDownload className="text-lg" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm shadow-lg shadow-slate-900/20 hover:bg-indigo-600 transition-all duration-300"
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={handleNav}
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-[1000]"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[998] bg-white lg:hidden flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col gap-8 items-center">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setNav(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl font-display font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href={resume}
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-xl font-medium text-slate-600 mt-8"
              >
                Download Resume <MdOutlineFileDownload />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={() => setNav(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-12 py-4 bg-slate-900 text-white rounded-full text-xl font-medium"
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
