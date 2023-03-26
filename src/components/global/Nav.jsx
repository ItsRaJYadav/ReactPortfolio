import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import favicon from './favicon.ico'
import './Nav.css'


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
 
  return (
    <div>
      <nav className=" px-2 sm:px-4 py-2.5 rounded bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink to='/' className="flex items-center" onClick={closeMenu}>
            <img
            src={favicon}
              className="h-6 mr-3 sm:h-9 w-6 sm:w-9"
              alt=" Logo" 
              
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              RaJ Yadav
            </span>
          </NavLink>
          <div className="flex md:order-2">
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
              aria-label="Link to my button"
            >
              
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            </button>
          </div>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } md:block items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
