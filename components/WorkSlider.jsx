import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "Financial Details",
    technology: "Excel, Power BI",
    link: "https://drive.google.com/file/d/1qO_aWHG6Um3bHNYoOjrpCQPZXy1zZ1IR/view?usp=drive_link",
    image: '/thumb1.jpg',
    description: "Created a Power BI financial dashboard for real-time insights on revenue, expenses, and profit margins."
  },
  {
    name: "Responsive Website Design",
    technology: "HTML, CSS, Bootstrap, JQuery",
    link: "https://tiny-jelly-3afc75.netlify.app/",
    image: '/thumb5.jpg',
    description: "Developed a responsive company website with interactive features using JQuery."
  },
  {
    name: "Thirukkural API",
    technology: "HTML, CSS, JavaScript (DOM)",
    link: "https://thirukkural-1330-api.netlify.app/",
    image: '/thumb3.jpg',
    description: "Built a Thirukkural lookup site using async/await for API calls to thirukkural."
  }
];

const WorkSlider = () => {
  return (
    <div className="w-full mx-auto p-4">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  {project.technology}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white text-xs sm:text-base rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
