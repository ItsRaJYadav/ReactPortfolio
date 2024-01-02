'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { CiMobile3 } from "react-icons/ci";
import { FaFigma } from 'react-icons/fa';
import { IoIosLaptop } from "react-icons/io";

import Tabs from '@/components/Page/About/Tabs';


const About = () => {
  return (
    <div >
      <div className='mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8'>
        <motion.div
          className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='mb-1'>
            <div className="w-full px-4 mb-10  lg:mb-0">
             <Tabs/>
            </div>


          </div>

          <motion.div
            className='lg:mt-0 lg:w-3/5'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              className='h-auto w-full rounded-lg object-cover shadow-lg shadow-blue-500'
              src='/images/raj.jpeg'
              alt='Profile'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className='my-2'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className='grid grid-cols-1 py-4 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            <motion.div
              className='rounded-lg p-6 shadow-lg shadow-indigo-500'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoIosLaptop className='mb-2 text-5xl text-blue-500' />
              <h2 className='mb-2 text-xl font-bold text-gray-700 dark:text-gray-100'>Web Development</h2>
              <p className='text-lg leading-6'>
                Specializing in responsive web applications using React.js and Node.js to deliver high-quality, client-focused solutions.
              </p>
            </motion.div>

            <motion.div
              className='rounded-lg p-2 shadow-lg shadow-amber-400'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CiMobile3 className='mb-6 text-5xl text-blue-500' />
              <h2 className='mb-2 text-xl font-bold text-gray-700 dark:text-gray-100'>App Development</h2>
              <p className='text-lg leading-6'>
                Crafting native and cross-platform mobile apps for iOS and Android using React Native and Flutter for engaging user experiences.
              </p>
            </motion.div>

            <motion.div
              className='rounded-lg p-2 shadow-lg shadow-pink-400'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFigma className='mb-6 text-5xl text-blue-500' />
              <h2 className='mb-2 text-xl font-bold text-gray-700 dark:text-gray-100'>UI/UX Design</h2>
              <p className='text-lg leading-6'>
                Creating visually appealing UI/UX designs with Figma and Sketch, focusing on intuitive interfaces and user-centric experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;