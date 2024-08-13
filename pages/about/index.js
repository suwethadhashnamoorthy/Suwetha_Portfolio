import React from "react";
import AvatarProfile from "@/components/AvatarProfile"; 
import CountUp from "react-countup";
import { motion } from 'framer-motion';
import { smoothIn } from "@/animate"; 

const About = () => {
  return (
    <div className="h-full py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            className="h2"
            initial="hidden"
            animate="show"
            variants={smoothIn("down", 0.2)} 
          >
            A passionate <span className="text-accent">MERN</span> Stack Developer.
          </motion.h2>
          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 text-black mb-3 xl:mb-6 px-2 xl:px-0"
            initial="hidden"
            animate="show"
            variants={smoothIn("down", 0.3)}
          >
            I specialize in building dynamic web applications using MongoDB, Express.js, React, and Node.js. 
            My goal is to create efficient and scalable solutions that enhance user experience and drive 
            business success.
          </motion.p>
        </div>
        
        <div className="flex flex-col w-full xl:max-w-[48%]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0">
            <motion.div
              initial="hidden"
              animate="show"
              variants={smoothIn("left", 0.4)} 
            >
              <AvatarProfile />
            </motion.div>
          </div>

   
          <motion.div
            className="flex-1 flex justify-center absolute mt-16 p-5 bg-white/90 rounded-full z-20"
            initial="hidden"
            animate="show"
            variants={smoothIn("right", 0.5)} 
          >
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <CountUp start={0} end={1} duration={5} decimals={0} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Years of experience
            </div>
          </motion.div>

          
          <motion.div
            className="flex-1 flex justify-center absolute mt-80 ms-96 p-5 bg-white/90 rounded-full z-20"
            initial="hidden"
            animate="show"
            variants={smoothIn("left", 0.6)} 
          >
            <div className="text-2xl xl:text-4xl font-extrabold text-accent">
              <CountUp start={0} end={5} duration={1} />+
            </div>
            <div className="text-xs ms-3 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished Projects
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
