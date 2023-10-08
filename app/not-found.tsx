import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main>
      <section>
        <div className='w-full h-[100dvh] flex flex-col justify-center items-center space-y-2'>
          <h2 className='text-3xl'>It looks like something went wrong.</h2>
          <div className='flex items-center space-x-1 text-2xl'>
            <span>Go back</span>
            <Link
              href='/'
              className='text-blue-500 after:content-[""] after:block after:w-full after:h-[1px] leading-none after:origin-left after:scale-0 after:transition-all after:duration-300 hover:after:scale-100 after:bg-blue-500'>
              home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
