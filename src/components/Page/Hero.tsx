'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
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



  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5">
              <p className="flex text-sm uppercase text-gray-800 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Welcome
              </p>
              <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-gray-800 dark:text-gray-100  sm:leading-snug">
                Hi, I'm RaJ Yadav <br />
                <span className="my-1 inline-block border-b-4 border-white bg-orange-400 px-4 font-bold text-gray-800 dark:text-gray-100">

                  <div className='mb-5 flex items-center justify-center'>
                    <TypeAnimation
                      sequence={[
                        'Node.js Developer',
                        2000,
                        'MERN Stack Developer',
                        2000,
                        'App Developer',
                        2000,
                        'React Native Developer',
                        2000,
                        'Backend Developer'
                      ]}
                      speed={30}
                      wrapper='h2'
                      repeat={Infinity}
                      className='mt-4 text-3xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl'
                    />
                  </div>


                </span>
              </h2>
              <motion.p
                variants={fade}
                className="text-base text-gray-800 dark:text-gray-100">
                I am a highly analytical full-stack developer committed to delivering robust and reliable applications. With expertise in JavaScript and Data Structures and Algorithms, I develop efficient and secure systems that provide an optimal user experience.
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
              </motion.button>

            </div>
            <div className="mt-4 flex flex-col justify-center sm:flex-row sm:items-center sm:space-x-4 lg:justify-start">
              <Link href='/contacts' className="relative mt-4 rounded-lg border-2 border-green-600 bg-green-600 px-6 py-2 font-medium text-white transition hover:translate-y-1 text-center">
                <div className="absolute left-0 -bottom-10 hidden h-10 w-10 -rotate-12 -scale-x-100 text-green-600 md:inline-flex">
                  <svg
                    viewBox="0 0 82 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Contact Us
              </Link>
              <Link href='/resume' className="mt-4 flex items-center justify-center rounded-lg border-2 border-green-600 px-6 py-2 font-medium text-green-600 transition hover:translate-y-1 hover:bg-white">
                <FaFileAlt className="mr-2 h-5 w-5" />
                View My Resume
              </Link>
            </div>
          </div>
          <div className="relative lg:w-1/2">

            <div className=" w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">

              <TbWorldWww className="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-yellow-400 hidden sm:inline-flex animate-pulse" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400 animate-bounce"
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
                className="flex w-96 flex-wrap border-4 mt-4 shadow-amber-500  shadow-lg">

                <NextImage
                  src='/images/RRR.jpg'
                  alt='dev' height={500}
                  width={500}
                  priority
                  quality={100}
                  className="object-cover"

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
