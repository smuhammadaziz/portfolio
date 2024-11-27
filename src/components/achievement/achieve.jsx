import React, { useState } from "react";
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
    <div className="py-16 bg-gradient-to-b from-slate-100 to-slate-300">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12 text-center bg-white py-3">
        My Achievements
      </h2>
      <div className="container mx-auto px-6 md:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
            <img
              src={achievement.images[0]}
              alt={achievement.title}
              className="w-full h-72 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-4">{achievement.date}</p>
              </div>
              <button
                onClick={() => handleReadMore(achievement)}
                className="mt-auto py-2 px-4 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg mx-4 md:mx-auto p-6 relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
              ✕
            </button>
            <div className="relative mb-6">
              {selectedAchievement.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full shadow hover:bg-gray-600 z-10">
                  ◀
                </button>
              )}
              <img
                src={selectedAchievement.images[currentImageIndex]}
                alt={`${selectedAchievement.title} Image ${
                  currentImageIndex + 1
                }`}
                className="w-full h-auto max-h-80 object-contain rounded-lg"
              />
              {selectedAchievement.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full shadow hover:bg-gray-600 z-10">
                  ▶
                </button>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedAchievement.title}
            </h3>
            <p className="text-gray-600">{selectedAchievement.description}</p>
            <button
              onClick={closeModal}
              className="mt-6 py-2 px-4 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AchievementsSection;
