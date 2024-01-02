'use client'
import { useState } from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineBook, AiOutlineCalendar, AiOutlineFileText, AiOutlineIdcard, AiOutlineMail, AiOutlineTwitter, AiOutlineUser,
} from 'react-icons/ai';
import { FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";



const AboutContent: React.FC = () => {
  const aboutData = {
    name: 'Raj Yadav',
    profession: 'Software Developer',
    address: 'New Delhi, India',
    email: 'itsrajyadav@outlook.com',
    phone: '+91 9472040607',
    linkedin: 'https://www.linkedin.com/in/rajydv07',
    github: 'https://github.com/itsrajyadav',
    twitter: 'https://twitter.com/rajydv007',
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 shadow-lime-500">
      <h2 className="text-3xl font-semibold mb-4 text-center">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center mb-4 shadow-md">
          <AiOutlineUser className="text-5xl text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{aboutData.name}</h3>
            <p className="text-gray-600 dark:text-gray-100">{aboutData.profession}</p>
          </div>
        </div>
        <div className="flex items-center mb-4 shadow-md">
          <AiOutlineIdcard className="text-5xl text-blue-500 mr-4" />
          <p className="text-gray-600 dark:text-gray-100">{aboutData.address}</p>
        </div>
        <div className="flex items-center mb-4 shadow-md">
          <AiOutlineMail className="text-5xl text-blue-500 mr-4" />
          <a href={`mailto:${aboutData.email}`} className="text-blue-500 hover:underline">
            {aboutData.email}
          </a>
        </div>
        <div className="flex items-center mb-4 shadow-md">
          <HiOutlineDevicePhoneMobile className="text-5xl text-blue-500 mr-4" />
          <a href={`tel:${aboutData.phone}`} className="text-blue-500 hover:underline">
            {aboutData.phone}
          </a>
        </div>
        
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-500">
          <AiFillLinkedin className="text-4xl" />
        </a>
        <a href={aboutData.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
          <AiFillGithub className="text-4xl" />
        </a>
        <a href={aboutData.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-500">
          <AiOutlineTwitter className="text-4xl" />
        </a>

      </div>
    </div>
  );
};

const ExperienceContent: React.FC = () => {
  const experienceData = [
    {
      company: 'Flavum HealthTech',
      position: 'FullStack Engineer',
      date: 'Aug 2023 - Present',
    },
    {
      company: 'QuickEat Delivery Services',
      position: 'Backend Developer',
      date: 'Jan 2023 - July 2023',
    },
  ];
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 shadow-teal-500">
      <h2 className="text-3xl font-semibold mb-4 text-center">Experience</h2>
      {experienceData.map((experience, index) => (
        <div key={index} className="flex items-center mb-6">
          <FaLaptopCode className="text-5xl text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{experience.company}</h3>
            <p className="text-gray-600 dark:text-gray-100">{experience.position}</p>
            <p className="text-gray-600 dark:text-gray-100">
              <AiOutlineCalendar className="inline mr-2" />
              {experience.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const EducationContent: React.FC = () => {
  const educationData = [
    {
      institution: 'J.C.Bose University of Science & Technology, YMCA',
      degree: 'Bachelor of Technology in Computer Science',
      date: '2019 - 2023',
    },
    {
      institution: 'Woodbine Modern School',
      degree: 'High School',
      date: '2012 - 2018',
    },
  ];
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 shadow-fuchsia-500">
      <h2 className="text-3xl font-semibold mb-4 text-center">Education</h2>
      {educationData.map((education, index) => (
        <div key={index} className="flex items-center mb-6">
          <FaUserGraduate className="text-5xl text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{education.institution}</h3>
            <p className="text-gray-600 dark:text-gray-100">{education.degree}</p>
            <p className="text-gray-600 dark:text-gray-100">
              <AiOutlineCalendar className="inline mr-2" />
              {education.date}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center items-center space-x-4">
        <div
          className={`cursor-pointer flex items-center pb-2 transition duration-300 border-b-2 ${activeTab === 'about' ? 'border-blue-500' : 'border-transparent'
            }`}
          onClick={() => handleTabClick('about')}
        >
          <AiOutlineUser className="mr-2" />
          About
        </div>
 
        <div
          className={`cursor-pointer flex items-center pb-2 transition duration-300 border-b-2 ${activeTab === 'education' ? 'border-blue-500' : 'border-transparent'
            }`}
          onClick={() => handleTabClick('education')}
        >
          <AiOutlineBook className="mr-2" />
          Education
        </div>
        <div
          className={`cursor-pointer flex items-center pb-2 transition duration-300 border-b-2 ${activeTab === 'experience' ? 'border-blue-500' : 'border-transparent'
            }`}
          onClick={() => handleTabClick('experience')}
        >
          <AiOutlineFileText className="mr-2" />
          Experience
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 'about' && <AboutContent />}
        {activeTab === 'experience' && <ExperienceContent />}
        {activeTab === 'education' && <EducationContent />}
      </div>
    </div>
  );
};

export default Tabs;
