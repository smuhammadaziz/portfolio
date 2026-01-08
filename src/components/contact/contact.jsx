import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Let's work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                together.
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-md">
              Have a project in mind or just want to chat? I'm always open to discussing new ideas, opportunities, and finding ways to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Mail Me</h4>
                  <a href="mailto:devmuhammadaziz@gmail.com" className="text-xl font-medium text-white hover:text-indigo-400 transition-colors">
                    devmuhammadaziz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Call Me</h4>
                  <a href="tel:+998910671080" className="text-xl font-medium text-white hover:text-indigo-400 transition-colors">
                    +998 91 067-10-80
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-xl font-medium text-white">
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <FaPaperPlane className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
