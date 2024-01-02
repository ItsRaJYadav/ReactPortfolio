'use client';
import AOS from 'aos';
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react';
import { DiMongodb, DiMysql, DiRedis } from 'react-icons/di';
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJenkins,
  FaJira,
  FaNodeJs,
  FaReact,
  FaServer,
  FaShopify,
  FaWordpress,
} from 'react-icons/fa';
import { IoServer } from 'react-icons/io5';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiAdobephotoshop,
  SiApachekafka,
  SiBootstrap,
  SiElasticsearch,
  SiFirebase,
  SiGraphql,
  SiKubernetes,
  SiNextdotjs,
  SiNginx,
  SiPhp,
  SiPostman,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';

import 'aos/dist/aos.css';

const skillsData = [
  { icon: <RiJavascriptFill color='#F6C915' />, name: 'JavaScript' },
  { icon: <SiTypescript color='#2965F1' />, name: 'TypeScript' },
  { icon: <FaNodeJs color='#3E863D' />, name: 'Node.js' },
  { icon: <FaServer color='#F6C915' />, name: 'Express.js' },
  { icon: <FaReact color='#61DBFB' />, name: 'React' },
  { icon: <TbBrandReactNative color='#61DBFB' />, name: 'React Native' },
  { icon: <SiNextdotjs color='#000000' />, name: 'Next.js' },
  { icon: <SiRedux color='#764abc' />, name: 'Redux' },
  { icon: <DiMongodb color='#4CAF50' />, name: 'MongoDB' },
  { icon: <DiMysql color='#00758F' />, name: 'MySQL' },
  { icon: <SiFirebase color='#facc15' />, name: 'Firebase' },
  { icon: <SiGraphql color='#e535ab' />, name: 'GraphQL' },
  { icon: <TbApi color='#b384bb' />, name: 'REST API' },

  { icon: <FaHtml5 color='#E34F26' />, name: 'HTML5' },
  { icon: <SiTailwindcss color='#06B6D4' />, name: 'Tailwind CSS' },
  { icon: <SiSocketdotio color='#06B6D4' />, name: 'Socket.IO ' },


];

const AdditionalskillsData = [
  { icon: <FaAws color='#FF9900' />, name: 'AWS' },
  { icon: <SiKubernetes color='#00599C' />, name: 'Kubernetes' },
  { icon: <SiApachekafka color='#000000' />, name: 'Apache Kafka' },
  { icon: <DiRedis color='#D82C20' />, name: 'Redis' },
  { icon: <SiElasticsearch color='#d7689d' />, name: 'Elastic search' },
  { icon: <SiNginx color='#22c55e' />, name: 'Nginx' },
  { icon: <IoServer color='#d7689e' />, name: 'Microservices' },
  { icon: <FaShopify color='#7dc242 ' />, name: 'Shopify' },
  { icon: <FaWordpress color='#00749C' />, name: 'Wordpress' },
  { icon: <SiPhp color='#777BB3' />, name: 'PHP' },
  { icon: <SiBootstrap color='#563d7c' />, name: 'Bootstrap' },
];


const ToolsData = [
  { icon: <FaDocker color='#0000FF.' />, name: 'Docker' },
  { icon: <FaGithub color='#333' />, name: 'GitHub' },
  { icon: <FaGit color='#F1502F' />, name: 'Git' },
  { icon: <SiPostman color='#FF6C37' />, name: 'Postman' },
  { icon: <SiVisualstudiocode color='#0078d7' />, name: 'VS Code' },
  { icon: <FaJira color='#0078d7' />, name: 'Jira' },
  { icon: <FaJenkins color='#22c55e' />, name: 'Jenkins ' },
  { icon: <SiAdobephotoshop color='#61DBFB' />, name: 'Adobe Photoshop' },

];

interface SkillCardProps {
  icon: ReactNode;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <div className='mb-5 mr-5 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-7 shadow-lg shadow-fuchsia-500 dark:bg-gray-800 dark:shadow-blue-500'>
      <motion.div
        className='text-6xl text-blue-500 '
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        {icon}
      </motion.div>
      <div className='text-lg font-medium'>{name}</div>
    </div>
  );
};

const SkillsPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeTab, setActiveTab] = useState('techSkills');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const renderSkills = () => {
    if (activeTab === 'techSkills') {
      return skillsData.map((skill, index) => (
        <motion.div
          key={index}
          className='w-full md:w-64'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={skill.icon} name={skill.name} />
        </motion.div>
      ));
    } else if (activeTab === 'techStack') {
      return AdditionalskillsData.map((skill, index) => (
        <motion.div
          key={index}
          className='w-full md:w-64'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={skill.icon} name={skill.name} />
        </motion.div>
      ));
    } else if (activeTab === 'tools' && ToolsData) {
      return ToolsData.map((skill, index) => (
        <motion.div
          key={index}
          className='w-full md:w-64'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={skill.icon} name={skill.name} />
        </motion.div>
      ));
    }
    return null;
  };


  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-5 mt-7 text-4xl font-semibold md:text-5xl lg:text-4xl text-gray-800 dark:text-gray-200 relative'
      >
        My Skills
        <span className='absolute bottom-0 left-0 w-36 mt-2 border-b-4 border-blue-500 dark:border-gray-200'></span>
      </motion.h1>
      <div className='flex mb-5'>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mr-4 px-4 py-2 rounded focus:outline-none focus:bg-blue-500 focus:text-gray-100 transition-colors duration-300 ${activeTab === 'techSkills' ? 'bg-blue-500 text-gray-100' : 'bg-gray-300 text-gray-700'
            } hover:bg-blue-500 hover:text-gray-100`}
          onClick={() => handleTabChange('techSkills')}
        >
          Tech Skills
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`px-4 py-2 rounded focus:outline-none focus:bg-blue-500 focus:text-gray-100 transition-colors duration-300 ${activeTab === 'techStack' ? 'bg-blue-500 text-gray-100' : 'bg-gray-300 text-gray-700'
            } hover:bg-blue-500 hover:text-gray-100`}
          onClick={() => handleTabChange('techStack')}
        >
          Tech (familiar)
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`px-4 ml-3 py-2 rounded focus:outline-none focus:bg-blue-500 focus:text-gray-100 transition-colors duration-300 ${activeTab === 'tools' ? 'bg-blue-500 text-gray-100' : 'bg-gray-300 text-gray-700'
            } hover:bg-blue-500 hover:text-gray-100`}
          onClick={() => handleTabChange('tools')}
        >
          Tech Tools
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mt-2 grid grid-cols-2 gap-4 md:grid-cols-4'
      >
        {renderSkills()}
      </motion.div>
    </div>

  );
};

export default SkillsPage;
