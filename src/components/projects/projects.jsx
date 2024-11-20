import React, { useState } from "react";
import project from "../../assets/project.jpg";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";

function Modal({ isOpen, projectDetails, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-2xl"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none">
          ✕
        </button>
        <div className="flex flex-col items-center mb-6">
          <img
            src={projectDetails.image}
            alt={projectDetails.title}
            className="w-full h-auto max-h-96 object-contain rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {projectDetails.title}
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            {projectDetails.detailedDescription}
          </p>
          <p className="text-gray-500 text-sm">
            Finished: {projectDetails.finishedDate}
          </p>
          {projectDetails.link && (
            <a
              href={projectDetails.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline">
              Visit Project
            </a>
          )}
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
      title: "KSB-ERP ECOSYSTEM",
      image: project6,
      description:
        "I am currently working on this desktop app and this project is about ERP ECOSYSTEM, which helps people to managing enterprise.",
      finishedDate: "In process...",
      detailedDescription:
        "I am currently working on this project and this project is about ERP ECOSYSTEM, which helps people to managing enterprise.",
      link: null,
    },
    {
      title: "Educore Online Learning Platform",
      image: project,
      description: "Build",
      finishedDate: "15 August 2024",
      detailedDescription:
        "Developed Online Learning Platform, which makes students able to learn IELTS, SAT, IGCSE and A-LEVEL courses with well-qualified teachers. Making fully-functional CRM system.",
      link: "https://edu-front-lovat.vercel.app/",
    },
    {
      title: "Osonku.uz",
      image: project4,
      description:
        "Designed an inventory management system with real-time updates, barcode scanning, and reporting functionalities. Utilized Electron for cross-platform desktop app development.",
      finishedDate: "In process...",
      detailedDescription:
        "It is the largest Telegram bot in Uzbekistan, where users from all regions can sell or buy their houses.",
      link: "https://t.me/osonkuBot",
    },
    {
      title: "182maktab.uz",
      image: project2,
      description:
        "Developed a mobile app that helps users track their expenses, categorize them, and set budgets. Integrated with external APIs for real-time exchange rates.",
      finishedDate: "10 September 2024",
      detailedDescription:
        "My team and I have created the site of my school, we have given it a beautiful design and a great look using React, TailwindCss and Node.js.",
      link: "http://182maktab.uz/",
    },
    {
      title: "yuniygeniy.uz",
      image: project3,
      description:
        "Created a ticketing system for customer support, including real-time notifications, priority tagging, and customer feedback collection.",
      finishedDate: "2024-04-01",
      detailedDescription:
        "This site is mainly a kindergarten introduction site, where all the information about the kindergarten is located",
      link: "http://yuniygeniy.uz/",
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
