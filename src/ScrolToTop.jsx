import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const ScrolToTopComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
  return (
    <div>
        <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop} 
        >
      <FaArrowUp/>
    </button>
    </div>
  )
}

export default ScrolToTopComponent
