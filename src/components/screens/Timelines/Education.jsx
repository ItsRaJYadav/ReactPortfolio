import React from 'react'
import { useSpring, animated } from 'react-spring';


const Education = () => {
    const scale = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.2)' },
    config: { duration: 1000 },
    reset: true,
    reverse: true,
    loop: true,
  });

    return (
        <>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                <animated.div style={scale} className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />                    <time className="mb-1 text-sm font-normal leading-none text-gray-100">
                    June 2019-May 2023
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                    J.C. Bose University of Science and Technology, YMCA
                    </h3>
                    <p className="mb-4 text-base font-normal text-white ">
                    B.tech degree in the Specialization in electronics and computer Enginering

                    </p>

                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-100">
                    June 2016-May 2018
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                    Progressive Central High School
                    </h3>
                    <p className="text-base font-normal text-white">
                    I have completed the secondary school from here which is equivalent to the 10+2 degree course means that intermediate after matriculations
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-100">
                    April 2014-
                        May 2016
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                    Woodbine Modern School
                    </h3>
                    <p className="text-base font-normal text-white">
                    Secondary Education
                    </p>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-100">
                    February 2006-March 2014
                    </time>
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                    Biraul Central School
                    </h3>
                    <p className="text-base font-normal text-white">
                    Primary Education
                    </p>
                </li>
            </ol>
        </>
    )
}

//


export default Education