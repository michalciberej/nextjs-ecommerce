'use client';

import Scroll from '../hooks/Scroll';
import MenuNavbarButton from './MenuNavbarButton';
import CartNavbarButton from './CartNavbarButton';

const Navbar = () => {
  const isScrolled = Scroll();

  return (
    <header>
      <div
        className={`w-full flex justify-between items-center fixed left-0 top-0 right-0 ${
          isScrolled
            ? 'bg-white text-stone-800 shadow-md'
            : 'bg-transparent text-stone-200 hover:shadow-md hover:bg-white hover:text-black'
        } z-50 py-6 transition-colors duration-300 text-md `}>
        <MenuNavbarButton />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 py-5'>
          <h1 className='text-3xl tracking-wider leading-tight font-bold'>
            GLAMOUR GLOW
          </h1>
        </div>
        <CartNavbarButton />
      </div>
    </header>
  );
};

export default Navbar;
