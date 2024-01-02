'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className=' rounded-full p-2 shadow-lg dark:bg-gray-800'
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'dark' ? (
        <FaMoon className='text-gray-700 dark:text-gray-300' />
      ) : (
        <FaSun className='text-yellow-500' />
      )}
    </button>
  );
};

export default DarkModeButton;
