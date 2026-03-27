import React from 'react';
import { HiOutlineCode, HiOutlineSparkles, HiOutlineDeviceMobile, HiOutlineLightningBolt } from 'react-icons/hi';
import SlideUp from './SlideUp';

const services = [
  {
    icon: HiOutlineCode,
    title: 'Web App Development',
    description:
      'Full-stack web applications built with React, Next.js, and Node.js. From MVPs to production systems — fast, accessible, and built to scale.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'AI / SaaS MVPs',
    description:
      'Rapid AI-powered product development using OpenAI and modern LLM APIs. I help founders go from idea to working demo in weeks, not months.',
  },
  
  {
    icon: HiOutlineLightningBolt,
    title: 'Workflow Automation',
    description:
      'Cut repetitive work with smart automation. Custom scripts, API integrations, and no-code/low-code workflows that save your team hours every week.',
  },
];

const ServicesSection = () => {
  return (
    <section id='services' className='py-20 border-t border-neutral-100 dark:border-stone-800'>
      <div className='max-w-6xl mx-auto'>
        <SlideUp offset='-200px 0px -200px 0px'>
          <div className='animate-slideUpCubiBezier'>
            <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3'>
              Services
            </h2>
            <p className='text-neutral-500 dark:text-neutral-400 mb-10 max-w-lg'>
              What I can build for you — whether you&#39;re a startup, a growing company,
              or a solo founder.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className='group p-6 rounded-xl border border-neutral-200 dark:border-stone-800 hover:border-neutral-300 dark:hover:border-stone-600 hover:shadow-sm transition-all duration-200 bg-white dark:bg-stone-900'
                >
                  <div className='mb-4'>
                    <service.icon
                      size={22}
                      className='text-teal-600 dark:text-teal-400'
                    />
                  </div>
                  <h3 className='text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default ServicesSection;
