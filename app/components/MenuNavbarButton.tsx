'use client';

import React, { useState } from 'react';
import useDelayUnmount from '../hooks/UseDelayUnmount';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';

const MenuNavbarButton: React.FC = () => {
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
            className={`fixed left-0 top-0 h-screen w-full md:w-1/3 lg:w-1/4 bg-stone-50 pl-[3vw] py-6 z-[70]`}
            style={
              isSidebarOpened
                ? { animation: 'inAnimationSidebar 500ms ease' }
                : { animation: 'outAnimationSidebar 510ms ease' }
            }>
            <button
              type='button'
              className='flex space-x-2 items-center justify-center'
              onClick={handleSidebarToggle}>
              <Icon
                path={mdiClose}
                size={1}
              />
              <span className=''>Close</span>
            </button>
          </div>
          <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-stone-800/80 z-[60] transition-all duration-500 opacity-0'
            onClick={handleSidebarToggle}
            style={isSidebarOpened ? { opacity: 1 } : { opacity: 0 }}></div>
        </>
      )}
      <div className='ml-[3vw]'>
        <button
          type='button'
          className='flex space-x-2 items-center justify-center'
          onClick={handleSidebarToggle}>
          <Icon
            path={mdiMenu}
            size={1}
          />
          <span className=''>Menu</span>
        </button>
      </div>
    </>
  );
};

export default MenuNavbarButton;
