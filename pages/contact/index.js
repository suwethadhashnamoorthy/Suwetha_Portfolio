import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { smoothIn } from '@/animate';

const Contact = () => {
  return (
    <div className='h-full'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            className='h2 text-center my-6'
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={smoothIn("up", 0.3)} 
          >
            Let's <span className='text-accent'>talk</span>
          </motion.h2>
          <motion.form
            className='flex flex-1 flex-col gap-6 w-full mx-auto'
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={smoothIn("up", 0.2)} 
          >
            <div className='flex gap-x-6 w-full'>
              <motion.input
                type='text'
                placeholder='First Name'
                className='input'
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={smoothIn("up", 0.4)} 
              />
              <motion.input
                type='text'
                placeholder='Last Name'
                className='input'
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={smoothIn("up", 0.6)}
              />
            </div>
            <div className='flex gap-x-6 w-full'>
              <motion.input
                type='text'
                placeholder='Mobile No.'
                className='input'
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={smoothIn("up", 0.8)} 
              />
              <motion.input
                type='email'
                placeholder='Email'
                className='input'
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={smoothIn("up", 1)}
              />
            </div>
            <motion.input
              type='text'
              placeholder='Subject'
              className='input'
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={smoothIn("up", 1.2)}
            />
            <motion.textarea
              className='textarea'
              placeholder='Message'
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={smoothIn("up", 1.4)} 
            ></motion.textarea>

            <motion.button
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={smoothIn("up", 1.2)}  
              className='btn rounded-full bg-accent text-white border border-black max-w-[175px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's Talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
