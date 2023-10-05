'use client';

import CartNavbarButton from './CartNavbarButton';
import MenuNavbarButton from './MenuNavbarButton';
import Link from 'next/link';
import useScroll from '../hooks/useScroll';

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <header>
      <div
        className={`w-full flex justify-between items-center fixed left-0 top-0 right-0 ${
          isScrolled
            ? 'bg-white text-stone-800 shadow-md'
            : 'bg-transparent text-stone-200 hover:shadow-md hover:bg-white hover:text-black'
        } z-50 py-3 md:py-6 transition-colors duration-300 text-md `}>
        <MenuNavbarButton />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 py-3 md:py-6 flex items-center'>
          <Link href={'/'}>
            <h1 className='text-2xl md:text-3xl tracking-widest font-bold'>
              GLAMOUR GLOW
            </h1>
          </Link>
        </div>
        <CartNavbarButton />
      </div>
    </header>
  );
};

export default Navbar;
