import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#d64040]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Passionate and driven software developer with over a year of experience building full-stack web applications using Python, Flask, Django, JS, React, Next.js, PostgreSQL, HTML, and CSS. i have a solid foundation in software development and possess strong problem-solving and critical thinking skills that enable me to create clean and efficient code. I am always eager to learn new technologies and improve my skills while leveraging my expertise to deliver high-quality products. Looking for opportunities to work with dynamic teams and make meaningful contributions to the tech industry.
          </p>
          <Link href='/#projects'>
            
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;