import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaAws,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiElectron,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, skill, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[900] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white rounded-2xl opacity-90 z-0" />

          <div className="relative z-10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-white rounded-xl shadow-lg">
                {skill.icon}
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900">
                {skill.name}
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Detailed Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const SkillCard = ({ skill, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center">
          {skill.icon}
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            {skill.name}
          </h3>
          <button
            onClick={onClick}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-sm font-medium rounded-lg transition-opacity duration-300 hover:shadow-lg transform hover:scale-105 transition-transform">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

function SkillsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "React",
      icon: <FaReact size={50} className="text-indigo-600" />,
      description:
        "Used for building responsive user interfaces with dynamic content. I have developed several React-based web applications.",
      detailedDescription:
        "I have worked with React to create dynamic and interactive user interfaces, focusing on performance optimization using React Hooks, Context API, and React Router for routing.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-green-600" />,
      description:
        "Backend JavaScript runtime. I have worked with Node.js to build scalable server-side applications, including APIs and microservices.",
      detailedDescription:
        "With Node.js, I have built RESTful APIs, connected to databases like PostgreSQL, and deployed microservices using Docker for scalable applications.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={50} className="text-yellow-500" />,
      description:
        "JavaScript is essential for both frontend and backend development. I've used it to create interactive UIs and implement logic.",
      detailedDescription:
        "I use JavaScript for full-stack development, utilizing libraries and frameworks like React for the frontend and Node.js for backend development.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={50} className="text-blue-600" />,
      description:
        "TypeScript adds static typing to JavaScript, making it more robust and maintainable.",
      detailedDescription:
        "I use TypeScript to build large-scale applications with better type safety and improved developer experience. It helps catch errors early and makes code more maintainable.",
    },
    {
      name: "Python",
      icon: <FaPython size={50} className="text-blue-500" />,
      description:
        "Python was used for creating API and connecting to the database with external clouds",
      detailedDescription:
        "I use Python for full-stack development, utilizing libraries and frameworks like Aiogram and Django, to making interactive telegram bot.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={50} className="text-orange-500" />,
      description:
        "The backbone of any webpage. I use HTML5 for semantic markup, creating accessible and SEO-friendly web pages.",
      detailedDescription:
        "HTML5 allows me to structure content semantically, ensuring accessibility and improving SEO performance for web applications.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={50} className="text-blue-500" />,
      description:
        "For styling and layout design. I use CSS3 and Flexbox/Grid to create fluid, mobile-responsive layouts.",
      detailedDescription:
        "CSS3 is essential for creating responsive layouts and designing attractive, mobile-first UIs using Flexbox and Grid.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} className="text-teal-400" />,
      description:
        "Utility-first CSS framework. I leverage Tailwind for fast prototyping and developing scalable UI components.",
      detailedDescription:
        "Tailwind CSS allows me to quickly design responsive UIs without writing custom CSS, focusing on reusable utility classes for fast prototyping.",
    },
    {
      name: "Git",
      icon: <FaGitAlt size={50} className="text-red-600" />,
      description:
        "Version control system for managing project code. I use Git for collaborating with teams and maintaining project integrity.",
      detailedDescription:
        "I use Git for managing project versions, branching, and collaboration with teams through GitHub for efficient project management.",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={50} className="text-gray-900" />,
      description:
        "For code hosting and collaboration. GitHub enables version control, pull requests, and efficient project management.",
      detailedDescription:
        "GitHub is crucial for hosting my code repositories, collaborating on open-source projects, and using CI/CD pipelines for seamless development.",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={50} className="text-blue-700" />,
      description:
        "Advanced relational database. I use PostgreSQL for data storage and management in scalable applications.",
      detailedDescription:
        "PostgreSQL is ideal for handling large-scale applications with complex queries, offering advanced features like JSON support and data integrity.",
    },
    {
      name: "AWS",
      icon: <FaAws size={50} className="text-orange-500" />,
      description:
        "Cloud computing platform. I use AWS services for deploying and scaling applications.",
      detailedDescription:
        "I leverage various AWS services like EC2, S3, and Lambda for building scalable cloud infrastructure and deploying applications.",
    },
    {
      name: "Electron",
      icon: <SiElectron size={50} className="text-blue-600" />,
      description:
        "Used for building cross-platform desktop apps with web technologies. I've created several Electron apps.",
      detailedDescription:
        "Electron is great for building cross-platform desktop apps. I've used it to create applications that integrate with web technologies for seamless user experiences.",
    },
  ];

  const handleOpenModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" /> */}

      <div className="container mx-auto px-6 md:px-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-4">
            Skills & Technologies
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              onClick={() => handleOpenModal(skill)}
            />
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        skill={selectedSkill}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default SkillsSection;
