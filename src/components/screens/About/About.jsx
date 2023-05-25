import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPlane, faMusic } from '@fortawesome/free-solid-svg-icons';
import pic from './Pic.jpg'
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8">
                        <motion.h2
                            className="text-4xl font-extrabold text-white sm:text-5xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            About Me
                        </motion.h2>

                        <ul className="mt-4 max-w-2xl text-lg text-white leading-7 list-disc list-inside">
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                I'm a MERN stack developer experienced in ReactJS, Tailwind CSS, and Bootstrap.
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                I have a strong understanding of Data Structures and Algorithms <strong>#DSA</strong> allowing me to build efficient applications.
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                I work with MongoDB, Express.js, and Node.js to create clean, maintainable code for dynamic, responsive web applications.
                            </motion.li>
                        </ul>
                    </div>

                    <motion.div
                        className="lg:mt-0 lg:w-3/5"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.img
                            className="h-auto w-full object-cover rounded-lg shadow-lg"
                            src={pic}
                            alt="Profile"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="my-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-white text-3xl font-bold mb-8">My Hobbies</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <motion.div
                            className="rounded-lg shadow-lg p-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FontAwesomeIcon
                                icon={faCode}
                                className="text-white text-6xl mb-6"
                            />
                            <h2 className="text-white text-xl font-bold mb-2">Coding</h2>
                            <p className="text-white text-sm leading-6">
                                I love to solve problems and build things that make a difference. My favorite languages are C++ and JavaScript, but I'm always eager to learn new ones.
                            </p>
                        </motion.div>

                        <motion.div
                            className="rounded-lg shadow-lg p-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FontAwesomeIcon
                                icon={faPlane}
                                className="text-white text-6xl mb-6"
                            />
                            <h2 className="text-white text-xl font-bold mb-2">Traveling</h2>
                            <p className="text-white text-sm leading-6">
                                Exploring new cultures and trying different foods are some of my favorite things to do. I've been fortunate enough to travel to several places and I can't wait to visit more.
                            </p>
                        </motion.div>

                        <motion.div
                            className="rounded-lg shadow-lg p-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FontAwesomeIcon
                                icon={faMusic}
                                className="text-white text-6xl mb-6"
                            />
                            <h2 className="text-white text-xl font-bold mb-2">Music</h2>
                            <p className="text-white text-sm leading-6">
                                Listening to music helps me relax and focus. I enjoy a wide range of genres, from classical to pop, and I'm always looking for new artists to discover.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
