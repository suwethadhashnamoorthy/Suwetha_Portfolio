import React from "react";
import { motion } from 'framer-motion';
import { smoothIn } from "@/animate";
import SkillsSlider from "@/components/SkillsSlider";

const Skills = () => {
  return (
    <div className='h-full py-36 flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-x-8'>
          <div className='text-center flex xl:w-[50vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              className='h2 xl:mt-8'
              initial="hidden"
              animate="show"
              variants={smoothIn("down", 0.2)}
            >
              My Skills <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              className='mb-4 mx-auto text-black lg:mx-0'
              initial="hidden"
              animate="show"
              variants={smoothIn("down", 0.3)} 
            >
              I focus on delivering high-quality web solutions that leverage the power of the MERN stack to create scalable, efficient, and engaging applications that meet the needs of users and businesses alike.
            </motion.p>
          </div>
          <div>
            <SkillsSlider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
