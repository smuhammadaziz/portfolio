import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaAws,
  FaPython,
  FaJs,
  FaCode,
  FaBolt,
  FaWind,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaTools,
} from "react-icons/fa";

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const skills = [
    {
      name: "React",
      category: "Frontend",
      icon: <FaReact className="text-[#61DAFB]" />,
      description: "Building interactive UIs with modern hooks and state management.",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <FaNodeJs className="text-[#339933]" />,
      description: "Scalable server-side architecture and RESTful APIs.",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <FaJs className="text-[#F7DF1E]" />,
      description: "Deep understanding of ES6+, async/await, and closures.",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: <FaCode className="text-[#3178C6]" />,
      description: "Type-safe development for robust enterprise applications.",
    },
    {
      name: "Electron",
      category: "Frontend",
      icon: <FaBolt className="text-[#47848F]" />,
      description: "Cross-platform desktop application development.",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <FaWind className="text-[#38B2AC]" />,
      description: "Rapid UI development with utility-first principles.",
    },
    {
      name: "Python",
      category: "Backend",
      icon: <FaPython className="text-[#3776AB]" />,
      description: "Backend logic, automation scripting, and data processing.",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      description: "Semantic markup for accessible and SEO-friendly structures.",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      description: "Advanced animations, layouts, and responsive design.",
    },
    {
      name: "Git",
      category: "Tools",
      icon: <FaGitAlt className="text-[#F05032]" />,
      description: "Version control and collaborative workflow management.",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: <FaGithub className="text-gray-900" />,
      description: "CI/CD pipelines, code review, and project management.",
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      icon: <FaDatabase className="text-[#336791]" />,
      description: "Complex queries, data modeling, and performance tuning.",
    },
    {
      name: "AWS",
      category: "Tools",
      icon: <FaAws className="text-[#FF9900]" />,
      description: "Cloud infrastructure, deployment, and serverless computing.",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-100/50 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            A curated stack of technologies I use to build robust, scalable products.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:scale-105 border border-slate-200"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors text-3xl">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-full text-slate-500">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-indigo-500/0 group-hover:ring-indigo-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
