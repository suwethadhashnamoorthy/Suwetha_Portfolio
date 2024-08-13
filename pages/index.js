import ProjectButton from "@/components/ProjectButton";
import Avatar from './../components/Avatar';
import { motion } from 'framer-motion';
import { smoothIn } from "@/animate";

// pages/index.js
const Home = () => {
  return (
    <div className="h-full">
      <div className="w-full h-full flex flex-col justify-center pt-20 xl:pt-40 container mx-auto text-center xl:text-left">
        <motion.h1 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          variants={smoothIn('down', 0.2)} 
          className="h1"
        > 
          Hello, I'm Suwetha! <br />
          <span className="text-accent">MERN Developer.</span>
        </motion.h1>
        
        <motion.p 
          initial="hidden" 
          animate="show"   
          exit="hidden" 
          variants={smoothIn('down', 0.3)} 
          className="max-w-sm text-black xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8"
        >
          Passionate MERN Developer crafting dynamic web solutions <br /> that elevate user experiences!
        </motion.p>
        
        <div className="xl:hidden flex justify-center relative z-10">
          <ProjectButton />
        </div>
        
        <motion.div
          initial="hidden" 
          animate="show"   
          exit="hidden" 
          variants={smoothIn('down', 0.4)}
          className="hidden xl:flex"
        >
          <ProjectButton />
        </motion.div>
      </div>

      <div className="w-full h-full">
        <motion.div 
          initial="hidden" 
          animate="show"   
          exit="hidden" 
          transition={{ duration: 1, ease: 'easeInOut' }}
          variants={smoothIn('up', 0.5)}
          className="w-full h-full max-w-[670px] max-h-[700px] absolute top-32 lg:bottom-0 lg:right-[2%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
