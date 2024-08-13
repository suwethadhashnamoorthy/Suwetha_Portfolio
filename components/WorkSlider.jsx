import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { smoothIn } from '@/animate';

const slides = [
  {
    images: [
      { title: 'Image 1', path: '/thumb1.jpg' },
      { title: 'Image 2', path: '/thumb2.jpg' },
      { title: 'Image 3', path: '/thumb3.jpg' },
      { title: 'Image 4', path: '/thumb4.jpg' },
      { title: 'Image 5', path: '/thumb5.jpg' },
      { title: 'Image 6', path: '/thumb1.jpg' },
    ],
  },
  {
    images: [
      { title: 'Image 7', path: '/thumb1.jpg' },
      { title: 'Image 8', path: '/thumb2.jpg' },
      { title: 'Image 9', path: '/thumb3.jpg' },
      { title: 'Image 10', path: '/thumb4.jpg' },
      { title: 'Image 11', path: '/thumb5.jpg' },
      { title: 'Image 12', path: '/thumb1.jpg' },
    ],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
      loop={true} 
    >
      {slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <motion.div 
            className="grid grid-cols-3 gap-4 cursor-pointer"
            initial="hidden"
            animate="show"
            variants={smoothIn("up", 0.4)}
          >
            {slide.images.map((image, index) => (
              <motion.div 
                key={index} 
                className="relative rounded-lg overflow-hidden flex items-center justify-center group shadow-lg"
                initial="hidden"
                animate="show"
                variants={smoothIn("up", 0.3 + index * 0.1)}
              >
                <Image
                  src={image.path}
                  alt={image.title}
                  width={500}
                  height={300}
                  className="object-cover"
                />
                <div className='absolute bottom-0 right-0 bg-white/90 flex flex-col items-center justify-end w-full gap-2 p-2 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0'>
                  <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    <div className='delay-100'>MY</div>
                    <div className='translate-y-[300%] group-hover:translate-y-0 transition-all duration-300 delay-150'>WORKS</div>
                    <div className='text-xl translate-y-[300%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
