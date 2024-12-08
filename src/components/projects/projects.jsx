import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose, IoMdExpand } from "react-icons/io";

import project1 from "../../assets/project6.jpg";
import project2 from "../../assets/project4.jpg";

const ImageViewer = ({ isOpen, image, title, description, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg"
        onClick={onClose}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-50"
          aria-label="Close fullscreen">
          <IoMdClose className="w-6 h-6" />
        </button>

        <div className="h-full w-full flex flex-col justify-center items-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-h-[80vh] w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={image}
              alt={title}
              className="object-contain max-h-full rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="mt-4 max-w-2xl text-center">
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectModal = ({ isOpen, project, onClose }) => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[900] overflow-y-auto bg-black/60 backdrop-blur-sm"
          onClick={handleBackdropClick}>
          <div
            className="min-h-screen w-full py-8 px-4 flex items-center justify-center"
            onClick={handleBackdropClick}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 mx-auto"
              onClick={(e) => e.stopPropagation()}>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white rounded-2xl opacity-90 z-0" />

              <div className="relative z-10">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 touch-manipulation z-50"
                  aria-label="Close modal">
                  <IoMdClose className="w-6 h-6 text-gray-500" />
                </button>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Project Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={() => setIsImageViewerOpen(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                        <IoMdExpand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-4">
                      {project.title}
                    </h2>

                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      {/* Technologies Used */}
                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 sm:px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs sm:text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                          Key Features
                        </h3>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>View Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                            <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <ImageViewer
        isOpen={isImageViewerOpen}
        image={project?.image}
        title={project?.title}
        description={project?.description}
        onClose={() => setIsImageViewerOpen(false)}
      />
    </>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={onClick}
              className="text-white py-2 rounded-lg px-3 bg-indigo-600 font-medium text-sm hover:scale-105 ease transition-opacity duration-300 transform transition-transform">
              See More
            </button>
            <div className="flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors">
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ERP System",
      description:
        "A comprehensive Enterprise Resource Planning system built with React and Electron.js, featuring inventory management, employee tracking, and financial reporting.",
      image: project1,
      technologies: [
        "React",
        "Electron",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Redux",
      ],
      features: [
        "Real-time inventory tracking and management",
        "Employee attendance and performance monitoring",
        "Financial reporting and analytics dashboard",
        "Multi-user access with role-based permissions",
        "Automated backup and data recovery",
      ],
      github: "https://github.com/yourusername/erp-system",
      demo: "https://erp-system-demo.com",
    },
    {
      title: "Telegram Bot Platform",
      description:
        "A versatile Telegram bot platform built with Python, enabling automated responses, custom commands, and integration with external services.",
      image: project2,
      technologies: ["Python", "Aiogram", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Natural language processing for user queries",
        "Custom command handling and automation",
        "Integration with external APIs and services",
        "User session management and data persistence",
        "Scalable architecture with Docker deployment",
      ],
      github: "https://github.com/yourusername/telegram-bot",
      demo: "https://t.me/your_bot_username",
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_30%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />

      <div className="container mx-auto px-6 md:px-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-4">
            Featured Projects
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => handleOpenModal(project)}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default ProjectsSection;
