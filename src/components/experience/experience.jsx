import React, { useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaTasks, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState(null);

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

  const handleExpand = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <div className="py-8 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-40">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-8 sm:mb-12 text-center"
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((yearlyExperience, yearIndex) => (
            <div key={yearIndex}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
                className="text-xl sm:text-2xl font-bold text-slate-700 mb-3 sm:mb-4 pl-4 sm:pl-0"
              >
                {yearlyExperience.year}
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                {yearlyExperience.details.map((experience, expIndex) => {
                  const isExpanded = expandedExperience === `${yearIndex}-${expIndex}`;
                  return (
                    <motion.div
                      key={expIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: expIndex * 0.1 }}
                      className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() => handleExpand(`${yearIndex}-${expIndex}`)}
                        className="w-full text-left p-4 sm:p-6 focus:outline-none"
                      >
                        <div className="flex items-start justify-between gap-3 sm:gap-4">
                          <div className="flex gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                              <FaBriefcase className="text-base sm:text-xl" />
                            </div>
                            <div>
                              <h3 className="text-base sm:text-xl font-bold text-slate-800 mb-0.5 sm:mb-1 pr-6">
                                {experience.title}
                              </h3>
                              <p className="text-sm sm:text-base text-slate-600 font-medium">
                                {experience.company}
                              </p>
                              <div className="flex items-center text-slate-500 text-xs sm:text-sm mt-1 sm:mt-2">
                                <FaCalendarAlt className="mr-1.5 sm:mr-2" />
                                <span>
                                  {experience.startDate} - {experience.endDate}
                                </span>
                              </div>
                            </div>
                          </div>
                          <FaChevronDown
                            className={`text-slate-400 transition-transform duration-300 text-sm sm:text-base ${
                              isExpanded ? "transform rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-100 pt-3 sm:pt-4">
                              <ul className="space-y-2 sm:space-y-3">
                                {experience.responsibilities.map((task, taskIndex) => (
                                  <motion.li
                                    key={taskIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: taskIndex * 0.1 }}
                                    className="flex items-start text-sm sm:text-base text-slate-600"
                                  >
                                    <FaTasks className="text-slate-400 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-xs sm:text-sm" />
                                    <span>{task}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
