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
            className={`fixed left-0 top-0 h-screen w-full md:w-1/2 lg:w-1/4 bg-stone-50 pl-[3vw] py-6 pr-[3vw] z-[70] space-y-5 flex flex-col justify-between`}
            style={
              isSidebarOpened
                ? { animation: 'inAnimationSidebar 500ms ease' }
                : { animation: 'outAnimationSidebar 510ms ease' }
            }>
            <div>
              <button
                type='button'
                className='flex space-x-2 items-center justify-center mb-8 text-stone-800'
                onClick={handleSidebarToggle}>
                <Icon
                  path={mdiClose}
                  size={1}
                />
                <span className=''>Close</span>
              </button>
              <nav>
                <ul className='group flex flex-col w-full text-xl text-stone-800 transition-colors'>
                  <li>
                    <Link
                      href='/women-summer-2024'
                      onClick={handleSidebarToggle}
                      className='flex justify-between items-center group-hover:text-stone-400 hover:!text-stone-800 leading-loose'>
                      <span className='nav-link-text '>Women Summer 2024</span>
                      <Icon
                        path={mdiChevronRight}
                        size={1.25}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/women-summer-2024'
                      onClick={handleSidebarToggle}
                      className='flex justify-between items-center group-hover:text-stone-400 hover:!text-stone-800 leading-loose'>
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
            <div className='w-full border-t border-stone-400 text-stone-800 pt-5 flex flex-1'>
              <h1>hello</h1>
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
