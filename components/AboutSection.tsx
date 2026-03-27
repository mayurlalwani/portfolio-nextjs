import React from 'react';
import SlideUp from './SlideUp';

const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'Express', 'GraphQL', 'MySQL', 'PostgreSQL',
  'Android (Kotlin)', 'OpenAI API', 'Tailwind CSS', 'Git',
];

const AboutSection = () => {
  return (
    <section id='about' className='py-20 border-t border-neutral-100 dark:border-stone-800'>
      <div className='max-w-6xl mx-auto'>
        <SlideUp offset='-200px 0px -200px 0px'>
          <div className='flex flex-col md:flex-row gap-14 animate-slideUpCubiBezier'>
            <div className='flex-1'>
              <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-5'>
                About me
              </h2>
              <div className='space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                <p>
                  I&#39;m a full-stack developer with 5+ years of experience building
                  products across web, mobile, and AI. I care deeply about clean code,
                  fast interfaces, and software that solves real problems.
                </p>
                <p>
                  Beyond client work, I&#39;m an indie builder — I regularly ship side
                  projects, explore new tools, and write about what I learn. I&#39;m
                  comfortable working end-to-end: from database schema to polished UI.
                </p>
                <p>
                  Currently open to freelance projects and full-time opportunities where
                  I can make a meaningful impact.
                </p>
              </div>
            </div>

            <div className='md:w-72 lg:w-80'>
              <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-5'>
                Skills
              </h2>
              <div className='flex flex-wrap gap-2'>
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className='px-3 py-1.5 text-sm bg-neutral-100 dark:bg-stone-800 text-neutral-600 dark:text-neutral-300 rounded-md font-medium'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default AboutSection;
