import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import img from "../../assets/a1.jpg";
import img1 from "../../assets/a2.jpg";
import img2 from "../../assets/a3.jpg";
import img3 from "../../assets/a4.jpg";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";

function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Mohirdev22 Hackaton, 3rd place",
      images: [img],
      description:
        "Achieved 3rd place related to education sphere, demonstrating one project which connect low-income families and supportive people. My platform able to connect them easily and getting help for them.",
      date: "12 December 2022",
    },
    {
      id: 2,
      title: "Full-Stack Development Course Certification",
      images: [img2, img3],
      description:
        "Finished Full-Stack Development Course and gained much more experience within 1 year.",
      date: "2 February 2022",
    },
    {
      id: 3,
      title: "IT-School Hackaton, 2nd place",
      images: [img1],
      description:
        "Created one CRM ecosystem which helps people to communicate with their colleagues with online mode and sharing ideas with them.",
      date: "1 April 2023",
    },
    {
      id: 4,
      title: "One Million Uzbek Coders",
      images: [s1, s2, s3, s4, s5],
      description:
        "Compeleted FullStack Web Development, Frontend Development and Data Analysis Track Courses and got certificated from Udemy.",
      date: "10 October 2020",
    },
  ];

  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleReadMore = (achievement) => {
    setSelectedAchievement(achievement);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  const nextImage = () => {
    if (
      selectedAchievement &&
      currentImageIndex < selectedAchievement.images.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedAchievement && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />

      <div className="container mx-auto px-6 md:px-40 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-16">
          Achievements
        </motion.h2>

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={achievement.images[0]}
                  alt={achievement.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div className="relative p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">{achievement.date}</p>
                <div className="flex-grow" />
                <button
                  onClick={() => handleReadMore(achievement)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-4 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors w-full">
                  View Details
                  <IoArrowForward className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[900] flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={closeModal}>
            <div className="min-h-screen w-full py-8 px-4 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white rounded-2xl opacity-90 z-0" />

                <div className="relative z-10">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
                    <IoClose className="w-6 h-6" />
                  </button>

                  <div className="relative mb-6 rounded-xl overflow-hidden bg-gray-100">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      src={selectedAchievement.images[currentImageIndex]}
                      alt={`${selectedAchievement.title} Image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full object-contain max-h-[300px] mx-auto"
                    />

                    {selectedAchievement.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          disabled={currentImageIndex === 0}
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                            currentImageIndex === 0
                              ? "bg-gray-300 cursor-not-allowed"
                              : "bg-white/90 hover:bg-white shadow-lg"
                          } transition-all duration-200`}>
                          <IoArrowBack
                            className={`w-6 h-6 ${
                              currentImageIndex === 0
                                ? "text-gray-400"
                                : "text-gray-700"
                            }`}
                          />
                        </button>
                        <button
                          onClick={nextImage}
                          disabled={
                            currentImageIndex ===
                            selectedAchievement.images.length - 1
                          }
                          className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                            currentImageIndex ===
                            selectedAchievement.images.length - 1
                              ? "bg-gray-300 cursor-not-allowed"
                              : "bg-white/90 hover:bg-white shadow-lg"
                          } transition-all duration-200`}>
                          <IoArrowForward
                            className={`w-6 h-6 ${
                              currentImageIndex ===
                              selectedAchievement.images.length - 1
                                ? "text-gray-400"
                                : "text-gray-700"
                            }`}
                          />
                        </button>
                      </>
                    )}

                    {selectedAchievement.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {selectedAchievement.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentImageIndex
                                ? "bg-indigo-600 w-4"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900">
                      {selectedAchievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {selectedAchievement.description}
                    </p>
                    <p className="text-indigo-600 font-medium text-sm">
                      {selectedAchievement.date}
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={closeModal}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                        Close
                        <IoClose className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AchievementsSection;
