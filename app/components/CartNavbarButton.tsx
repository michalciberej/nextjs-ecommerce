'use client';

import React, { useState } from 'react';
import useDelayUnmount from '../hooks/UseDelayUnmount';
import Icon from '@mdi/react';

import { mdiClose, mdiCartOutline } from '@mdi/js';

const CartNavbarButton = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const shouldRenderCart = useDelayUnmount(isCartOpened, 500);

  const handleCartToggle = () => {
    setIsCartOpened(!isCartOpened);
  };
  return (
    <>
      <div className='mr-[3vw]'>
        <button
          type='button'
          onClick={handleCartToggle}>
          <Icon
            path={mdiCartOutline}
            size={1}
          />
        </button>
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
    </>
  );
};

export default CartNavbarButton;
