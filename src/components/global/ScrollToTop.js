// import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa';

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const currentScrollPosition = window.pageYOffset;

//     if (currentScrollPosition > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {isVisible && (
//         <button
//           className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
//           onClick={scrollToTop}
//         >
//           Up<FaArrowUp className="text-lg" />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTopButton;
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const UpArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-lg" />
    </button>

  );
};

export default UpArrow;

