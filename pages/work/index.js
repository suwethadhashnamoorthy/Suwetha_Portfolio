import React from "react";
import { motion } from 'framer-motion';
import { smoothIn } from "@/animate";
import WorkSlider from "@/components/WorkSlider";

const Work = () => {
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
              My Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              className='mb-4 mx-auto text-black lg:mx-0'
              initial="hidden"
              animate="show"
              variants={smoothIn("down", 0.3)} 
            >
              Here's a brief intro to my projects, showcasing my focus on high-quality web solutions using the MERN stack.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
