import React from "react";
import { motion } from "framer-motion";

function SkillsSection() {
  const categories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Zustand", "TailwindCSS", "MaterialUI", "Webpack", "WebSocket", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "SQLite3", "RESTful APIs", "Microservices", "Kafka", "Docker", "WebSocket", "High Performance System Design", "Email Automation Integration"]
    },
    {
      title: "Desktop Apps & Tools",
      skills: ["Electron.js", "Chrome Extensions", "LoadOps AI"]
    },
    {
      title: "Analytics & Business Intelligence",
      skills: ["Google Analytics", "PostHog", "RudderStack", "Amplitude", "Data-driven Decision Making"]
    },
    {
      title: "DevOps & Deployment",
      skills: ["Firebase", "Google Cloud Console", "Github Actions", "Plesk Server", "Deployment & Post-release Monitoring"]
    },
    {
      title: "Collaboration & Workflow",
      skills: ["Monorepo (Rush)", "Agile/Scrum", "Stakeholder Collaboration", "End-to-End Project Ownership"]
    },
    {
      title: "Testing & Quality",
      skills: ["Unit Testing", "Integration Testing", "Clean Code Principles", "Code Optimization & Performance Tuning", "SOLID"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-100/50 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and toolset.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-indigo-500 block"></span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-200/60 hover:bg-indigo-50 hover:text-indigo-600 hhover:border-indigo-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
