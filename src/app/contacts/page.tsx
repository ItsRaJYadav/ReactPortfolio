'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaHome, FaPhoneSquareAlt } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion'

const Contacts = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.name === '') {
      Swal.fire('Error', 'Name is required.', 'error');
      return;
    }
    if (formData.message === '') {
      Swal.fire('Error', 'Message field is empty.', 'error');
      return;
    } else {
      try {
        setIsLoading(true);
        const response = await fetch('https://formspree.io/f/mzbqajee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData(initialState);
          Swal.fire(
            'Success',
            'Form submitted successfully. We will get back to you soon!',
            'success'
          );
        } else {
          Swal.fire(
            'Error',
            'An error occurred while submitting the form.',
            'error'
          );
        }
      } catch (error) {
        Swal.fire(
          'Error',
          'An error occurred while submitting the form.',
          'error'
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex min-h-screen flex-col items-center justify-center '>
        <div className='mt-15 mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg px-8 py-16 dark:bg-gray-800 dark:text-gray-100 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32'>
          <div className='flex flex-col  items-center justify-center'>
            <h2 className='mb-7 text-4xl font-bold leading-tight lg:text-5xl'>
              Let's talk!
            </h2>

            <div className='py-6 md:px-6 md:py-0' style={{ fontSize: '1.3em' }}>
              <div className='space-y-4'>
                <p className='flex items-center'>
                  <svg className='mr-2 h-5 w-5 sm:mr-6'>
                    <FaHome />
                  </svg>
                  <span>Darbhanga Bihar</span>
                </p>
                <p className='flex items-center'>
                  <svg className='mr-2 h-5 w-5 sm:mr-6'>
                    <FaPhoneSquareAlt />
                  </svg>
                  <span>+91 9472040607</span>
                </p>
                <p className='flex items-center'>
                  <svg className='mr-2 h-5 w-5 sm:mr-6'>
                    <AiOutlineMail />
                  </svg>
                  <span>itsrajyadav@outlook.com</span>
                </p>
                <p className='flex items-center'>
                  <svg className='mr-2 h-5 w-5 sm:mr-6'>
                    <ImLocation />
                  </svg>
                  <span>Faridabad HR </span>
                </p>
              </div>
            </div>
            <Image
              width={500}
              height={500}
              src='/images/development-4536630_640.webp'
              alt=''
              className='h-52 w-auto  p-6 md:h-64'
            />
          </div>
          <form
            className='ng-untouched ng-pristine ng-valid ng-submitted space-y-6'
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor='name' className='text-sm'>
                Full name
              </label>
              <input
                name='name'
                type='text'
                placeholder='Enter full name'
                className='w-full rounded p-3 dark:bg-gray-800'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <small className='form-text text-muted'>
              We'll never share your name with anyone else.
            </small>
            <div>
              <label htmlFor='email' className='text-sm'>
                Email
              </label>
              <input
                name='email'
                type='email'
                className='w-full rounded p-3 dark:bg-gray-800'
                value={formData.email}
                placeholder='Enter Email address '
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <small className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div>
              <label htmlFor='message' className='text-sm'>
                Message
              </label>
              <textarea
                id='message'
                rows={3}
                className='w-full rounded p-3 dark:bg-gray-800'
                spellCheck='false'
                name='message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            {isLoading ? (
              <div className='flex items-center'>
                <FiLoader className='mr-2 animate-spin text-2xl' />
                Sending...
              </div>
            ) : (
              <button
                type='submit'
                className='w-full rounded bg-violet-400 p-3 text-sm font-bold uppercase tracking-wide text-gray-900 dark:bg-violet-400 dark:text-gray-900'
              >
                Send Message
              </button>
            )}
            <div />
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contacts;
