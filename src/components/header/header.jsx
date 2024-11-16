import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 md:px-40 flex justify-between items-center py-4">
        <a
          href="#"
          className="text-3xl font-bold text-indigo-900 hover:text-indigo-950">
          Muhammadaziz
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-lg text-slate-700 hover:underline cursor-pointer">
            About Me
          </li>
          <li className="text-lg text-slate-700 hover:underline cursor-pointer">
            Skills
          </li>
          <li className="text-lg text-slate-700 hover:underline cursor-pointer">
            Projects
          </li>
          <li className="text-lg text-slate-700 hover:underline cursor-pointer">
            Work Experience
          </li>
          <li className="text-lg text-slate-700 hover:underline cursor-pointer">
            Achievements
          </li>
          <li className="text-lg text-slate-700 hover:underline cursor-pointer flex items-center">
            Resume{" "}
            <span className="ms-2 mt-1">
              <MdOutlineFileDownload />
            </span>
          </li>
        </ul>

        <button className="hidden md:block border-2 border-indigo-950 bg-indigo-900 hover:bg-white hover:text-indigo-950 text-white rounded-lg px-10 py-2">
          Contact
        </button>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-20" onClick={handleNav}>
          {nav ? (
            <FaTimes size={25} className="text-white" />
          ) : (
            <FaBars size={25} className="text-indigo-900" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-indigo-900 text-white flex flex-col items-center justify-center transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-10`}>
          <ul className="space-y-8 text-center text-2xl mt-10">
            <li onClick={handleNav} className="hover:underline cursor-pointer">
              About Me
            </li>
            <li onClick={handleNav} className="hover:underline cursor-pointer">
              Skills
            </li>
            <li onClick={handleNav} className="hover:underline cursor-pointer">
              Projects
            </li>
            <li onClick={handleNav} className="hover:underline cursor-pointer">
              Work Experience
            </li>
            <li onClick={handleNav} className="hover:underline cursor-pointer">
              Achievements
            </li>
            <li
              onClick={handleNav}
              className="hover:underline cursor-pointer border-2 border-white bg-indigo-900 hover:bg-white hover:text-indigo-950 text-white rounded-lg px-10 py-2 flex">
              Resume{" "}
              <span className="ms-2 mt-1">
                <MdOutlineFileDownload />
              </span>
            </li>
            <li
              onClick={handleNav}
              className="hover:underline cursor-pointer border-2 border-white bg-indigo-900 hover:bg-white hover:text-indigo-950 text-white rounded-lg px-10 py-2">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
