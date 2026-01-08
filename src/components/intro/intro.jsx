import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import me from "../../assets/rasm.png";

function Intro() {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/smuhammadaziz",
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammadaziz-ravshanbekov/",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      Icon: FaTelegram,
      href: "https://t.me/rmuhammadaziz",
      color: "hover:bg-blue-500 hover:text-white",
    },
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Available for Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              experiences
            </span> that matter.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 h-10 font-light"
          >
            I am a <span className="font-semibold text-slate-900">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "FullStack Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Specializing in building scalable, performant web applications with modern technologies. Passionate about clean code, user-centric design, and solving complex problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a href="#projects" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20">
              View My Work
            </a>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white rounded-full text-slate-700 shadow-sm border border-slate-200 transition-all hover:scale-110 ${link.color}`}
                >
                  <link.Icon className="text-xl" />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}

export default Intro;
