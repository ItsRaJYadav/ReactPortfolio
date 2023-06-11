import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useSpring, animated } from 'react-spring';
import { useAuth0 } from '@auth0/auth0-react'
import pic from './Hero.webp'
import Footer from '../../global/Footer';
import Swal from 'sweetalert2'


function HomePage() {
    const { isAuthenticated } = useAuth0();
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



    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
        delay: 500
    });

    const fadeInUp = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000 },
        delay: 1000
    });

    const bounce = useSpring({
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.1)' },
        config: { duration: 1000 },
        reset: true,
        reverse: true,
        loop: true,
        delay: 2000
    });

    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(40px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500, delay: 200 },
    });

    const imageAnimation = useSpring({
        from: { transform: 'scale(0.8) rotate(-45deg)', opacity: 0 },
        to: { transform: 'scale(1) rotate(0deg)', opacity: 1 },
        config: { tension: 200, friction: 10 },
    });

    //preload the picture
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = pic;
        link.as = 'image';
        document.head.appendChild(link);
    }, []);

    return (
        <>
            <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">

                <div className="max-w-4xl w-full mx-auto px-4">


                    <animated.h1 style={{ ...fade, ...scale }} className="text-3xl sm:text-5xl font-bold mb-2 text-white text-center mt-3">
                        Hi, My Name is <span style={{ color: '#69B4FF' }}>RaJ</span>
                    </animated.h1>

                    <animated.p style={fadeIn} className="text-2xl text-gray-300 mb-8 text-center">
                        I'm a developer with experience in ReactJS, Tailwind CSS, and Bootstrap.
                    </animated.p>
                    <div className="flex flex-wrap justify-center mb-4">
                        <animated.span style={fadeInUp} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                            Full-stack Developer
                        </animated.span>
                        <animated.span style={fadeInUp} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                            MERN Stack
                        </animated.span>

                        <animated.span style={fadeInUp} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                            React Developer
                        </animated.span>
                        <animated.span style={fadeInUp} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-4">
                            BackEnd Developer
                        </animated.span>

                    </div>
                    <div className="flex items-center justify-center mb-8">
                        <animated.div style={fade}>
                            <animated.div style={scale}>
                                <div className="h-60 w-55 rounded-full overflow-hidden">
                                    <img className="h-full w-full object-cover" src={pic} alt="Developer" />
                                </div>
                            </animated.div>
                        </animated.div>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-8">
                        <animated.button style={fadeInUp} className="flex items-center justify-center mt-2">
                            <a href="https://github.com/ItsRaJYadav" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4" aria-label="Link to my GitHub profile">
                                <FaGithub className="h-8 w-8" />
                            </a>
                            <a href="https://www.linkedin.com/in/rajydv07/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4" aria-label="Link to my LinkedIn profile">
                                <FaLinkedin className="h-8 w-8" />
                            </a>
                            <a href="https://www.instagram.com/its_raj_ydv/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4" aria-label="Link to my Instagram profile">
                                <FaInstagram className="h-8 w-8" />
                            </a>
                            <a href="https://www.facebook.com/IamRAJAO9" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-300 hover:text-gray-400 mr-4" aria-label="Link to my Facebook profile">
                                <FaFacebook className="h-8 w-8" />
                            </a>


                        </animated.button>
                        <div className="flex mt-10">
                            <animated.button style={buttonAnimation}
                                onClick={handleClick}
                                className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-4"
                            >
                                Contact Me
                            </animated.button>

                            <animated.button style={buttonAnimation}
                                onClick={() => {
                                    if (!isAuthenticated) {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'you are not authenticated',
                                            text: 'Please log in to view the resume.'
                                        });
                                        return;
                                    }
                                    window.open("https://drive.google.com/file/d/1i5f3D4fO7GSY_LUI53y42_eFsJ2iEzXk/view?usp=sharing");
                                }}

                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            >
                                View Resume
                            </animated.button>


                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default HomePage;
