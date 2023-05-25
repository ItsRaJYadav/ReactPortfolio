import React from 'react';
import { NavLink } from 'react-router-dom';

const Errors = () => {
  return (
    <div className=" dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-8">
          <span className="sr-only">Error 
          </span>404
        </h2>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Sorry, we couldn't find this page.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          But don't worry, you can find plenty of other things on our homepage.
        </p>
        <NavLink
          to="/"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600 dark:bg-violet-400 dark:text-gray-900 dark:hover:bg-violet-500 transition-colors duration-200"
        >
          Back to homepage
        </NavLink>
      </div>
    </div>
  );
};

export default Errors;
