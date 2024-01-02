'use client';
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { AiOutlineFieldString } from "react-icons/ai";
import { BsFiletypeJson } from "react-icons/bs";
import { FaBootstrap, FaExternalLinkAlt, FaFileExcel, FaFilePdf, FaGithub, FaHtml5, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import { FiFramer } from "react-icons/fi";
import { SiAuth0, SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiMysql, SiNextdotjs, SiSanity, SiSocketdotio, SiTailwindcss, SiThealgorithms, SiThreedotjs, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  githubUrl: string;
  projectUrl?: string;
  tech: TechInfo[];
  category: string;
}

interface TechInfo {
  name: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'BookADoc',
    image: '/images/bookadoc.jpg',
    description:
      'BookADoc web app is an online platform for instant and seamless medical appointment booking with real-time availability.',
    githubUrl: 'https://github.com/ItsRaJYadav/bookadoc',
    projectUrl: 'https://bookadoc.vercel.app',
    category: 'Web Development',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss key="tailwind" /> },
      { name: 'Node Js', icon: <FaNodeJs key="node" /> },
      { name: 'Mysql ', icon: <SiMysql key="Mongodb" /> },
      { name: 'Socket.io', icon: <SiSocketdotio key="socket" /> },
      { name: 'Stripe', icon: <FaStripe key="stripe" /> },
    ],
  },
  {
    id: 2,
    title: 'NativeTalk Mobile App',
    image: '/images/native.png',
    category: 'App Development',
    description:
      'A real-time messaging platform enabling instant communication, multimedia sharing, user authentication, and seamless functionality.',
    githubUrl: 'https://github.com/ItsRaJYadav/NativeTalk',
    tech: [
      { name: 'ReactNative', icon: <TbBrandReactNative key="Native" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss key="tailwind" /> },
      { name: 'Node Js', icon: <FaNodeJs key="node" /> },
      { name: 'Firebase ', icon: <SiFirebase key="database" /> },
      { name: 'Socket.io', icon: <SiSocketdotio key="socket" /> },
      { name: 'Jsonwebtokens ', icon: <SiJsonwebtokens key="stripe" /> },
    ],
  },
  {
    id: 3,
    title: 'Pizza King',
    image: '/images/pizza.png',
    category: 'Web Development',
    description:
      'Pizza King web app is an online platform for ordering pizzas. It offers a range of pizzas, sides, drinks, and desserts .',
    githubUrl: 'https://github.com/ItsRaJYadav/PizzaKing',
    projectUrl: 'https://pizzaking.onrender.com/',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss key="tailwind" /> },
      { name: 'Node Js', icon: <FaNodeJs key="node" /> },
      { name: 'Express', icon: <SiExpress key="node" /> },
      { name: 'MongoDB', icon: <SiMongodb key="database" /> },
      { name: 'Stripe', icon: <FaStripe key="stripe" /> },
    ],
  },
  {
    id: 4,
    title: 'MetaDoor :Real Estate',
    category: 'Web Development',
    image: '/images/Dribble-Jelly-for-Pickolab-Studio.webp',
    description:
      'This is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application designed for renting and selling properties.',
    githubUrl: 'https://github.com/ItsRaJYadav/MetaDoor',
    projectUrl: 'https://meta-door.vercel.app',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss key="tailwind" /> },
      { name: 'Node Js', icon: <FaNodeJs key="node" /> },
      { name: 'Firebase ', icon: <SiFirebase key="database" /> },
      { name: 'Socket.io', icon: <SiSocketdotio key="socket" /> },
      { name: 'Jsonwebtokens ', icon: <SiJsonwebtokens key="stripe" /> },
    ],
  },

  {
    id: 5,
    title: 'ScribbleSpot',
    category: 'Web Development',
    image: '/images/blog.png',
    description:
      'This is a blog website built with Next.js, TypeScript, React, and SanityIO. It have features like User authentication, read and comment on blog posts, and modern design.',
    githubUrl: 'https://github.com/ItsRaJYadav/MyBlogs',
    projectUrl: 'https://scribblespot7.vercel.app/',
    tech: [
      { name: 'Next.js ', icon: <SiNextdotjs key="react" /> },
      { name: 'Typescript ', icon: <SiTypescript key="SiTypescript " /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss key="tailwind" /> },
      { name: 'Node Js', icon: <FaNodeJs key="node" /> },
      { name: 'Sanity  ', icon: <SiSanity key="cms" /> },
      { name: 'Next Auth', icon: <SiAuth0 key="SiAuth0" /> },

    ],
  },
  {
    id: 6,
    title: 'Portfolio',
    image: '/images/portfolio.png',
    category: 'Web Development',
    description:
      'This portfolio is made up with Next.js, TypeScript, and Tailwind CSS. It includes all my personal details and experiances as well as skills',
    githubUrl: 'https://github.com/ItsRaJYadav/ReactPortfolio',
    projectUrl: 'https://rajydv.vercel.app',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Next.js ', icon: <SiNextdotjs key="react" /> },
      { name: 'Typescript ', icon: <SiTypescript key="SiTypescript " /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss key="tailwind" /> },
      { name: 'FramerMotion', icon: <FiFramer key="FiFramer" /> },
      { name: 'Three.js', icon: <SiThreedotjs key="SiThreedotjs" /> },


    ],
  },


  {
    id: 7,
    title: 'Task Tracker',
    image: '/images/task.png',
    category: 'Web Development',
    description:
      'TaskTracer App is a simple task management application that helps you stay organized and productive. With Todo App, you can create, update, and track your tasks easily.',
    githubUrl: 'https://github.com/ItsRaJYadav/TaskTracker',
    projectUrl: 'https://tasktrackerapp.cyclic.app',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss key="tailwind" /> },
      { name: 'Node Js', icon: <FaNodeJs key="node" /> },
      { name: 'Express', icon: <SiExpress key="node" /> },
      { name: 'MongoDB', icon: <SiMongodb key="database" /> },
      { name: 'Jsonwebtokens ', icon: <SiJsonwebtokens key="Jsonwebtokens" /> },

    ],
  },

  {
    id: 8,
    title: 'TextInfo',
    image: '/images/textinfo.png',
    category: 'Web Development',
    description:
      'TextInfo gives you a way to analyze your text quickly and efficiently, it is a dynamic online tool used for counting words, characters, sentences, paragraphs and pages in real time',
    githubUrl: 'https://github.com/ItsRaJYadav/TextInfo',
    projectUrl: 'https://text-info.netlify.app/',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Bootstrap ', icon: <FaBootstrap key="FaBootstrap " /> },
      { name: 'FaHtml5 ', icon: <FaHtml5 key="FaHtml5 " /> },
      { name: 'String ', icon: <AiOutlineFieldString key="String" /> },
      { name: 'Algorithms ', icon: <SiThealgorithms key="database" /> },

    ],
  },

  {
    id: 9,
    title: 'Fake Data Generator',
    category: 'Web Development',
    image: '/images/fakedata.png',
    description:
      'A fake data generator app generates fictitious data for testing. Users can export data to PDF, JSON, and Excel formats for further use and testing.',
    githubUrl: 'https://github.com/ItsRaJYadav/fakedata',
    projectUrl: 'https://fakedatagenerator.netlify.app/',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Bootstrap ', icon: <FaBootstrap key="FaBootstrap " /> },
      { name: 'FaHtml5 ', icon: <FaHtml5 key="FaHtml5 " /> },
      { name: 'Excel  ', icon: <FaFileExcel key="FaHtml5 " /> },
      { name: 'FaFilePdf ', icon: <FaFilePdf key="String" /> },
      { name: 'Json  ', icon: <BsFiletypeJson key="database" /> },
    ],
  },
  {
    id: 10,
    title: 'Password Generator & Manager',
    category: 'Web Development',
    image: '/images/password.png',
    description:
      'Discover the power of our MERN-stack Password Manager, offering seamless password management with top-notch security and user-friendly features.',
    githubUrl: 'https://github.com/ItsRaJYadav/passwordManager',
    projectUrl: 'https://passwordmanagerapp.vercel.app/',
    tech: [
      { name: 'React Js', icon: <FaReact key="react" /> },
      { name: 'Bootstrap ', icon: <FaBootstrap key="FaBootstrap " /> },
      { name: 'FaHtml5 ', icon: <FaHtml5 key="FaHtml5 " /> },
      { name: 'String ', icon: <AiOutlineFieldString key="String" /> },
      { name: 'Algorithms ', icon: <SiThealgorithms key="database" /> },
    ],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);


  return (
    <div
      key={project.id}
      className='overflow-hidden rounded-lg bg-gray-100 shadow-md dark:bg-gray-700'
    >
      <motion.img
        className='h-48 w-full object-cover object-center'
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      />
      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-medium text-gray-700 dark:text-gray-100'>
            {project.title}
          </h2>
          <div className='flex items-center'>
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='mr-3 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100'
              aria-label='Link to my GitHub profile'
            >
              <FaGithub />
            </a>
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300'
                aria-label='Link to my website'
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
        <hr className='my-4 border-gray-700 dark:border-gray-100' />
        <p className='text-gray-700 dark:text-white'>{project.description}</p>
        <div className="mt-4 flex flex-wrap">
          {project.tech.map((tech, index) => (
            <div
              key={index}
              className="mb-2 mr-2 p-1 text-4xl text-gray-700 dark:text-white relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {tech.icon}
              {hoveredTech === tech.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md text-xs">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState<string>('Web Development');

  const filteredProjects = (category: string) => {
    return projects.filter((project) => project.category === category);
  };

  const categories = Array.from(new Set(projects.map((project) => project.category)));
  return (

    <div className='min-h-screen py-10'>
      <div className='text-white'>
        <h2 className='text-center text-4xl font-extrabold tracking-tight text-gray-700 dark:text-gray-100'>
          My Recent Projects
        </h2>
      </div>
      <div className='flex justify-center mt-6 space-x-6'>
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg font-semibold focus:outline-none ${activeCategory === category ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='mx-auto max-w-7xl py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects(activeCategory).map((project) => (
            <div key={project.id} title={project.title} className='project-card'>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='animate'>
                <ProjectCard project={project} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
