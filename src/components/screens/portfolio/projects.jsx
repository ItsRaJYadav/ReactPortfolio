import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Project 1",
        image: "https://picsum.photos/id/5/200/300.webp",
        description: "This is the first project description.",
        githubUrl: "https://github.com",
        projectUrl: "https://example.com",
        tech1: "#React Js",
        tech2: "#Node Js",
        tech3: "#MongoDb",
    },
    {
        id: 2,
        title: "Project 2",
        image: "https://picsum.photos/id/5/200/300.webp",
        description: "This is the first project description.",
        githubUrl: "https://github.com",
        projectUrl: "https://example.com",
        tech1: "#React Js",
        tech2: "#Node Js",
        tech3: "#MongoDb",
    },
    {
        id: 3,
        title: "Project 3",
        image: "https://picsum.photos/id/5/200/300.webp",
        description: "This is the first project description.",
        githubUrl: "https://github.com",
        projectUrl: "https://example.com",
        tech1: "#React Js",
        tech2: "#Node Js",
        tech3: "#MongoDb",
    },
    // More projects here...
];

const Projects = () => {
    return (
        <div className="min-h-screen bg-gray-900 ">
            <div className="bg-gray-900 text-white ">
                <h2 className="text-4xl font-extrabold tracking-tight text-center text-gray-100">My Recent Projects</h2>
            </div>
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 overflow-hidden shadow-md rounded-lg">
                            <motion.img
                                className="w-full h-48 object-cover object-center"
                                src={project.image}
                                alt={project.title}
                                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                            />
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-medium text-gray-100 dark:text-gray-100">{project.title}</h2>
                                    <div className="flex items-center">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mr-3 text-gray-400 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100" aria-label="Link to my GitHub profile">
                                            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5em' }} />
                                        </a>
                                        {project.projectUrl && (
                                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 cursor-pointer" aria-label="Link to my website ">
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
