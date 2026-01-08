import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { IoMdClose, IoMdExpand } from "react-icons/io";

import project1 from "../../assets/project6.jpg";
import project2 from "../../assets/project4.jpg";
import project3 from "../../assets/project.jpg";
import project4 from "../../assets/project2.jpg";
import project5 from "../../assets/project3.jpg";
import project7 from "../../assets/project7.png";

// Minimalist Image Viewer
const ImageViewer = ({ isOpen, image, title, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2001] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          onClick={onClose}
        >
          <IoMdClose size={32} />
        </button>
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          src={image}
          alt={title}
          className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-6 text-white/70 font-medium tracking-wide">
          {title}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ProjectDetailsModal
const ProjectDetailsModal = ({ isOpen, project, onClose, onImageClick }) => {
  if (!isOpen || !project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/50 text-white transition-all"
          >
            <IoMdClose size={24} />
          </button>

          {/* Hero Image */}
          <div
            className="relative h-64 md:h-80 w-full group cursor-zoom-in overflow-hidden"
            onClick={() => onImageClick && onImageClick(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <IoMdExpand /> Click to view full image
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 md:left-10 text-white pointer-events-none">
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-2">{project.title}</h3>
              <div className="flex gap-2">
                {project.technologies.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Description */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Overview</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/30">
                      Visit Live Site <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                      View Source <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewImage, setViewImage] = useState(null);

  const projects = [
    {
      title: "Numeo AI",
      description: "A next-generation logistics dispatching system built with AI to automate route planning, driver assignments, and delivery optimization — reducing costs and improving operational efficiency across fleets.",
      image: project7,
      technologies: ["React", "Node.js", "Typescript", "PostgreSQL", "MongoDB", "MUI", "Rush.js"],
      features: [
        "AI-Powered Dispatching – Automatically assigns drivers and optimizes routes for maximum efficiency.",
        "Real-Time Fleet Tracking – Monitor vehicle locations, delivery progress, and performance in real time.",
        "Smart Load Optimization – Uses AI to balance loads, minimize fuel costs, and improve delivery speed.",
      ],
      github: "",
      demo: "https://numeo.ai",
    },
    {
      title: "ERP Ecosystem",
      description: "A comprehensive Enterprise Resource Planning system built with React and Electron.js, featuring inventory management, employee tracking, and financial reporting.",
      image: project1,
      technologies: ["React", "Electron.js", "Node.js", "1C", "Typescript", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Consolidated data from three distinct 1C ecosystems into a unified dashboard.",
        "Engineered offline capabilities with efficient local-to-cloud synchronization.",
        "Real-time inventory updates and complex reporting tools.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Educore Platform",
      description: "Online Learning Platform offering courses for IELTS, SAT, and A-LEVEL students with comprehensive dashboarding.",
      image: project3,
      technologies: ["React", "Typescript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      features: [
        "Three distinct dashboard views (Student, Teacher, Admin).",
        "Integrated CRM system for student tracking and course management.",
        "Secure payment gateways and automated enrollment systems.",
      ],
      github: "https://github.com/smuhammadaziz/educore-main",
      demo: "https://edu-front-lovat.vercel.app/",
    },
    {
      title: "OsonBot Platform",
      description: "A versatile Telegram bot platform enabling automated responses, custom commands, and integration with external services.",
      image: project2,
      technologies: ["Python", "Aiogram", "PostgreSQL", "AWS", "DevOps"],
      features: [
        "Robust command handling engine with custom middleware.",
        "Scalable architecture hosted on AWS with automated deployment.",
        "Integration with external APIs for dynamic responses.",
      ],
      github: "https://github.com/smuhammadaziz/osonbot",
      demo: "https://t.me/osonkuBot",
    },
    {
      title: "School 182 Portal",
      description: "Official digital presence for the 182nd School, featuring dynamic content management and student portals.",
      image: project4,
      technologies: ["Next.js", "Typescript", "Javascript", "CSS", "DevOps"],
      features: [
        "Full-stack development including custom CMS for news and updates.",
        "SEO-optimized architecture for high visibility.",
        "Interactive schedule and event management system.",
      ],
      github: "https://github.com/smuhammadaziz/school182-frontend",
      demo: "https://www.182maktab.uz",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
              Selected Work
            </h2>
            <p className="text-lg text-slate-500">
              A collection of projects where design meets engineering. From AI-driven logistics to enterprise ERP systems.
            </p>
          </motion.div>

          <motion.a
            href="https://github.com/smuhammadaziz"
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
          >
            View Github Profile <FaArrowRight />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />

                <button
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white text-slate-900"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewImage(project);
                  }}
                >
                  <IoMdExpand size={20} />
                </button>

                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Case Study <FaArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onImageClick={(p) => setViewImage(p)}
      />

      <ImageViewer
        isOpen={!!viewImage}
        image={viewImage?.image}
        title={viewImage?.title}
        onClose={() => setViewImage(null)}
      />
    </section>
  );
}

export default ProjectsSection;
