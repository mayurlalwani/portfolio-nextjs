'use client';

import React, { useState } from 'react';
import SlideUp from './SlideUp';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Fields>;
type Touched = Partial<Record<keyof Fields, boolean>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!fields.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const Contact = () => {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<Touched>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(fields);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isValid) {
      e.preventDefault();
      setTouched({ name: true, email: true, message: true });
      return;
    }
    setSubmitted(true);
  };

  const inputBase =
    'px-3 py-2.5 text-sm rounded-lg border bg-white dark:bg-stone-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 transition-colors';
  const inputNormal =
    'border-neutral-200 dark:border-stone-700 focus:ring-teal-500/30 focus:border-teal-500 dark:focus:border-teal-400';
  const inputError =
    'border-red-400 dark:border-red-500 focus:ring-red-400/30 focus:border-red-400 dark:focus:border-red-500';

  const fieldClass = (key: keyof Fields) =>
    `${inputBase} ${touched[key] && errors[key] ? inputError : inputNormal}`;

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
              {submitted ? (
                <div className='flex flex-col gap-2 p-6 rounded-lg border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/30'>
                  <p className='text-sm font-semibold text-teal-700 dark:text-teal-400'>Message sent!</p>
                  <p className='text-sm text-teal-600 dark:text-teal-500'>Thanks for reaching out — I'll get back to you soon.</p>
                </div>
              ) : (
                <form
                  action='https://getform.io/f/f8f3f125-bad4-4d43-b3dd-8014a7b581ba'
                  method='POST'
                  encType='multipart/form-data'
                  className='space-y-4'
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* Honeypot: hidden from humans, bots fill it automatically */}
                  <input type='text' name='_gotcha' style={{ display: 'none' }} tabIndex={-1} autoComplete='off' />

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1.5'>
                      <label className='text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide'>
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={fields.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Your name'
                        className={fieldClass('name')}
                      />
                      {touched.name && errors.name && (
                        <p className='text-xs text-red-500 dark:text-red-400'>{errors.name}</p>
                      )}
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label className='text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide'>
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='you@example.com'
                        className={fieldClass('email')}
                      />
                      {touched.email && errors.email && (
                        <p className='text-xs text-red-500 dark:text-red-400'>{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide'>
                      Message
                    </label>
                    <textarea
                      name='message'
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={6}
                      placeholder='Tell me about your project or opportunity...'
                      className={`${fieldClass('message')} resize-none`}
                    />
                    {touched.message && errors.message && (
                      <p className='text-xs text-red-500 dark:text-red-400'>{errors.message}</p>
                    )}
                  </div>

                  <button
                    type='submit'
                    className='w-full sm:w-auto px-6 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-semibold rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Contact;
