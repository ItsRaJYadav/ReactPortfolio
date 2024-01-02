'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { BsStack } from 'react-icons/bs';
import { FaRProject } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  MdDeveloperMode,
  MdOutlineContactPhone,
  MdViewTimeline,
} from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';

import DarkModeButton from '@/utils/DarkModeToggle';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className=' text-slate-800 dark:bg-gray-800 dark:text-white'>
        <nav className='container mx-auto flex flex-col items-center justify-between px-4 py-2 md:flex-row'>
          <div className='flex flex-row items-center justify-between'>
            <Link href='/' className='flex items-center'>
              <Image
                height={500}
                width={500}
                src='/images/R_logo.svg.png'
                className='mr-3 h-6 w-6 sm:h-9 sm:w-9'
                alt=' Logo'
              />
              <span className='self-center whitespace-nowrap text-xl font-semibold '>
                RaJ Yadav
              </span>
            </Link>

            <div className='ml-24 flex items-center justify-between md:hidden'>
              <div className='mr-5'>
                <DarkModeButton />
              </div>
              <button
                className=' ml-2 focus:outline-none'
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
              </button>
            </div>
          </div>

          <ul className='mx-auto p-1 mt-4 hidden space-x-4 rounded-lg border-gray-100 text-lg md:mt-0 md:flex shadow-sm shadow-amber-300'>
            <li>
              <Link
                href='/about'
                
                className={pathname === "/about"
                  ? "border-b-2 border-blue-500"
                  : "cursor-pointer rounded py-2  pl-3 pr-4"}>

                About
              </Link>
            </li>
            <li>
              <Link
                href='/skills'
                className={pathname === "/skills"
                  ? "border-b-2 border-blue-500"
                  : "cursor-pointer rounded py-2  pl-3 pr-4"}>
              
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='/experience'
                className={pathname === "/experience"
                  ? "border-b-2 border-blue-500"
                  : "cursor-pointer rounded py-2  pl-3 pr-4"}>
                Experience
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className={pathname === "/projects"
                  ? "border-b-2 border-blue-500"
                  : "cursor-pointer rounded py-2  pl-3 pr-4"}>
                Projects
              </Link>
            </li>

            <li>
              <Link
                href='/contacts'
                className={pathname === "/contacts"
                  ? "border-b-2 border-blue-500"
                  : "cursor-pointer rounded py-2  pl-3 pr-4"}>
                Contact
              </Link>
            </li>

            <li className=' cursor-pointer rounded'>
              <DarkModeButton />
            </li>
          </ul>

          {isMobileMenuOpen && (
            <div className='fixed left-0 top-0 z-40 h-full w-full bg-black bg-opacity-70 backdrop-blur-lg backdrop-filter' />
          )}

          <div
            className={`fixed right-0 top-0 h-full w-64 transform bg-gray-100 text-slate-800 duration-300 ease-in-out dark:bg-gray-800 dark:text-white ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } z-50`}
          >
            <button
              className='absolute right-4 top-4 focus:outline-none'
              onClick={toggleMobileMenu}
            >
              <FiX size={35} />
            </button>
            {/* off canvas */}
            <ul className='flex flex-col items-start space-y-4  p-4'>
              <FaRProject className='mb-1 ml-16 flex items-center justify-center text-4xl text-blue-600' />

              <li className='flex items-center'>
                <SiAboutdotme size={18} className='mr-5' />
                <Link href='/about' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className='flex items-center'>
                <BsStack size={18} className='mr-5' />
                <Link href='/skills' onClick={closeMobileMenu}>
                  Skills
                </Link>
              </li>
              <li className='flex items-center'>
                <MdDeveloperMode size={18} className='mr-5' />
                <Link href='/projects' onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
              <li className='flex items-center'>
                <MdViewTimeline size={18} className='mr-5' />
                <Link href='/experience' onClick={closeMobileMenu}>
                  Experience{' '}
                </Link>
              </li>

              <li className='flex items-center'>
                <MdOutlineContactPhone size={18} className='mr-5' />
                <Link href='/contacts' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>


            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
