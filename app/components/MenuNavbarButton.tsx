'use client';

import React, { useState } from 'react';
import useDelayUnmount from '../hooks/UseDelayUnmount';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu, mdiChevronRight } from '@mdi/js';
import Link from 'next/link';

const MenuNavbarButton = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const shouldRenderSidebar = useDelayUnmount(isSidebarOpened, 500);

  const handleSidebarToggle = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <>
      {shouldRenderSidebar && (
        <>
          <div
            className={`fixed left-0 top-0 h-screen w-full md:w-1/2 lg:w-1/4 bg-white px-[3vw] py-6 z-[70] space-y-5 flex flex-col justify-between`}
            style={
              isSidebarOpened
                ? { animation: 'inAnimationSidebar 500ms ease' }
                : { animation: 'outAnimationSidebar 510ms ease' }
            }>
            <div>
              <div className='flex justify-between items-center mb-8'>
                <button
                  type='button'
                  className='flex space-x-2 items-center justify-center text-stone-800'
                  onClick={handleSidebarToggle}>
                  <Icon
                    path={mdiClose}
                    size={1}
                  />
                </button>
                <span className='text-xl'>Menu</span>
              </div>
              <nav>
                <ul className='group flex flex-col w-full text-xl text-stone-800 transition-colors space-y-2'>
                  <li>
                    <Link
                      href='/women-summer-2024'
                      onClick={handleSidebarToggle}
                      className='flex justify-between items-center group-hover:text-stone-400 hover:!text-stone-800'>
                      <span className='nav-link-text '>Women Summer 2024</span>
                      <Icon
                        path={mdiChevronRight}
                        size={1.25}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/women-autumn-2024'
                      onClick={handleSidebarToggle}
                      className='flex justify-between items-center group-hover:text-stone-400 hover:!text-stone-800'>
                      <span className='nav-link-text '>Women Autumn 2024</span>
                      <Icon
                        path={mdiChevronRight}
                        size={1.25}
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <div className='border-t border-stone-400 text-stone-500 pt-5 flex text-lg flex-col'>
                <Link
                  href='/about-us'
                  className='hover:text-stone-800 transition-colors'>
                  About us
                </Link>
                <Link
                  href='/contact-us'
                  className='hover:text-stone-800 transition-colors'>
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-stone-800/80 z-[60] transition-all duration-500 opacity-0'
            onClick={handleSidebarToggle}
            style={isSidebarOpened ? { opacity: 1 } : { opacity: 0 }}></div>
        </>
      )}
      <button
        type='button'
        className='flex space-x-2 items-center justify-center ml-[3vw]'
        onClick={handleSidebarToggle}>
        <Icon
          path={mdiMenu}
          size={1.25}
        />
      </button>
    </>
  );
};

export default MenuNavbarButton;
