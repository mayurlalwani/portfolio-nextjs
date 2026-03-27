'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';

const HeroSection = () => {
  return (
    <section id='home' className='pt-32 pb-20 md:pt-40 md:pb-32'>
      <div className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16'>
        {/* Text */}
        <div className='flex-1 text-center md:text-left animate-fadeIn'>
          <p className='text-sm font-medium text-teal-600 dark:text-teal-400 mb-3 tracking-wide uppercase'>
            Full-Stack Developer · Indie Builder
          </p>
          <h1 className='text-4xl sm:text-5xl md:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-neutral-900 dark:text-neutral-100 mb-5'>
            I build web apps, AI tools,<br className='hidden sm:block' /> and things that{' '}
            <span className='text-teal-600 dark:text-teal-400'>actually ship.</span>
          </h1>
          <p className='text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0'>
            I&#39;m Mayur — a full-stack developer from India who turns ideas into
            production-ready web apps, AI-powered SaaS products, and Android applications.
            5+ years of shipping real products for real users.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
            <Link
              to='contact'
              smooth={true}
              offset={-56}
              duration={400}
              className='inline-flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-semibold rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors cursor-pointer'
            >
              Hire Me
            </Link>
            <Link
              to='projects'
              smooth={true}
              offset={-56}
              duration={400}
              className='inline-flex items-center justify-center px-6 py-3 border border-neutral-200 dark:border-stone-700 text-neutral-700 dark:text-neutral-300 text-sm font-semibold rounded-lg hover:border-neutral-400 dark:hover:border-stone-500 hover:bg-neutral-50 dark:hover:bg-stone-800 transition-colors cursor-pointer'
            >
              See My Work
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className='flex-shrink-0 animate-fadeIn animation-delay-2'>
          <div className='relative w-52 h-52 md:w-64 md:h-64'>
            <Image
              src='/images/mayur.jpeg'
              alt='Mayur Lalwani'
              fill
              className='rounded-full object-cover object-top shadow-lg ring-4 ring-neutral-100 dark:ring-stone-800'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
