import React from "react";
import { FaBriefcase, FaCalendarAlt, FaTasks } from "react-icons/fa";

function ExperienceSection() {
  const experiences = [
    {
      title: "CTO & Middle Frontend Developer",
      company: "Startup Online Building Materials Marketplace",
      startDate: "2023",
      endDate: "2024",
      responsibilities: [
        "Led the frontend development team to build scalable web applications.",
        "Collaborated with cross-functional teams to ensure timely delivery of project milestones.",
        "Optimized code for performance and user experience.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Kindergarten CRM System",
      startDate: "2022",
      endDate: "2023",
      responsibilities: [
        "Developed user-friendly interfaces for the CRM platform.",
        "Integrated backend APIs with dynamic UI components.",
        "Worked closely with stakeholders to refine requirements and deliver solutions.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Learning Center CRM System",
      startDate: "2021",
      endDate: "2022",
      responsibilities: [
        "Designed responsive layouts with optimized workflows for educators.",
        "Implemented feature-rich dashboards to streamline operations.",
        "Ensured seamless user experiences by resolving critical bugs.",
      ],
    },
    {
      title: "Software Developer (Intern)",
      company: "Najot Ta'lim IT Learning Center",
      startDate: "2020",
      endDate: "2020",
      responsibilities: [
        "Participated in a full-stack software engineering bootcamp.",
        "Contributed to team projects and enhanced coding skills.",
        "Gained hands-on experience in both frontend and backend development.",
      ],
    },
    {
      title: "IT Olympiad Competitor",
      company: "Presidential School, Tashkent",
      startDate: "2018",
      endDate: "2020",
      responsibilities: [
        "Competed in school-level IT Olympiads, achieving significant results.",
        "Enhanced problem-solving skills through challenging tasks.",
        "Laid the foundation for a successful software development career.",
      ],
    },
  ];

  return (
    <div className="myexperience py-16 bg-gradient-to-b from-slate-100 to-slate-300">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12 text-center bg-white py-3">
        My Work Experience
      </h2>
      <div className="container mx-auto px-4 md:px-12">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 mb-8 hover:shadow-2xl transition-shadow duration-300">
            {/* Icon */}
            <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <FaBriefcase className="text-2xl" />
            </div>
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {experience.title}
              </h3>
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
    </div>
  );
}

export default ExperienceSection;
