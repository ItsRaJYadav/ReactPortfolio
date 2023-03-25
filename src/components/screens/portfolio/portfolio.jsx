import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Timelines = () => {
    const [activeLink, setActiveLink] = useState('experience');

    const handleLinkClick = (event) => {
        setActiveLink(event.target.id);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="sm:ml-6">
                                <div className="flex">
                                    <Link
                                        to="/portfolio/projects/"
                                        id="experience"
                                        onClick={handleLinkClick}
                                        className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'experience' ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        to="/portfolio/coding"
                                        id="education"
                                        onClick={handleLinkClick}
                                        className={`text-gray-300 hover:text-white ml-4 px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'education' ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        Coding
                                    </Link>
                                    <Link
                                        to="/portfolio/achievement "
                                        id="achievement"
                                        onClick={handleLinkClick}
                                        className={`text-gray-300 hover:text-white ml-4 px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'achievement' ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        Achievements 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-1 overflow-auto">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Timelines;
