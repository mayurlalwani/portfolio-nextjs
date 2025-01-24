import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'Note sharing app',
    description:
      'A collaborative note sharing app that offers a simple and intuitive interface that makes it easy for users to create, edit, and share notes.',
    image: '/images/note-app.png',
    github: 'https://github.com/mayurlalwani/notes-app-mern',
    link: 'https://notes-mern-app.onrender.com/',
  },
  {
    name: 'Resume Builder',
    description:
      'An online platform that helps users create professional-looking resume quickly and easily.',
    github: 'https://github.com/mayurlalwani/resume-builder-mern',
    image: '/images/resume-builder.png',
    link: 'https://resume-builder-ubbt.onrender.com/',
  },
  {
    name: 'Dentist Management System',
    description:
      'A comprehensive web application designed specifically for dental practices. It helps dentists manage their appointments, patients, and staff efficiently. The application includes features such as appointment scheduling, patient records management and staff management. It aims to streamline the workflow, reduce administrative burden, and enhance patient care.',
    github: 'https://github.com/mayurlalwani/dentist-app',
    image: '/images/Dentistapp.png',
    link: 'https://dentist-app-phi.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className=' md:w-1/2'>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div className='md:w-1/2'>
                    <h1 className='text-4xl mt-4 font-bold mb-6'>
                      {project.name}
                    </h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
