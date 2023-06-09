import React from 'react';

const Experience = () => {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className=" mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-100">
            June 2022 to Aug 2022
          </time>
          <h3 className="text-lg font-semibold text-white dark:text-white">
            MERN Stack Developer @ Ifxy Tech
          </h3> 
          <p className="text-base font-normal text-white dark:text-white">
            Work on back-end & front-end development of core scripts using NodeJS/ MongoDB/React.js/Redux.
          </p>
        </li>
        <li className=" ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-100">
            Jan 2023 to July 2023 ....
          </time>
          <h3 className="text-lg font-semibold text-white dark:text-white">
            {/* Resolved Conflict */}
            QuickEat Delivery Services LLP
          </h3>
          <p className="mb-4 text-base font-normal text-white">
            Worked as a front end React developer
          </p>
        </li>
       
        
       
      </ol>
    </>
  );
};

export default Experience;
