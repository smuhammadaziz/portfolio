import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaChevronDown, FaLaptopCode } from "react-icons/fa";

function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Numeo AI",
      period: "05/2025 - Present",
      description: "Leading the development of AI-powered logistics systems.",
      tech: ["React", "Node.js", "AI", "PostgreSQL"],
      details: [
        "Led end-to-end development of an AI-powered logistics dispatching system.",
        "Managed stakeholder communications and requirements gathering.",
        "Implemented real-time monitoring and performance optimization strategies.",
      ]
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "KSB-ERP ECOSYSTEM",
      period: "11/2024 - 05/2025",
      description: "Building comprehensive ERP solutions for enterprise management.",
      tech: ["Electron", "React", "Node.js", "1C"],
      details: [
        "Developed a robust ERP system consolidating data from three 1C ecosystems.",
        "Built a desktop application using React and Electron.js for offline capabilities.",
        "Streamlined workflows with real-time updates and synchronization.",
      ]
    },
    {
      id: 3,
      role: "CTO & Frontend Developer",
      company: "Educore Learning",
      period: "03/2024 - 08/2024",
      description: "Technical leadership for an online learning platform.",
      tech: ["React", "SEO", "Plesk", "CRM"],
      details: [
        "Developed a main website with 3 distinct dashboards (Student, Teacher, Admin).",
        "Implemented SEO best practices and responsive design systems.",
        "Deployed applications on Plesk Server and managed PostgreSQL databases.",
      ]
    },
    {
      id: 4,
      role: "Python Full Stack Developer",
      company: "Start Up Project",
      period: "01/2023 - 08/2024",
      description: "Feature-rich Telegram bot development.",
      tech: ["Python", "Aiogram", "PostgreSQL"],
      details: [
        "Developed a complex Telegram bot using Python and Aiogram.",
        "Integrated PostgreSQL for reliable data persistence.",
        "Optimized bot performance and user interaction flows.",
      ]
    },
    {
      id: 5,
      role: "Lead Web Developer",
      company: "School 182",
      period: "02/2023 - 02/2024",
      description: "Digital transformation for an educational institution.",
      tech: ["React", "API", "Full Stack"],
      details: [
        "Built and launched the official website for the 182nd school.",
        "Managed the full SDLC from requirements to deployment.",
        "Integrated RESTful APIs for dynamic content management.",
      ]
    },
    {
      id: 6,
      role: "Frontend Developer",
      company: "Start Up Company",
      period: "09/2022 - 12/2022",
      description: "UI/UX implementation for startup MVP.",
      tech: ["Frontend", "UI/UX", "Responsive Design"],
      details: [
        "Created custom responsive designs optimized for mobile devices.",
        "Collaborated with backend teams to integrate seamless APIs.",
      ]
    },
    {
      id: 7,
      role: "Frontend Developer",
      company: "Dynamic Soft",
      period: "11/2021 - 02/2022",
      description: "Early career development in web technologies.",
      tech: ["Next.js", "React", "Teamwork"],
      details: [
        "Developed user-friendly webpages using Next.js.",
        "Participated in agile development processes and team code reviews.",
      ]
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My career path from early development to technical leadership.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 left-[-9px] md:left-[-9px] w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow-sm ring-1 ring-slate-200 group-hover:ring-indigo-300 transition-all" />

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between pointer-events-none mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-indigo-600 font-medium text-sm flex items-center gap-2 mt-1">
                      <FaBriefcase size={14} /> {exp.company}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 text-slate-500 font-medium text-sm bg-slate-50 px-3 py-1 rounded-full inline-flex items-center gap-2 whitespace-nowrap">
                    <FaCalendarAlt size={12} className="shrink-0" /> {exp.period}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 pointer-events-none">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-semibold uppercase tracking-wide border border-slate-100">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                <div className="border-t border-slate-100 pt-4">
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors focus:outline-none"
                  >
                    {expandedId === exp.id ? "Hide Details" : "View Responsibilities"}
                    <FaChevronDown className={`transform transition-transform ${expandedId === exp.id ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="pt-4 space-y-2">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;
