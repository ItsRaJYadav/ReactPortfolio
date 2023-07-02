import React, { useState } from 'react';
import favicon from './favicon.ico'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiX, FiMenu } from 'react-icons/fi';
import { FaRProject } from 'react-icons/fa';
import { HiHome, HiUserCircle } from 'react-icons/hi';
import { SiAboutdotme } from 'react-icons/si';
import { BsStack } from 'react-icons/bs';
import { MdDeveloperMode, MdViewTimeline, MdOutlineContactPhone, MdLogin } from 'react-icons/md';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { user, isAuthenticated } = useAuth0();



  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between">

          <NavLink to='/' className="flex items-center" >
            <img
              src={favicon}
              className="h-6 mr-3 sm:h-9 w-6 sm:w-9"
              alt=" Logo"


            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              RaJ Yadav
            </span>
          </NavLink>
          <div className="md:hidden ml-24">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <ul className="hidden md:flex space-x-4 mt-4 md:mt-0 mx-auto text-lg border-gray-100 rounded-lg">
          <li>
            <Link
              to="/"
              className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/' ? 'bg-blue-500' : ''
                }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/about' ? 'bg-blue-500' : ''
                }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/skills' ? 'bg-blue-500' : ''
                }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/timelines"
              className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/timelines' ? 'bg-blue-500' : ''
                }`}
            >
              Timelines
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/portfolio' ? 'bg-blue-500' : ''
                }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/contacts' ? 'bg-blue-500' : ''
                }`}
            >
              Contact
            </Link>
          </li>

          {isAuthenticated ? (
            <li>
              <Link
                to="/user"
                className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/user' ? 'bg-blue-500' : ''
                  }`}
              >
                {user?.name}
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className={`py-2 pl-3 pr-4 text-gray-100 rounded cursor-pointer ${location.pathname === '/login' ? 'bg-blue-500' : ''
                  }`}
              >
                Login
              </Link>
            </li>
          )}
        </ul>


        {isMobileMenuOpen && (
          <div className={`fixed top-0 left-0 w-full h-full bg-black z-40 backdrop-filter backdrop-blur-lg bg-opacity-70`} />

        )}

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}
        >
          <button
            className="text-white absolute top-4 right-4 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FiX />
          </button>
          {/* off canvas */}
          <ul className="flex flex-col items-start space-y-4  p-4">
            
              <FaRProject className="text-4xl text-blue-600 flex justify-center items-center ml-16 mb-1" />
            

            <li className="flex items-center">
              <HiHome size={18} className="mr-5" />
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="flex items-center">
              <SiAboutdotme size={18} className="mr-5" />
              <Link to="/about" onClick={closeMobileMenu}>About</Link>
            </li>
            <li className="flex items-center">
              <BsStack size={18} className="mr-5" />
              <Link to="/skills" onClick={closeMobileMenu}>Skills</Link>
            </li>
            <li className="flex items-center">
              <MdDeveloperMode size={18} className="mr-5" />
              <Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
            </li>
            <li className="flex items-center">
              <MdViewTimeline size={18} className="mr-5" />
              <Link to="/timelines" onClick={closeMobileMenu}>Timelines </Link>
            </li>
            <li className="flex items-center">
              <MdOutlineContactPhone size={18} className="mr-5" />
              <Link to="/contacts" onClick={closeMobileMenu}>Contact</Link>
            </li>
            {isAuthenticated ? (
              <li className="flex items-center">
                <HiUserCircle size={25} className="mr-2" />

                <Link
                  to="/user"
                  className="pl-3 pr-4 text-gray-100 rounded cursor-pointer " onClick={closeMobileMenu}
                >
                  {user?.name}
                </Link>
              </li>
            ) : (
              <li className="flex items-center">
                <MdLogin size={18} className="mr-2" />

                <Link
                  to="/login"
                  className=" pl-3 pr-4 text-gray-100 rounded cursor-pointer " onClick={closeMobileMenu}

                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
