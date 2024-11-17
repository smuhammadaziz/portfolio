import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUserAlt,
  FaRegEnvelope,
  FaRegComments,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-indigo-950 py-20 text-white font-inter">
      <div className="container mx-auto px-6 md:px-20 lg:px-40 flex flex-col lg:flex-row items-start text-center lg:text-left">
        {/* Left Section: Information */}
        <div className="lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6 text-gray-100">
            Get in Touch
          </h2>
          <p className="text-lg mb-10 text-gray-400">
            Feel free to reach out via email or phone, or use the form below to
            send a message. I'm always open to new opportunities!
          </p>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start gap-6 mb-10 text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-2xl text-blue-500" />
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                workmuhammadaziz@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-2xl text-blue-500" />
              <p>
                <span className="font-semibold text-white">Phone:</span> +998 95
                029-10-80
              </p>
            </div>
            <button className="flex items-center gap-3 bg-slate-100 px-10 py-3 rounded-lg text-black hover:bg-transparent border-2 border-slate-100 hover:text-white">
              <FaLinkedin className="text-2xl text-blue-500" />
              <p className="text-lg">Linkedin</p>
            </button>
            <button className="flex items-center gap-3 bg-slate-100 px-9 py-3 rounded-lg text-black hover:bg-transparent border-2 border-slate-100 hover:text-white">
              <FaTelegram className="text-2xl text-blue-500" />
              <p className="text-lg">Telegram</p>
            </button>
            <button className="flex items-center gap-3 bg-slate-100 px-12 py-3 rounded-lg text-black hover:bg-transparent border-2 border-slate-100 hover:text-white">
              <FaGithub className="text-2xl text-blue-500" />
              <p className="text-lg">Github</p>
            </button>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 w-full" data-aos="fade-left">
          <form className="w-full bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label
                className="block text-gray-300 text-left text-sm font-medium mb-2"
                htmlFor="name">
                Your Name *
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                />
                <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-300 text-left text-sm font-medium mb-2"
                htmlFor="email">
                Your Email *
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
                <FaRegEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-300 text-left text-sm font-medium mb-2"
                htmlFor="phone">
                Your Phone
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  type="tel"
                  id="phone"
                  placeholder="+998 99 999-99-99"
                />
                <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="mb-8">
              <label
                className="block text-gray-300 text-left text-sm font-medium mb-2"
                htmlFor="message">
                Your Message *
              </label>
              <div className="relative">
                <textarea
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  id="message"
                  placeholder="Write your message here..."
                  rows="5"
                  required></textarea>
                <FaRegComments className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
