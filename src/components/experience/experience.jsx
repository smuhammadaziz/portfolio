import React from "react";
import { FaBriefcase, FaCalendarAlt, FaTasks } from "react-icons/fa";

function ExperienceSection() {
  const experiences = [
    {
      year: "2024",
      details: [
        {
          title: "Full-Stack Developer",
          company: "KSB-ERP ECOSYSTEM",
          startDate: "11/2024",
          endDate: "Present",
          responsibilities: [
            "A desktop application is being developed using Electron.js, which will contain many ERP system functions.",
            "Developed a robust ERP system consolidating data from three 1C ecosystems.",
            "Enabled offline functionality with local database synchronization to a central system.",
            "Used React, Electron JS, and Tailwind CSS for a seamless and efficient user interface.",
            "Implemented real-time updates and streamlined workflows for enhanced productivity.",
            "Developed a robust ERP system consolidating data from three 1C ecosystems.",
          ],
        },
        {
          title: "Front-End Developer and CTO",
          company: "Educore Online Learning Platform",
          startDate: "03/2024",
          endDate: "08/2024",
          responsibilities: [
            "Collaborated closely with designers and other developers to complete tasks efficiently.",
            "Built responsive web pages optimized for different devices.",
            "Implemented best practices for SEO optimization of website pages and contents.",
            "Developed a main website including 3 types of dashboards functioning as a CRM system.",
            "Assisted in debugging application issues related to back-end systems.",
            "Implemented RESTful web services and deployed the application on the Plesk Server.",
          ],
        },
        {
          title: "Python Full Stack Developer",
          company: "Start Up Project",
          startDate: "01/2023",
          endDate: "08/2024",
          responsibilities: [
            "Developed a Telegram bot using Python and Aiogram framework, integrated with PostgreSQL.",
            "Independently learned Python and Aiogram, starting from scratch.",
            "Implemented clean code principles and continuously optimized bot functionalities.",
          ],
        },
      ],
    },
    {
      year: "2023",
      details: [
        {
          title: "Full Stack Web Developer and Team Lead",
          company: "Startup Project",
          startDate: "02/2023",
          endDate: "02/2024",
          responsibilities: [
            "Built the website for the 182nd school in Tashkent and handed it over successfully.",
            "Managed both back-end and front-end development processes.",
            "Utilized React for dynamic and interactive web applications.",
            "Built and integrated RESTful APIs for internal and external use.",
            "Deployed projects on the Plesk server.",
          ],
        },
      ],
    },
    {
      year: "2022",
      details: [
        {
          title: "Front-End Developer",
          company: "Start Up Company",
          startDate: "09/2022",
          endDate: "12/2022",
          responsibilities: [
            "Created custom responsive designs optimized for various devices.",
            "Integrated front-end code with server-side logic for dynamic pages.",
            "Collaborated with back-end developers to integrate UI elements.",
          ],
        },
      ],
    },
    {
      year: "2021",
      details: [
        {
          title: "FrontEnd Developer",
          company: "Dynamic Soft",
          startDate: "11/2021",
          endDate: "02/2022",
          responsibilities: [
            "Developed and maintained user-friendly webpages using React (Next.js).",
            "Collaborated with teammates to improve development processes.",
            "Integrated user interface elements with back-end logic.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="myexperience py-16 bg-slate-100">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12 text-center bg-white py-3">
        My Work Experience
      </h2>
      <div className="container mx-auto px-6 md:px-40">
        {experiences.map((yearlyExperience, index) => (
          <div key={index} className="mb-12">
            {yearlyExperience.details.map((experience, expIndex) => (
              <div
                key={expIndex}
                className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 mb-8 hover:shadow-2xl transition-shadow duration-300">
                {/* Icon */}
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <FaBriefcase className="text-2xl" />
                </div>
                {/* Content */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {experience.title}
                  </h4>
                  <p className="text-lg font-medium text-gray-600">
                    {experience.company}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                    {experience.responsibilities.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <FaTasks className="text-indigo-500 mr-2 mt-1" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
