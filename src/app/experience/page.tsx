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
    date: 'Feb 2024 – Present',
    role: 'Backend Engineer',
    company: 'Bidinn',
    location: 'Noida, India',
    tasks: [
      'Designed and implemented scalable backend architecture using NestJS, TypeORM, and MySQL, enabling efficient handling of high traffic and optimized database queries.',
      'Improved application performance by integrating Redis caching, reducing database load by 35% and enhancing API response times by 68%.',
      'Developed secure authentication and role-based authorization mechanisms using JWT, Passport.js, and @casl/ability to enforce fine-grained access control.',
      'Integrated BullMQ for efficient background job processing and scheduling, cron jobs for periodic tasks, along with bull-board for real-time job monitoring.',
      'Built a robust file management system by integrating AWS S3 for file uploads and secure media storage.',
      'Enhanced real-time features like notifications and live updates using Socket.IO with Redis adapter for scalability.',
      'Integrated Razorpay API for payments and MSG91 API for notifications, enhancing communication and transaction workflows.',
      'Automated testing and quality assurance using Jest, Supertest, and Sonar Scanner, ensuring robust, reliable, and maintainable code.',
      'Developed interactive API documentation with Swagger, improving developer onboarding and API usability.',
      'Implemented Prometheus, Grafana, Loki, and Sentry for real-time performance monitoring, system metrics tracking, centralized logging, and error tracking.',
      'Improved developer productivity by leveraging tools like Husky, lint-staged, Prettier, and release-it for pre-commit checks, consistent code formatting, and streamlined release management.',
    ],
  },
  {
    date: 'Jan 2023 – Jan 2024',
    role: 'Full-Stack Engineer',
    company: 'Flavum Healthtech',
    location: 'New Delhi',
    tasks: [
      'Developed web applications using React.js and Tailwind CSS, improving site load time by 20% while ensuring a responsive user experience.',
      'Collaborated with design and product teams to integrate APIs, resulting in a 15% increase in feature usability.',
      'Participated in code reviews, optimizing code quality and reducing bugs by 30%.',
      'Ensured code quality and stability by writing and executing tests, helping to catch bugs early and maintain robust application performance.',
      'Integrated Zoho CRM and other tools for lead generation tracking and used Zoho Career Site to streamline the hiring pipeline.',
      'Produced documentation for new features, facilitating a smoother handover process and reducing onboarding time by 15%.',
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
                  </span>
                </time>
                <h3 className='ml-9 text-lg font-semibold text-gray:800 dark:text-white'>
                  {experience.company} <span className='text-gray-400'>({experience.location})</span>
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
