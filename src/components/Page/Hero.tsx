'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaConnectdevelop, FaFileAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

import NextImage from '@/components/NextImage';

const HomePage = () => {

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const phoneNumber = '+919472040607';
  const handleChat = () => {
    const message = encodeURIComponent("I'm interested in your Tech services. Can you provide more information?");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (

    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto h-full px-10 py-5 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5">
              <p className=" flex text-sm uppercase text-gray-800 dark:text-gray-100 mt-3">
                <FaConnectdevelop className="mr-1 inline h-5 w-5" />
                Welcome
                <FaConnectdevelop className="ml-1 inline h-5 w-5" />
              </p>
              <h2 className="py-2 md:py-5 max-w-lg text-3xl md:text-5xl font-bold leading-snug tracking-tight text-gray-800 dark:text-gray-100  sm:leading-snug">
                Hello, My name is <span className=" text-green-500 dark:text-lime-500 animate-bounce">RaJ</span> <br />
                <span className="my-1 inline-block border-b-4 border-white font-bold text-gray-700 dark:text-gray-100">

                  <div className='flex items-center justify-center'>
                    <h4 className=' mt-1 text-2xl md:text-4xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl'>I'm a&nbsp;</h4>
                    <TypeAnimation
                      sequence={[
                        2000,
                        'MERN Stack Developer',
                        2000,
                        'Backend Developer',
                        2000,
                        '',
                        2000,
                        'React Native Developer',

                      ]}
                      speed={30}
                      wrapper='h2'
                      repeat={Infinity}
                      className='mt-1 text-xl md:text-3xl font-bold sm:text-xl lg:text-2xl xl:text-3xl text-green-500 dark:text-lime-500'
                    />
                  </div>


                </span>
              </h2>
              <motion.p
                variants={fade}
                className="text-base text-gray-800 dark:text-gray-100">
                Highly analytical full-stack developer committed to delivering robust, efficient, and secure applications. Expertise in JavaScript, Data Structures, and Algorithms for optimal user experiences.
              </motion.p>

            </div>
            <div className='my-5 flex flex-col '>
              <motion.button
                initial='hidden'
                animate='visible'
                variants={fadeInUp}
                className='mt-2 flex '
              >
                <a
                  href='https://github.com/ItsRaJYadav'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-4 flex  dark:rounded-2xl text-gray-300 hover:text-gray-400 dark:bg-slate-100 transition hover:translate-y-1'
                  aria-label='Link to my GitHub profile'
                >
                  <Image
                    width={50}
                    height={50}
                    src='/icons/github.png'
                    alt='github icon'

                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/rajydv07/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-4 flex  text-gray-300 hover:text-gray-400 transition hover:translate-y-1'
                  aria-label='Link to my LinkedIn profile'
                >
                  <Image
                    width={50}
                    height={50}
                    src='/icons/linkedin.png'
                    alt='linkedin icon'

                  />
                </a>

                <a
                  href='https://leetcode.com/King07/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-4 flex  dark:rounded-2xl  dark:bg-slate-100 text-gray-300 hover:text-gray-400 transition hover:translate-y-1'
                  aria-label='Link to my Leetcode profile'
                >
                  <Image
                    width={50}
                    height={55}
                    src='/icons/LeetCode.png'
                    alt='linkedin icon'

                  />
                </a>
                <a
                  href='https://www.instagram.com/its_raj_ydv/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-4 flex  text-gray-300 hover:text-gray-400 transition hover:translate-y-1'
                  aria-label='Link to my Instagram profile'
                >
                  <Image
                    width={50}
                    height={50}
                    src='/icons/instagram-png.webp'
                    alt='Instagram_icon.png'

                  />
                </a>
                <a
                  href='https://www.facebook.com/IamRAJAO9'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-4 flex  text-gray-300 hover:text-gray-400 transition hover:translate-y-1'
                  aria-label='Link to my Facebook profile'
                >
                  <Image
                    width={50}
                    height={50}
                    src='/icons/Facebook_Logo_2023.png'
                    alt='Facebook_Logo_2023.png'

                  />
                </a>
                <button
                  onClick={handleChat}
                  rel='noopener noreferrer'
                  className='mr-4 flex  text-gray-300 hover:text-gray-400 transition hover:translate-y-1'

                >
                  <Image
                    width={50}
                    height={50}
                    src='/icons/WhatsApp.webp'
                    alt='contact me via whatsapp'

                  />
                </button>
              </motion.button>

            </div>
            <div className="mt-4 flex flex-col justify-center sm:flex-row sm:items-center sm:space-x-4 lg:justify-start">
              <Link href='/contacts' className="relative mt-4 rounded-lg border-2 border-green-500 bg-green-500 px-6 py-2 font-medium text-white transition hover:translate-y-1 text-center sm:w-auto dark:bg-lime-500 dark:border-lime-500">
                Contact Us
              </Link>
              <Link href='/resume' className="mt-4 flex items-center justify-center rounded-lg border-2 border-green-500 dark:text-lime-500 dark:border-lime-500 px-6 py-2 font-medium text-green-500 transition hover:translate-y-1 hover:bg-gray-100 sm:w-auto">
                <FaFileAlt className="mr-2 h-5 w-5" />
                View My Resume
              </Link>
            </div>

          </div>
          <div className="relative lg:w-1/2 order-first md:order-last sm:order-last">

            <div className=" w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none ">


              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:flex absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-green-500 animate-bounce dark:text-lime-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex w-full md:w-96 flex-wrap border-4 mt-4 shadow-amber-500 shadow-lg"
              >
                <NextImage
                  src='/images/RRR.jpg'
                  alt='dev'
                  height={500}
                  width={500}
                  priority
                  quality={100}
                  className="object-cover w-full h-full md:w-500 md:h-500"
                />
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>


    </>
  );
};

export default HomePage;
