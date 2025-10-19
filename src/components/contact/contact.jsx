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

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24 max-w-4xl mx-auto">
          {/* Left Section: Information */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-8/12 xl:w-9/12 text-center lg:text-left">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-lg xl:text-xl text-gray-300 leading-relaxed">
                Feel free to reach out via email, phone, or social links. I'm always open to new opportunities and collaborations!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 lg:space-y-6">
              {/* Email Card */}
              <motion.div
                variants={itemVariants}
                className="group p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <FaEnvelope className="text-xl sm:text-2xl text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-medium text-gray-300 text-sm">Email</p>
                    <p className="text-sm sm:text-base lg:text-lg text-white truncate">
                      devmuhammadaziz@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                variants={itemVariants}
                className="group p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <FaPhoneAlt className="text-xl sm:text-2xl text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-medium text-gray-300 text-sm">Phone</p>
                    <p className="text-white text-base sm:text-lg">
                      +998 91 067-10-80
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links Card */}
              <motion.div
                variants={itemVariants}
                className="p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <p className="font-medium text-gray-300 text-md mb-4 text-left">
                  Connect With Me
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6">
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
        </div>
      </motion.div>
    </div>
  );

  return <div>{/* Your other components here */}</div>;
}

export default ContactSection;
