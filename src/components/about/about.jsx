import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaServer,
} from "react-icons/fa";

function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Worked", value: "30+" },
    { label: "Happy Clients", value: "10k+" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-slate-900 mb-6 tracking-tight">
            Code is my canvas.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            I don't just write code; I craft digital ecosystems. My mission is to bridge the gap between complex engineering and intuitive user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1: Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-slate-100"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Journey</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                I started my journey exploring the command line, fascinated by how lines of text could control machines. Today, I engineer enterprise-grade solutions.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                From optimizing database queries to fine-tuning micro-interactions, I obsess over every detail. I believe that great software is indistinguishable from magic.
              </p>
            </div>

            {/* Abstract decorative shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-200/50 transition-colors duration-500" />
          </motion.div>

          {/* Card 2: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-slate-900/10"
          >
            <div className="relative z-10">
              {stats.map((stat, i) => (
                <div key={i} className="mb-8 last:mb-0">
                  <div className="text-4xl md:text-5xl font-bold font-display mb-1 text-indigo-400 group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          </motion.div>

          {/* Card 3: What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold mb-4">Full Stack Excellence</h3>
                <p className="text-indigo-100 text-lg">
                  I handle the entire lifecycle. From architectural design to deployment pipelines.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: FaLaptopCode, label: "Frontend" },
                  { icon: FaServer, label: "Backend" },
                  { icon: FaCode, label: "Architecture" },
                  { icon: FaRocket, label: "Performance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <item.icon className="text-indigo-200" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
