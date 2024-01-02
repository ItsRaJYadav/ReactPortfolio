'use client'
import React, { useState } from 'react';

import Loader from '@/components/layout/Loader';

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };
  
  return (
    <div className='flex h-screen items-center justify-center py-5'>
      {isLoading && (
        <Loader />
      )}


      <iframe
        className={`h-full border-none ${isLoading ? 'hidden' : 'w-full max-w-3/4'}`}
        title='PDFViewer'
        src='https://drive.google.com/file/d/1IFoxD5wz2ODwhwCTPNcbIHG8sh6A8hps/preview'
        allow='autoplay'
        onLoad={handleLoad}
      ></iframe>


    </div>
  );
}

export default Page;
