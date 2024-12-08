import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUserAlt,
  FaRegEnvelope,
  FaRegComments,
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl text-blue-400" />,
      url: "https://www.linkedin.com/in/muhammadaziz-ravshanbekov/",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="text-2xl text-blue-400" />,
      url: "https://t.me/rmuhammadaziz",
    },
    {
      name: "Github",
      icon: <FaGithub className="text-2xl text-blue-400" />,
      url: "https://github.com/smuhammadaziz",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-indigo-950 to-black py-16 sm:py-20 md:py-24 text-white font-inter overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e580_1px,transparent_1px),linear-gradient(to_bottom,#4f46e580_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.2]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6 md:px-40">
        {/* Header - Visible only on mobile */}
        <motion.div
          variants={itemVariants}
          className="text-center lg:hidden mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Feel free to reach out via email or phone, or use the form to send a
            message. I'm always open to new opportunities and interesting
            collaborations!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-24">
          {/* Left Section: Information */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-6/12 xl:w-6/12 lg:sticky lg:top-8">
            {/* Header - Visible only on desktop */}
            <div className="hidden lg:block mb-12">
              <h2 className="text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-lg xl:text-xl text-gray-300 leading-relaxed">
                Feel free to reach out via email or phone, or use the form to
                send a message. I'm always open to new opportunities!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <motion.div
                variants={itemVariants}
                className="group p-4 sm:p-5 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <FaEnvelope className="text-xl sm:text-2xl text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-300 text-sm">Email</p>
                    <p className="text-sm sm:text-base lg:text-lg text-white truncate">
                      workmuhammadaziz@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                variants={itemVariants}
                className="group p-4 sm:p-5 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <FaPhoneAlt className="text-xl sm:text-2xl text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-300 text-sm">Phone</p>
                    <p className="text-white text-base sm:text-lg">
                      +998 95 029-10-80
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links Card */}
              <motion.div
                variants={itemVariants}
                className="p-4 sm:p-5 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <p className="font-medium text-gray-300 text-md mb-4">
                  Contact Me
                </p>
                <div className="flex items-center justify-left sm:justify-start gap-3 sm:gap-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-500/20 rounded-xl hover:bg-blue-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}>
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section: Form */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-7/12 xl:w-8/12">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10">
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label
                    className="block text-gray-300 text-sm font-medium mb-2"
                    htmlFor="name">
                    Your Name
                  </label>
                  <div className="relative group">
                    <input
                      className="w-full px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pl-12 text-base"
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <FaUserAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label
                    className="block text-gray-300 text-sm font-medium mb-2"
                    htmlFor="email">
                    Your Email
                  </label>
                  <div className="relative group">
                    <input
                      className="w-full px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pl-12 text-base"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                    <FaRegEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div variants={itemVariants}>
                  <label
                    className="block text-gray-300 text-sm font-medium mb-2"
                    htmlFor="phone">
                    Your Phone
                  </label>
                  <div className="relative group">
                    <input
                      className="w-full px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pl-12 text-base"
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 99 999-99-99"
                    />
                    <FaPhoneAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label
                    className="block text-gray-300 text-sm font-medium mb-2"
                    htmlFor="message">
                    Your Message
                  </label>
                  <div className="relative group">
                    <textarea
                      className="w-full px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pl-12 min-h-[120px] sm:min-h-[150px] resize-y text-base"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required></textarea>
                    <FaRegComments className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group text-base"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}>
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );

  return <div>{/* Your other components here */}</div>;
}

export default ContactSection;
