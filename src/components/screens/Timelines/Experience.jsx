import React from 'react'

const Experience = () => {
    return (
        <>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        February 2022
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                        Front End Developer @ XYZ Company
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Determining the structure and design of web pages. 

                    </p>

                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        March 2023
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                        UI/UX designer in Figma
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in Figma and we keep a
                        parity between the two versions even as we update the project.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        April 2022
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                        Content Writer
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        i am a content Writer in the company
                    </p>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        April 2022
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                        MERN Stack Developer
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Work on back-end & front-end development of core scripts using NodeJS/ MongoDB/React.js/Angular/Express /Redux.
                    </p>
                </li>
            </ol>
        </>
    )
}

export default Experience
