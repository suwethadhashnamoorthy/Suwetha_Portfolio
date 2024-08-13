import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { smoothIn } from "@/animate"; // Import smoothIn animation

import 'swiper/css';
import 'swiper/css/pagination';

const SkillsData = [
  { image: '/htmlogo.png', title: 'HTML', color: '#FFB2A6' },
  { image: '/csslogo.png', title: 'CSS', color: '#A3C4E0' },
  { image: '/jslogo.png', title: 'JavaScript', color: '#F8E09D' },
  { image: '/mongologo.png', title: 'MongoDB', color: '#A8E3C5' },
  { image: '/expresslogo.png', title: 'Express.js', color: '#CCCCCC' },
  { image: '/reclogo.png', title: 'React', color: '#B3E5F7' },
  { image: '/nodelogo.png', title: 'Node.js', color: '#B8E6A5' },
  { image: '/sqllogo.png', title: 'MySQL', color: '#A2D7E0' },
  { image: '/bootlogo.png', title: 'Bootstrap', color: '#B8A3F0' },
];

const SkillsSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      loop={true}
      className="skills-slider"
    >
      {SkillsData.map((skill, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="w-48 h-48 flex flex-col items-center justify-center mb-6 text-center p-4"
            initial="hidden"
            animate="show"
            variants={smoothIn(index % 2 === 0 ? "left" : "right", index * 0.3)} 
          >
            <div
              className="bg-white w-24 h-24 flex items-center justify-center mb-2 shadow-2xl hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: skill.color, borderRadius: "50%" }}
            >
              <Image
                src={skill.image}
                alt={skill.title}
                width={80}
                height={80}
                style={{ borderRadius: "50%", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }} 
              />
            </div>
            <p className="text-black font-bold">{skill.title}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkillsSlider;
