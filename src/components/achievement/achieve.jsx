import React, { useState } from "react";
import img from "../../assets/a1.jpg";
import img1 from "../../assets/a2.jpg";
import img2 from "../../assets/a3.jpg";

function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Mohirdev22 Hackaton, 3rd place",
      image: img,
      description:
        "Achieved 3rd place related to education sphere, demonstrating one project which connect low-income families and supportive people. My platform able to connect them easily and getting help for them.",
      date: "12 December 2022",
    },
    {
      id: 2,
      title: "Full-Stack Development Course Certification",
      image: img2,
      description:
        "Finished Full-Stack Development Course and gained much more experience within 1 year.",
      date: "2 February 2022",
    },
    {
      id: 3,
      title: "IT-School Hackaton, 2nd place",
      image: img1,
      description:
        "Created one CRM ecosystem which helps people to communicate with their colleagues with online mode and sharing ideas with them.",
      date: "1 April 2023",
    },
  ];

  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleReadMore = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
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
              src={achievement.image}
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

      {/* Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg mx-4 md:mx-auto p-6 relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
              ✕
            </button>
            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="w-full h-auto max-h-80 object-contain rounded-lg mb-6"
            />
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
