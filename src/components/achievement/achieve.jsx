import React, { useState } from "react";

import img from "../../assets/a1.jpg";

function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Winner of IT Olympiad",
      image: "", // Replace with your image URL
      description:
        "Achieved first place in the national IT Olympiad, demonstrating excellence in problem-solving and programming.",
    },
    {
      id: 2,
      title: "Top Graduate of Presidential School",
      image: "https://via.placeholder.com/300", // Replace with your image URL
      description:
        "Graduated as the top student from the Presidential School, recognized for academic excellence and leadership qualities.",
    },
    {
      id: 3,
      title: "Full-Stack Developer Certification",
      image: "https://via.placeholder.com/300", // Replace with your image URL
      description:
        "Earned a full-stack developer certification after completing an intensive program at Najot Ta'lim IT Learning Center.",
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
            className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={img}
              alt={achievement.title}
              className="w-full h-72 object-cover position-top"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {achievement.title}
              </h3>
              <h3 className="text-xl text-gray-800 mb-4">20.12.2024</h3>
              <button
                onClick={() => handleReadMore(achievement)}
                className="py-2 px-4 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors">
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
              src={img}
              alt={selectedAchievement.title}
              className="w-full h-72 object-cover rounded-lg mb-6"
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
