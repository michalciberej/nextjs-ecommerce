'use client';

import Icon from '@mdi/react';
import { mdiMenu, mdiClose, mdiCartOutline } from '@mdi/js';
import { useState } from 'react';
import useDelayUnmount from '../hooks/UseDelayUnmount';
import Scroll from '../hooks/Scroll';

const Navbar: React.FC = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const isScrolled = Scroll();
  const shouldRenderSidebar = useDelayUnmount(isSidebarOpened, 500);
  const shouldRenderCart = useDelayUnmount(isCartOpened, 500);

  const handleSidebarToggle = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  const handleCartToggle = () => {
    setIsCartOpened(!isCartOpened);
  };

  return (
    <header>
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
      <div
        className={`w-full flex justify-between items-center fixed left-0 top-0 right-0 ${
          isScrolled
            ? 'bg-white text-stone-800 shadow-md'
            : 'bg-transparent text-stone-200 hover:shadow-md hover:bg-white hover:text-black'
        } z-50 py-6 transition-colors duration-300 text-md `}>
        <div>
          <div className='flex space-x-8 items-center ml-[3vw]'>
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
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 py-5'>
          <h1 className='text-3xl tracking-wider leading-tight font-bold'>
            GLAMOUR GLOW
          </h1>
        </div>
        <div>
          <div className='flex space-x-8 mr-[3vw]'>
            <button
              type='button'
              onClick={handleCartToggle}>
              <Icon
                path={mdiCartOutline}
                size={1}
              />
            </button>
          </div>
        </div>
      </div>
      {shouldRenderCart && (
        <>
          <div
            className='fixed right-0 top-0 h-screen w-full md:w-1/3 lg:w-1/4 bg-stone-50 pr-[3vw] py-6 z-[70]'
            style={
              isCartOpened
                ? { animation: 'inAnimationCart 500ms ease' }
                : { animation: 'outAnimationCart 510ms ease' }
            }>
            <button
              type='button'
              className='flex space-x-2 items-center justify-center ml-auto'
              onClick={handleCartToggle}>
              <Icon
                path={mdiClose}
                size={1}
              />
            </button>
          </div>
          <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-stone-800/80 z-[60] transition-all duration-500 opacity-0'
            onClick={handleCartToggle}
            style={isCartOpened ? { opacity: 1 } : { opacity: 0 }}></div>
        </>
      )}
    </header>
  );
};

export default Navbar;
