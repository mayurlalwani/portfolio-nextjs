import React from 'react';
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-100 dark:border-stone-800'>
      <div className='max-w-6xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <span className='text-sm text-neutral-400 dark:text-neutral-500'>
          © 2025 Mayur Lalwani
        </span>
        <div className='flex items-center gap-4'>
          <a
            href='https://github.com/mayurlalwani'
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
            className='text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors'
          >
            <AiOutlineGithub size={20} />
          </a>
          <a
            href='https://twitter.com/mayurlalwani3'
            target='_blank'
            rel='noreferrer'
            aria-label='Twitter'
            className='text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors'
          >
            <AiOutlineTwitter size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/mayurlalwani/'
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
            className='text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors'
          >
            <AiOutlineLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
