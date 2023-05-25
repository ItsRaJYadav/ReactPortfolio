import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import favicon from './favicon.ico'
import './Nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";


const NavBar = () => {
  const navigate = useNavigate();
  const handle = () => navigate('/contacts')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //active menu

  //auth0 fu
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <div>
      <nav className=" px-2 sm:px-4 py-2.5  bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink to='/' className="flex items-center" >
            <img
              src={favicon}
              className="h-6 mr-3 sm:h-9 w-6 sm:w-9"
              alt=" Logo"
              onClick={closeMenu}

            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              RaJ Yadav
            </span>
          </NavLink>
          <div className="flex md:order-2">
            {isAuthenticated ? (
              <Link className="" to="/user">
                <FaUserCircle size={37} className="text-blue-700 hover:text-blue-800 mr-3 md:mr-5" />
              </Link>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            )}

            <button
              onClick={() => {
                handle();
                closeMenu();
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Hire Me
            </button>

            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
              />
            </button>
          </div>

          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } md:block items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
              <li>
                <NavLink
                  onClick={closeMenu}
                  to='/'
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  onClick={closeMenu}
                  activeClassName="active"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/skills'
                  onClick={closeMenu}
                  activeClassName="active"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  activeClassName="active"
                  to='/timelines'
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Timelines
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  activeClassName="active"
                  to='/portfolio'
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  activeClassName="active"
                  to='/contacts'
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contacts
                </NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default NavBar