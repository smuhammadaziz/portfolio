import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoTrophyOutline, IoSchoolOutline, IoCodeSlashOutline, IoChevronForward, IoClose, IoExpandSharp } from "react-icons/io5";

// Import images
import img from "../../assets/a1.jpg";
import img1 from "../../assets/a2.jpg";
import img2 from "../../assets/a3.jpg";
import s1 from "../../assets/s1.jpg";

// Minimalist Image Viewer
const ImageViewer = ({ isOpen, image, title, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2010] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          onClick={onClose}
        >
          <IoClose size={32} />
        </button>
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          src={image}
          alt={title}
          className="max-h-[90vh] max-w-full rounded-lg shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-6 text-white/70 font-medium tracking-wide">
          {title}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

function AchievementsSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewImage, setViewImage] = useState(null);

  const achievements = [
    {
      id: 1,
      category: "Hackathon",
      title: "Mohirdev22 Hackathon",
      result: "3rd Place",
      date: "Dec 2022",
      description: "Achieved 3rd place related to education sphere, demonstrating one project which connect low-income families and supportive people. My platform able to connect them easily and getting help for them.",
      image: img,
      tags: ["Social Impact", "React", "Node.js"],
      icon: <IoTrophyOutline />
    },
    {
      id: 3,
      category: "Hackathon",
      title: "IT-School Hackathon",
      result: "2nd Place",
      date: "Apr 2023",
      description: "Created one CRM ecosystem which helps people to communicate with their colleagues with online mode and sharing ideas with them.",
      image: img1,
      tags: ["Team Collaboration", "WebSockets"],
      icon: <IoTrophyOutline />
    },
    {
      id: 4,
      category: "Education",
      title: "One Million Uzbek Coders",
      result: "Graduate",
      date: "Oct 2020",
      description: "Compeleted FullStack Web Development, Frontend Development and Data Analysis Track Courses and got certificated from Udemy.",
      image: s1,
      tags: ["Udacity", "Full Stack"],
      icon: <IoCodeSlashOutline />
    },
    {
      id: 2,
      category: "Certification",
      title: "Full-Stack BootCamp",
      result: "Certified",
      date: "Feb 2022",
      description: "Finished Full-Stack Development Course and gained much more experience within 1 year.",
      image: img2,
      tags: ["Bootcamp", "Intensive"],
      icon: <IoSchoolOutline />
    },
  ];

  return (
    <section id="achieve" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
              Honors & Certifications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Recognition of my dedication to coding excellence and continuous growth.
            </p>
          </motion.div>
        </div>

        {/* 4 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 shrink-0">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur p-2 rounded-full text-indigo-600 shadow-sm">
                  {item.icon}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide bg-indigo-50 px-2 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mb-4 line-clamp-3 leading-relaxed flex-grow">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between mt-auto">
                  <span className="font-bold text-slate-700 text-sm">
                    {item.result}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <IoChevronForward />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Hero Image in Modal */}
              <div
                className="relative h-64 group cursor-zoom-in overflow-hidden"
                onClick={() => setViewImage(selectedItem)}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <IoExpandSharp /> Click to view full image
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(null);
                  }}
                  className="absolute top-4 right-4 z-30 p-2 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/50 text-white transition-colors"
                >
                  <IoClose size={24} />
                </button>

                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                  <span className="text-indigo-300 font-bold uppercase tracking-wider text-xs mb-1 block">
                    {selectedItem.category} • {selectedItem.date}
                  </span>
                  <h3 className="text-3xl font-bold text-white shadow-sm">{selectedItem.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold border border-green-200">
                    {selectedItem.result}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  {selectedItem.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                      # {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ImageViewer
        isOpen={!!viewImage}
        image={viewImage?.image}
        title={viewImage?.title}
        onClose={() => setViewImage(null)}
      />
    </section>
  );
}

export default AchievementsSection;
