'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left'>
        <div className='md:mt-2 md:w-1/2'>
          <Image
            src='/images/mlalwani.png'
            alt='image'
            width={300}
            height={300}
            className='rounded-full shadow-2xl'
          />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-5xl'>
            Hi, I&#39;m Mayur Lalwani!
          </h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl text-justify'>
            I&#39;m a{' '}
            <span className='font-semibold text-teal-600'>
              Software Engineer{' '}
            </span>
            from India. Working towards creating software that makes life easier
            and more meaningful.
          </p>
          <a
            target='_blank'
            href='https://drive.google.com/file/d/149i6SG1XdYmiWCAy1Vo1nxB1n64nDtNU/view?usp=share_link'
            className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer'
          >
            Resume
          </a>
        </div>
      </div>
      <div className='flex flex-row items-center text-center justify-center '>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
