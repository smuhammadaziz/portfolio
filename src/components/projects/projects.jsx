import React, { useState } from "react";
import project from "../../assets/project.jpg";

function Modal({ isOpen, projectDetails, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-lg"
        onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {projectDetails.title}
        </h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src={projectDetails.image}
            alt={projectDetails.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 text-sm mb-4">
            {projectDetails.description}
          </p>
          <p className="text-gray-500 text-sm">
            Finished: {projectDetails.finishedDate}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          Close
        </button>
      </div>
    </div>
  );
}

function ProjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-commerce Web Platform",
      image: project,
      description:
        "Developed a fully functional e-commerce platform, including product management, payment integration, and user authentication using React and Node.js.",
      finishedDate: "2023-12-01",
      detailedDescription:
        "Created an e-commerce website with custom product management, shopping cart, and integrated payment gateways like Stripe, optimized for mobile and desktop.",
    },
    {
      title: "Employee Management System",
      image: project,
      description:
        "Built a robust employee management system to streamline HR processes including attendance tracking, payroll, and performance reviews using React and PostgreSQL.",
      finishedDate: "2024-01-15",
      detailedDescription:
        "Developed an employee management system to help businesses manage employee data, automate payroll calculations, and generate performance reports, using PostgreSQL for data storage.",
    },
    {
      title: "Inventory Management System",
      image: project,
      description:
        "Designed an inventory management system with real-time updates, barcode scanning, and reporting functionalities. Utilized Electron for cross-platform desktop app development.",
      finishedDate: "2024-02-28",
      detailedDescription:
        "Built a comprehensive inventory system that integrates barcode scanning and automatic stock level updates, improving supply chain management for small businesses.",
    },
    {
      title: "Personal Finance Management App",
      image: project,
      description:
        "Developed a mobile app that helps users track their expenses, categorize them, and set budgets. Integrated with external APIs for real-time exchange rates.",
      finishedDate: "2024-03-15",
      detailedDescription:
        "Built an intuitive mobile app that allows users to track daily expenses, categorize spending, and set financial goals, using React Native for cross-platform support.",
    },
    {
      title: "Customer Support Ticketing System",
      image: project,
      description:
        "Created a ticketing system for customer support, including real-time notifications, priority tagging, and customer feedback collection.",
      finishedDate: "2024-04-01",
      detailedDescription:
        "Developed a ticketing system to streamline customer support, with features such as real-time status updates, priority handling, and user feedback collection using Node.js and Express.",
    },
    {
      title: "Online Learning Platform",
      image: project,
      description:
        "Built an online learning platform with user authentication, course management, and a grading system using React and MongoDB for data storage.",
      finishedDate: "2024-05-01",
      detailedDescription:
        "Created an online platform for students and instructors to interact, offering video lessons, quizzes, and certificate generation. Integrated MongoDB for flexible data storage.",
    },
    {
      title: "Real-Time Chat Application",
      image: project,
      description:
        "Developed a real-time chat application with multiple chat rooms, private messaging, and notifications using WebSockets and Node.js.",
      finishedDate: "2024-06-01",
      detailedDescription:
        "Built a real-time chat app that supports multiple rooms, private chats, and notifications. Used WebSockets for low-latency communication, enabling seamless real-time interactions.",
    },
    {
      title: "Task Management Tool",
      image: project,
      description:
        "Designed a task management tool for teams to track project progress, assign tasks, and manage deadlines. Integrated with GitHub for version control tracking.",
      finishedDate: "2024-07-01",
      detailedDescription:
        "Developed a task management tool that integrates with GitHub to track commit history alongside project progress, enabling developers to stay organized and aligned with deadlines.",
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
    <div className="py-20 bg-slate-100">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12 text-center bg-white py-3">
        My Projects
      </h2>
      <div className="container mx-auto px-6 md:px-40 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 my-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <p className="text-gray-500 text-sm">
                Finished on: {project.finishedDate}
              </p>
              <button
                onClick={() => handleOpenModal(project)}
                className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <Modal
        isOpen={isModalOpen}
        projectDetails={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ProjectSection;
