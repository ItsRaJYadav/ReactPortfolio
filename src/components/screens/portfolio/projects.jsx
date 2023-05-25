import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';

const projects = [
    {
        id: 1,
        title: "ScribbleSpot",
        image: "https://scribblespot7.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbannerImgOne.7d04730a.jpg&w=1920&q=75",
        description: "This is a blog website built with Next.js, TypeScript, React, and SanityIO. It have features like User authentication, read and comment on blog posts, and modern design.",
        githubUrl: "https://github.com/ItsRaJYadav/MyBlogs",
        projectUrl: "https://scribblespot7.vercel.app/",
        tech1: "#Next Js",
        tech2: "#TypeScript",
        tech3: "#Sanity.io",
    },
    {
        id: 2,
        title: "Pizza King",
        image: "https://cdn.dribbble.com/users/7389414/screenshots/15375369/pizza-kinng-001_4x.jpg",
        description: "Pizza King web app is an online platform for ordering pizzas. It offers a range of pizzas, sides, drinks, and desserts with an easy-to-use ordering system and delivery options.",
        githubUrl: "https://github.com/ItsRaJYadav/PizzaKing",
        projectUrl: "https://pizzaking.onrender.com/",
        tech1: "#React Js",
        tech2: "#Node Js",
        tech3: "#MongoDb",
    },
    {
        id: 3,
        title: "TextInfo",
        image: "https://fastly.4sqi.net/img/general/600x600/1224272_2j2Jk7wdEgU_hQLcW6XvWaDLdZDRLWbBswNG7C6oMBU.jpg",
        description: "TextInfo gives you a way to analyze your text quickly and efficiently, it is a dynamic online tool used for counting words, characters, sentences, paragraphs and pages in real time",
        githubUrl: "https://github.com/ItsRaJYadav/TextInfo",
        projectUrl: "https://text-info.netlify.app/",
        tech1: "#React Js",
        tech2: "#Bootstrap",
        tech3: "#HTML5",
    },
    {
        id: 3,
        title: "Fake Data Generator",
        image: "https://i.ytimg.com/vi/ZJ6DuODPWhM/maxresdefault.jpg",
        description: "A fake data generator web app in ReactJS generates fictitious data for testing purposes. The app is user-friendly and uses React components and external libraries for generating random data.",
        githubUrl: "https://github.com/ItsRaJYadav/fakedata",
        projectUrl: "https://fakedatagenerator.netlify.app/",
        tech1: "#React Js",
        tech2: "#Bootstrap",
        tech3: "#Rest API",
    },
    // More projects here...
];

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 overflow-hidden shadow-md rounded-lg"
    >
      <motion.img
        className="w-full h-48 object-cover object-center"
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">{project.title}</h2>
          <div className="flex items-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 text-gray-400 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              aria-label="Link to my GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5em' }} />
            </a>
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 cursor-pointer"
                aria-label="Link to my website"
              >
                <FontAwesomeIcon icon={faGoogle} style={{ fontSize: '1.5em' }} />
              </a>
            )}
          </div>
        </div>
        <hr className="my-4  dark:border-gray-700" />
        <p className="text-gray-300 dark:text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap">
          <div className="mr-2 mb-2 py-1 px-2 rounded-md bg-gray-200 text-gray-700 text-sm">{project.tech1}</div>
          <div className="mr-2 mb-2 py-1 px-2 rounded-md bg-gray-200 text-gray-700 text-sm">{project.tech2}</div>
          <div className="mr-2 mb-2 py-1 px-2 rounded-md bg-gray-200 text-gray-700 text-sm">{project.tech3}</div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  

  useEffect(() => {
    const scrollListener = () => {
      const elements = document.querySelectorAll('.project-card');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isElementVisible = rect.top <= window.innerHeight * 0.75;
        if (isElementVisible) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="text-white">
        <h2 className="text-4xl font-extrabold tracking-tight text-center text-gray-100">My Recent Projects</h2>
      </div>
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Element key={project.id} name={project.title} className="project-card">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="animate"
              >
                <ProjectCard project={project} />
              </motion.div>
            </Element>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
