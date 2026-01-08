import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTelegram, FaPhoneAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Let's start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              conversation.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Telegram Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-slate-800 transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaTelegram size={28} />
            </div>
            <h3 className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-2">My Telegram</h3>
            <a
              href="https://t.me/rmuhammadaziz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors"
            >
              @rmuhammadaziz
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-slate-800 transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt size={28} />
            </div>
            <h3 className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-2">Call Me</h3>
            <a
              href="tel:+998910671080"
              className="text-xl md:text-2xl font-bold text-white hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              +998 91 067-10-80
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-slate-800 transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope size={28} />
            </div>
            <h3 className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-2">Email Me</h3>
            <a
              href="mailto:devmuhammadaziz@gmail.com"
              className="text-lg md:text-2xl font-bold text-white hover:text-indigo-400 transition-colors truncate max-w-full px-2"
              title="devmuhammadaziz@gmail.com"
            >
              devmuhammadaziz@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
