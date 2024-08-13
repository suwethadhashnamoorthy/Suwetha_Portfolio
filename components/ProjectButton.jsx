import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';

const ProjectButton = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href="/skills" className="relative w-[180px] h-[180px] flex justify-center items-center group">
        <Image
          src="/rounded-text.png"
          width={140}
          height={148}
          className="w-full h-full max-w-[141px] max-h-[148px] animate-spin-slow"
          alt="Project Button" 
        />
        <HiArrowRight className="absolute text-4xl group-hover:rotate-0 -rotate-90 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectButton;
