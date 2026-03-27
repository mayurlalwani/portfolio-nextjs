'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { Link as ScrollLink } from 'react-scroll/modules';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Projects', page: 'projects' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='w-full mx-auto px-6 sm:px-10 fixed top-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-neutral-100 dark:border-stone-800'>
      <div className='max-w-6xl mx-auto flex items-center justify-between h-14'>
        <ScrollLink to='home' className='cursor-pointer'>
          <span className='text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100'>
            Mayur Lalwani
          </span>
        </ScrollLink>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center space-x-7'>
          {NAV_ITEMS.map((item, idx) => (
            <ScrollLink
              key={idx}
              to={item.page}
              activeClass='text-neutral-900 dark:text-neutral-100'
              spy={true}
              smooth={true}
              offset={-56}
              duration={400}
              onClick={() => setNavbar(false)}
              className='text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors cursor-pointer'
            >
              {item.label}
            </ScrollLink>
          ))}
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className='p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-stone-800 transition-colors'
            aria-label='Toggle theme'
          >
            {currentTheme === 'dark' ? <RiSunLine size={18} /> : <RiMoonFill size={18} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className='flex items-center gap-2 md:hidden'>
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className='p-1.5 rounded-md text-neutral-500 hover:bg-neutral-100 dark:hover:bg-stone-800 transition-colors'
            aria-label='Toggle theme'
          >
            {currentTheme === 'dark' ? <RiSunLine size={18} /> : <RiMoonFill size={18} />}
          </button>
          <button
            className='p-1.5 text-neutral-600 dark:text-neutral-300 rounded-md hover:bg-neutral-100 dark:hover:bg-stone-800 transition-colors'
            onClick={() => setNavbar(!navbar)}
            aria-label='Toggle menu'
          >
            {navbar ? <IoMdClose size={22} /> : <IoMdMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {navbar && (
        <div className='md:hidden border-t border-neutral-100 dark:border-stone-800 py-4 flex flex-col space-y-4 px-2'>
          {NAV_ITEMS.map((item, idx) => (
            <ScrollLink
              key={idx}
              to={item.page}
              spy={true}
              smooth={true}
              offset={-56}
              duration={400}
              onClick={() => setNavbar(false)}
              className='text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer py-1'
            >
              {item.label}
            </ScrollLink>
          ))}
          <a
            href='https://mayurlalwani.hashnode.dev'
            target='_blank'
            rel='noreferrer'
            className='text-sm text-neutral-600 dark:text-neutral-300 py-1'
            onClick={() => setNavbar(false)}
          >
            Blog
          </a>
        </div>
      )}
    </header>
  );
}
