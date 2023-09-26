'use client';

import Icon from '@mdi/react';
import { mdiMenu, mdiMagnify } from '@mdi/js';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);

  const handleScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div
        className={`w-full flex justify-between items-center fixed left-0 top-0 right-0 ${
          isScrolled
            ? 'bg-white text-stone-800 shadow-md'
            : 'bg-transparent text-stone-200 hover:shadow-md hover:bg-white hover:text-black'
        } z-50 py-6 transition-colors duration-300 text-md `}>
        <div>
          <ul className='flex space-x-8 items-center ml-[3vw]'>
            <li>
              <button className='flex space-x-2 items-center justify-center'>
                <Icon
                  path={mdiMenu}
                  size={1}
                />
                <span>Menu</span>
              </button>
            </li>
            <li>
              <button className='flex space-x-2 items-center justify-center'>
                <Icon
                  path={mdiMagnify}
                  size={1}
                />
                <span>Search</span>
              </button>
            </li>
          </ul>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 py-5'>
          <h1 className='text-3xl tracking-wider leading-tight font-bold'>
            FAKE STORE
          </h1>
        </div>
        <div>
          <ul className='flex space-x-8 mr-[3vw]'>
            <li>
              <button>Call Us</button>
            </li>
            <li>
              <button>Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
