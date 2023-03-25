import React from 'react';

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import pic from './Hero.png'
import { useSpring, animated } from 'react-spring';
import Footer from '../../global/Footer';

// import './Home.css'

function HomePage() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/contacts');

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }
    })

    const scale = useSpring({
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.2)' },
        config: { duration: 1000 },
        reset: true,
        reverse: true,
        loop: true
    })

    return (
        <>
        <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
            <div className="max-w-4xl w-full mx-auto px-4">
                <animated.h1 style={{ ...fade, ...scale }} className="text-5xl font-bold mb-2 text-white text-center mt-3">
                    Hi, My Name is  RaJ
                </animated.h1>
                <p className="text-2xl text-gray-300 mb-8 text-center">
                    I'm a developer with experience in ReactJS, Tailwind CSS, and Bootstrap.
                </p>
                <div className="flex flex-wrap justify-center mb-4">
                    <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                        Full-stack Developer
                    </span>
                    <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                        React Developer
                    </span>
                    <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                        MERN Stack
                    </span>
                    <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                        Backend Developer
                    </span>
                </div>
                <div className="flex items-center justify-center mb-8">
                    <div className="h-60 w-55 rounded-full overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={pic}
                            alt="Developer"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-center justify-center mt-2">
                        <a href="https://github.com/ItsRaJYadav" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4">
                            <FaGithub className="h-8 w-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/rajydv07/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4">
                            <FaLinkedin className="h-8 w-8" />
                        </a>
                        <a href="https://www.instagram.com/its_raj_ydv/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4">
                            <FaInstagram className="h-8 w-8" />
                        </a>
                        <a href="https://www.facebook.com/IamRAJAO9" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4">
                            <FaFacebook className="h-8 w-8" />
                        </a>
                    </div>
                    <div className="flex mt-10">
                        <button
                            onClick={handleClick}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                        >
                            Contact Me
                        </button>
                        <button
                            onClick={() => {
                                window.open("https://drive.google.com/file/d/1zrwSNer5symmO5jzgj33MLo0E-bERw-m/view?usp=sharing");
                            }}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        >
                            View Resume
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    );
}

export default HomePage;
