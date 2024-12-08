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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 md:px-40 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-2 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="aspect-[16/9]">
                  <img
                    src={achievement.images[0]}
                    alt={achievement.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm font-medium text-gray-900">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                    {achievement.title}
                  </h3>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full self-start">
                    {achievement.date}
                  </span>
                </div>

                <button
                  onClick={() => handleReadMore(achievement)}
                  className="relative w-full inline-flex items-center justify-center px-6 py-3 bg-white text-sm font-medium text-indigo-600 rounded-xl border-2 border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300 group/btn">
                  <span className="relative flex items-center gap-2">
                    View Details
                    <IoArrowForward className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </span>
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
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[10000] max-h-[90vh]">
              <div className="relative flex flex-col max-h-[90vh]">
                <div className="relative aspect-video sm:aspect-[16/9] bg-gray-100">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedAchievement.images[currentImageIndex]}
                    alt={`${selectedAchievement.title} Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover object-top"
                  />

                  {selectedAchievement.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        disabled={currentImageIndex === 0}
                        className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full ${
                          currentImageIndex === 0
                            ? "bg-gray-200/80 cursor-not-allowed"
                            : "bg-white/90 hover:bg-white shadow-lg hover:shadow-xl"
                        } transition-all duration-300 z-10`}>
                        <IoArrowBack className={`w-4 h-4 sm:w-5 sm:h-5 ${currentImageIndex === 0 ? "text-gray-400" : "text-gray-700"}`} />
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={currentImageIndex === selectedAchievement.images.length - 1}
                        className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full ${
                          currentImageIndex === selectedAchievement.images.length - 1
                            ? "bg-gray-200/80 cursor-not-allowed"
                            : "bg-white/90 hover:bg-white shadow-lg hover:shadow-xl"
                        } transition-all duration-300 z-10`}>
                        <IoArrowForward className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          currentImageIndex === selectedAchievement.images.length - 1 ? "text-gray-400" : "text-gray-700"
                        }`} />
                      </button>
                    </>
                  )}

                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10">
                    <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                <div className="p-4 sm:p-6 overflow-y-auto">
                  <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {selectedAchievement.title}
                      </h3>
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full self-start sm:self-center whitespace-nowrap">
                        {selectedAchievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {selectedAchievement.description}
                    </p>

                    {selectedAchievement.images.length > 1 && (
                      <div className="flex justify-center gap-1.5 sm:gap-2">
                        {selectedAchievement.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? "w-6 sm:w-8 bg-indigo-600"
                                : "w-1 sm:w-1.5 bg-gray-200 hover:bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AchievementsSection;
