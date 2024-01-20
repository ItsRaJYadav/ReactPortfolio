'use client'
import React, { useState } from 'react';

import Loader from '@/components/layout/Loader';

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };
  const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME;
  return (
    <>
      <div className='flex h-screen items-center justify-center py-5'>
        {isLoading && (
          <Loader />
        )}
        <iframe
          className={`h-full border-none ${isLoading ? 'hidden' : 'w-full max-w-3/4'}`}
          title='PDFViewer'
          src={RESUME_LINK}
          allow='autoplay'
          onLoad={handleLoad}
        ></iframe>
      </div>

      {!isLoading && (
        <div className='flex flex-col items-center justify-center py-5'>
          <a
            href={RESUME_LINK}
            target='_blank'
            rel='noopener noreferrer'
            download='resume.pdf'
            className='mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full text-center font-semibold tracking-wide transition-transform transform hover:scale-105 '
          >
            Download Resume
          </a>
        </div>

      )}
    </>

  );
}

export default Page;
