import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import me from "../../assets/rasm.png";

function Intro() {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/smuhammadaziz",
      color: "hover:text-gray-700",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammadaziz-ravshanbekov/",
      color: "hover:text-blue-600",
    },
    {
      Icon: FaTelegram,
      href: "https://t.me/rmuhammadaziz",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24">
      {/* Background Social Links */}
      <div className="absolute top-4 right-4 z-10 flex space-x-4">
        {socialLinks.map(({ Icon, href, color }, index) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`text-gray-500 ${color} transition-all duration-300 ease-in-out hover:scale-110 shadow-md hover:shadow-lg rounded-lg p-2`}>
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white to-indigo-50 opacity-70" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.1]" />

      <div className="container mx-auto px-6 md:px-40 relative z-50">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-100 lg:order-2 lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 blur-3xl opacity-30 animate-pulse" />
              <img
                src={me}
                alt="Muhammadaziz"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-100 lg:text-left lg:w-1/2 lg:order-1 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900">
                Ravshanbekov Muhammadaziz
              </span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-8 h-[60px] flex items-center">
              <TypeAnimation
                sequence={[
                  "FullStack Web/Desktop Developer",
                  2000,
                  "Desktop Engineer",
                  2000,
                  "Python Telegram Bot Developer",
                  2500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </div>

            <p className="text-gray-700 mb-8 max-w-2xl text-center lg:text-left">
              I'm a passionate developer focused on creating beautiful and
              functional web applications. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map(({ Icon, href, color }) => (
                <motion.a
                  key={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-800 ${color} transition-colors shadow-md hover:shadow-lg rounded-lg p-2`}>
                  <Icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
