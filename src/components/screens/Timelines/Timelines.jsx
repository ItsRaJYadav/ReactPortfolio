import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Timelines = () => {
  const [activeLink, setActiveLink] = useState('education');

  const handleLinkClick = (event) => {
    setActiveLink(event.target.id);
  };
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  })

  return (
    <div className="bg-gray-900  min-h-screen flex flex-col">
      <animated.nav style={fade} className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="sm:ml-6">
                <div className="flex">
                  <Link
                    to="/timelines/education"
                    id="education"
                    onClick={handleLinkClick}
                    className={`text-gray-300 hover:text-white ml-4 px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'education' ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700'
                      }`}
                  >
                    Education
                  </Link>
                  <Link
                    to="/timelines/experience"
                    id="experience"
                    onClick={handleLinkClick}
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'experience' ? 'text-white bg-gray-900' : 'text-gray-300 hover:bg-gray-700'
                      }`}
                  >
                    Experience
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.nav>
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Timelines;
