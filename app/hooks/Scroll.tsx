import { useState, useEffect } from 'react';

const Scroll = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);

  const handleScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};

export default Scroll;
