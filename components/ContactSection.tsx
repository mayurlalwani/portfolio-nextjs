import React from 'react';
import SlideUp from './SlideUp';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className='py-20 border-t border-neutral-100 dark:border-stone-800'>
      <div className='max-w-6xl mx-auto'>
        <SlideUp offset='-200px 0px -200px 0px'>
          <div className='animate-slideUpCubiBezier flex flex-col md:flex-row gap-14'>
            {/* Left */}
            <div className='md:w-80 flex-shrink-0'>
              <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3'>
                Get in touch
              </h2>
              <p className='text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 text-sm'>
                Open to freelance projects and full-time opportunities.
                Whether you have a project in mind or just want to say hello — my inbox is open.
              </p>

              <div className='space-y-3'>
                <a
                  href='mailto:lalwanimayur06@gmail.com'
                  className='flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group'
                >
                  <span className='p-2 rounded-lg bg-neutral-100 dark:bg-stone-800 group-hover:bg-neutral-200 dark:group-hover:bg-stone-700 transition-colors'>
                    <AiOutlineMail size={16} />
                  </span>
                  lalwanimayur06@gmail.com
                </a>
                <a
                  href='https://github.com/mayurlalwani'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group'
                >
                  <span className='p-2 rounded-lg bg-neutral-100 dark:bg-stone-800 group-hover:bg-neutral-200 dark:group-hover:bg-stone-700 transition-colors'>
                    <FaGithub size={16} />
                  </span>
                  github.com/mayurlalwani
                </a>
                <a
                  href='https://www.linkedin.com/in/mayurlalwani/'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group'
                >
                  <span className='p-2 rounded-lg bg-neutral-100 dark:bg-stone-800 group-hover:bg-neutral-200 dark:group-hover:bg-stone-700 transition-colors'>
                    <FaLinkedinIn size={16} />
                  </span>
                  linkedin.com/in/mayurlalwani
                </a>
              </div>
            </div>

            {/* Form */}
            <div className='flex-1'>
              <form
                action='https://getform.io/f/f8f3f125-bad4-4d43-b3dd-8014a7b581ba'
                method='POST'
                encType='multipart/form-data'
                className='space-y-4'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      placeholder='Your name'
                      className='px-3 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 dark:focus:border-teal-400 transition-colors'
                    />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      placeholder='you@example.com'
                      className='px-3 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 dark:focus:border-teal-400 transition-colors'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className='px-3 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 dark:focus:border-teal-400 transition-colors resize-none'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full sm:w-auto px-6 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-semibold rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Contact;
