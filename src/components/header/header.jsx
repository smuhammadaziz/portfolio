import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

import resume from "../../assets/Muhammadaziz's Resume.pdf";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 md:px-16 flex justify-between items-center py-4">
        <a
          href="#"
          className="text-xl lg:text-2xl font-bold text-indigo-900 hover:text-indigo-950">
          Muhammadaziz
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-lg text-slate-700 hover:underline cursor-pointer">
            About Me
          </a>
          <a
            href="#skills"
            className="text-lg text-slate-700 hover:underline cursor-pointer">
            Skills
          </a>
          <a
            href="#projects"
            className="text-lg text-slate-700 hover:underline cursor-pointer">
            Projects
          </a>
          <a
            href="#experience"
            className="text-lg text-slate-700 hover:underline cursor-pointer">
            Work Experience
          </a>
          <a
            href="#achieve"
            className="text-lg text-slate-700 hover:underline cursor-pointer">
            Achievements
          </a>
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center text-lg text-slate-700 hover:underline cursor-pointer">
              Resume{" "}
              <span className="ms-2 mt-1">
                <MdOutlineFileDownload />
              </span>
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden md:block border-2 border-indigo-950 bg-indigo-900 hover:bg-white hover:text-indigo-950 text-white rounded-lg px-6 py-2 transition-colors">
          Contact
        </a>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-20" onClick={handleNav}>
          {nav ? (
            <FaTimes size={25} className="text-indigo-900" />
          ) : (
            <FaBars size={25} className="text-indigo-900" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-indigo-900 text-white flex flex-col items-center justify-center transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-10`}>
          <ul className="space-y-8 text-center text-xl">
            <a
              href="#about"
              onClick={handleNav}
              className="hover:underline cursor-pointer">
              About Me
            </a>
            <a
              href="#skills"
              onClick={handleNav}
              className="hover:underline cursor-pointer">
              Skills
            </a>
            <a
              href="#projects"
              onClick={handleNav}
              className="hover:underline cursor-pointer">
              Projects
            </a>
            <a
              href="#experience"
              onClick={handleNav}
              className="hover:underline cursor-pointer">
              Work Experience
            </a>
            <a
              href="#achieve"
              onClick={handleNav}
              className="hover:underline cursor-pointer">
              Achievements
            </a>
            <li
              onClick={handleNav}
              className="hover:underline cursor-pointer border-2 border-white bg-indigo-900 hover:bg-white hover:text-indigo-950 text-white rounded-lg px-10 py-2 flex">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center">
                Resume{" "}
                <span className="ms-2 mt-1">
                  <MdOutlineFileDownload />
                </span>
              </a>
            </li>
            <a
              href="#contact"
              onClick={handleNav}
              className="hover:underline cursor-pointer border-2 border-white bg-indigo-900 hover:bg-white hover:text-indigo-950 text-white rounded-lg px-10 py-2 transition-colors">
              Contact
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
