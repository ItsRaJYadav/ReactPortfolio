'use client';
import { motion } from 'framer-motion';
import React from 'react';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaLaptopCode,
} from 'react-icons/fa';

const experienceData = [
  {
    date: 'Aug 2023 to Present',
    role: 'Full Stack Engineer',
    company: 'Flavum HealthTech Pvt. Ltd.',
    companyLink: 'https://www.flavumhealth.com/',
    tasks: [
      `Engineered a robust backend architecture from scratch using Node.js, Express.js, and MongoDB.`,
      `Delivered a 300% surge in concurrent user capacity and empowered the system to process 35k-40k requests per minute.`,
      'Applied advanced caching techniques to reduce 35% of database queries and improve response time by 78% .',
      'Implemented security measures and data protection protocols to prevent data breaches.',
      'Integrated over 30+ components in React.js and Redux enhancing server-side logic by implementing effective lazy loading strategies for optimized performance.',
    ],
  },
  {
    date: 'Feb 2023 to July 2023',
    role: 'Node.js Developer Intern',
    company: 'QuickEat Delivery Services LLP',
    companyLink: 'https://quickeat.in',
    tasks: [
      'Created a secure admin dashboard with Node.js, MongoDB, and REST API, integrating Role-based Access Control (RBAC)',
      'Implemented optimized RESTful API techniques, reducing direct API calls by 30% and cutting response time by 25% through advanced indexing and query optimization',
      'Achieved a 40% decrease in data breaches while improving overall system efficiency',
      'Streamlined data management processes, enhancing security and performance of the system',
      'Developed GraphQL APIs using Node.js and Apollo Server.',
    ],
  },
];

const Experience = () => {
  return (
    <div className='flex justify-center py-12 dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-700 dark:text-white'>
          Experience
        </h2>
        <motion.ol>
          {experienceData.map((experience, index) => (
            <motion.li
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ listStyleType: 'none' }}
            >
              <div className='relative mb-8 ml-4'>
                <div className='absolute left-0 mt-1.5 h-3 w-3 rounded-full border border-gray-700 bg-gray-200 dark:border-gray-100 dark:bg-gray-700' />

                <div className='absolute left-1.5 top-4 h-full border border-gray-600 bg-gray-200 dark:border-gray-100 dark:bg-gray-700' />

                <time className='mb-1 ml-6 flex items-center text-sm font-normal leading-none text-gray-800 dark:text-gray-100'>
                  <FaCalendarAlt className='mr-2 inline-block text-blue-400' />{' '}
                  {experience.date}
                  <span className='ml-4 flex items-center'>
                    <FaLaptopCode className='mr-2 inline-block text-green-400' />{' '}
                    {experience.role}
                    <a
                      href={experience.companyLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-3 text-white'
                    >
                      <FaExternalLinkAlt className='ml-1 inline-block text-gray-400' />
                    </a>
                  </span>
                </time>
                <h3 className='ml-9 text-lg font-semibold text-white dark:text-white'>
                  {experience.company}
                </h3>
                <ul className='mt-2 list-disc pl-8 text-gray-800 dark:text-gray-100'>
                  {experience.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className='mb-2 flex items-center'>
                      <FaCheckCircle className='mr-2 text-green-400' />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default Experience;
