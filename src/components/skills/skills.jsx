import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiElectron,
  SiJavascript,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

function Modal({ isOpen, skill, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg relative"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          ✕
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-4">
            {skill.icon}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {skill.name}
            </h2>
          </div>
          <p className="text-gray-700 text-xs sm:text-sm mb-4">
            {skill.detailedDescription}
          </p>
          <button
            onClick={onClose}
            className="mt-4 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "React",
      icon: <FaReact size={50} className="text-indigo-600 mb-4" />,
      description:
        "Used for building responsive user interfaces with dynamic content. I have developed several React-based web applications.",
      detailedDescription:
        "I have worked with React to create dynamic and interactive user interfaces, focusing on performance optimization using React Hooks, Context API, and React Router for routing.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={50} className="text-green-600 mb-4" />,
      description:
        "Backend JavaScript runtime. I have worked with Node.js to build scalable server-side applications, including APIs and microservices.",
      detailedDescription:
        "With Node.js, I have built RESTful APIs, connected to databases like PostgreSQL, and deployed microservices using Docker for scalable applications.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={50} className="text-yellow-500 mb-4" />,
      description:
        "JavaScript is essential for both frontend and backend development. I've used it to create interactive UIs and implement logic.",
      detailedDescription:
        "I use JavaScript for full-stack development, utilizing libraries and frameworks like React for the frontend and Node.js for backend development.",
    },
    {
      name: "Python",
      icon: <FaPython size={50} className="text-yellow-500 mb-4" />,
      description:
        "Python was used for creating API and connecting to the database with external clouds",
      detailedDescription:
        "I use Python for full-stack development, utilizing libraries and frameworks like Aiogram and Django, to making interactive telegram bot.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={50} className="text-orange-500 mb-4" />,
      description:
        "The backbone of any webpage. I use HTML5 for semantic markup, creating accessible and SEO-friendly web pages.",
      detailedDescription:
        "HTML5 allows me to structure content semantically, ensuring accessibility and improving SEO performance for web applications.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={50} className="text-blue-500 mb-4" />,
      description:
        "For styling and layout design. I use CSS3 and Flexbox/Grid to create fluid, mobile-responsive layouts.",
      detailedDescription:
        "CSS3 is essential for creating responsive layouts and designing attractive, mobile-first UIs using Flexbox and Grid.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} className="text-teal-400 mb-4" />,
      description:
        "Utility-first CSS framework. I leverage Tailwind for fast prototyping and developing scalable UI components.",
      detailedDescription:
        "Tailwind CSS allows me to quickly design responsive UIs without writing custom CSS, focusing on reusable utility classes for fast prototyping.",
    },
    {
      name: "Git",
      icon: <FaGitAlt size={50} className="text-red-600 mb-4" />,
      description:
        "Version control system for managing project code. I use Git for collaborating with teams and maintaining project integrity.",
      detailedDescription:
        "I use Git for managing project versions, branching, and collaboration with teams through GitHub for efficient project management.",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={50} className="text-black mb-4" />,
      description:
        "For code hosting and collaboration. GitHub enables version control, pull requests, and efficient project management.",
      detailedDescription:
        "GitHub is crucial for hosting my code repositories, collaborating on open-source projects, and using CI/CD pipelines for seamless development.",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={50} className="text-green-700 mb-4" />,
      description:
        "Advanced relational database. I use PostgreSQL for data storage and management in scalable applications.",
      detailedDescription:
        "PostgreSQL is ideal for handling large-scale applications with complex queries, offering advanced features like JSON support and data integrity.",
    },
    {
      name: "Electron",
      icon: <SiElectron size={50} className="text-gray-800 mb-4" />,
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
    <div className="py-10 bg-slate-100">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12 text-center bg-white py-3">
        My Skills
      </h2>
      <div className="container mx-auto px-4 sm:px-6 md:px-40 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                {skill.icon}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>

              <button
                onClick={() => handleOpenModal(skill)}
                className="text-indigo-800 font-semibold border-2 border-indigo-800 rounded-lg px-2 py-1 text-sm">
                More
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        skill={selectedSkill}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default SkillsSection;
