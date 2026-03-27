import React from 'react';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: 'Dentist Management System',
    description:
      'A comprehensive web app for dental practices — appointment scheduling, patient records, and staff management in one place. Built to reduce admin overhead and improve patient care.',
    tech: ['Next.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/mayurlalwani/dentist-app',
    link: 'https://dentist-app-phi.vercel.app/',
    featured: true,
  },
  {
    name: 'AI Resume Builder',
    description:
      'An online platform where users create polished, professional resumes in minutes. AI-assisted content suggestions help tailor each resume to the target role.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/mayurlalwani/resume-builder-mern',
    link: 'https://ai-powered-resume-builder-bay.vercel.app/',
  },
  
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-20 border-t border-neutral-100 dark:border-stone-800'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3'>
          Projects
        </h2>
        <p className='text-neutral-500 dark:text-neutral-400 mb-10 max-w-lg'>
          A selection of things I&#39;ve built — side projects, client work, and experiments.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {projects.map((project, idx) => (
            <SlideUp key={idx} offset='-150px 0px -150px 0px'>
              <div className='group flex flex-col h-full animate-slideUpCubiBezier rounded-xl border border-neutral-200 dark:border-stone-800 hover:border-neutral-300 dark:hover:border-stone-600 hover:shadow-sm transition-all duration-200 bg-white dark:bg-stone-900 p-6'>
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-base font-semibold text-neutral-900 dark:text-neutral-100'>
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className='text-xs font-medium px-2 py-0.5 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full border border-teal-100 dark:border-teal-800'>
                        Featured
                      </span>
                    )}
                  </div>
                  <div className='flex items-center gap-2 ml-2 flex-shrink-0'>
                    <Link
                      href={project.github}
                      target='_blank'
                      className='text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors'
                      aria-label='GitHub'
                    >
                      <BsGithub size={17} />
                    </Link>
                    <Link
                      href={project.link}
                      target='_blank'
                      className='text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors'
                      aria-label='Live demo'
                    >
                      <BsArrowUpRightSquare size={17} />
                    </Link>
                  </div>
                </div>

                <p className='text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 flex-1'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1.5 mt-auto'>
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className='text-xs px-2 py-1 bg-neutral-100 dark:bg-stone-800 text-neutral-500 dark:text-neutral-400 rounded-md font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
