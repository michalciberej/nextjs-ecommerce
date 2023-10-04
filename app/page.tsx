'use client';

import Icon from '@mdi/react';
import { mdiPause } from '@mdi/js';
import { useRef } from 'react';
import Image from '@/node_modules/next/image';
import Link from 'next/link';
import Video from './components/Video';

const Home = () => {
  const video = useRef(null);

  return (
    <main>
      <section>
        <Video
          video={'/homepage-video.mp4'}
          linkUrl={'/women-summer-2024'}
        />
      </section>
      <section>
        <div className='overflow-hidden relative'>
          <div className='w-[100vw] h-screen'>
            <video
              width='100%'
              height='100%'
              src='/homepage-video2.mp4'
              loop
              autoPlay={true}
              muted
              ref={video}
              className='h-full object-cover'
            />
          </div>
          <div className='bottom-0 text-stone-200 z-40 flex'>
            <button className='absolute left-0 right-auto bottom-0 z-40 m-14'>
              <Icon
                path={mdiPause}
                size={0.75}
              />
            </button>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 mb-14 flex flex-col items-center justify-center space-y-4'>
              <h2 className='md:text-3xl font-semibold tracking-wide'>
                Women Autumn 2024 Collection
              </h2>
              <button className='text-md rounded-full backdrop-blur-sm bg-transparent border-2 border-stone-200 px-4 py-2 hover:bg-stone-200 hover:text-stone-800 transition-all shadow-md'>
                Browse the Collection
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='px-[3vw] md:px-[10vw] py-20 flex flex-col text-center space-y-8'>
          <h2 className='text-xl'></h2>
          <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center text-sm space-y-8 lg:space-y-0 space-x-2'>
            <div className='flex flex-col text-start space-y-4'>
              <Image
                src={'/homepage-picture.jpg'}
                alt='Picture of clothes'
                width={500}
                height={500}
                quality={80}
                className='w-full max-w-lg'
              />
              <h3 className='text-stone-500 text-xl'>Quality Products</h3>
              <p className='text-stone-800'>
                Our products are made from the best quality materials.
              </p>
            </div>
            <div className='flex flex-col text-start space-y-4'>
              <Image
                src={'/homepage-picture2.jpg'}
                alt='Picture of clothes'
                width={500}
                height={500}
                quality={80}
                className='w-full max-w-lg'
              />
              <h3 className='text-stone-500 text-xl'>Ecology</h3>
              <p className='text-stone-800'>
                We only use nature friendly materials.
              </p>
            </div>
            <div className='flex flex-col text-start space-y-4'>
              <Image
                src={'/homepage-picture3.jpg'}
                alt='Picture of clothes'
                width={500}
                height={500}
                quality={80}
                className='w-full max-w-lg'
              />
              <h3 className='text-stone-500 text-xl'>Custom Zippers</h3>
              <p className='text-stone-800'>
                We can push your monogram into our zippers!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
