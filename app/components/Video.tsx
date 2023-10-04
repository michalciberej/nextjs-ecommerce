'use client';
import Icon from '@mdi/react';
import { mdiPause } from '@mdi/js';
import Link from 'next/link';
import { useRef, useState } from 'react';

const Video = ({ video, linkUrl }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef();

  const handleVideoControl = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='relative overflow-hidden'>
      <div className='w-[100vw] h-screen -mt-[5.5rem] md:-mt-0'>
        <video
          width='100%'
          height='100%'
          src='/homepage-video.mp4'
          loop
          autoPlay={true}
          muted
          ref={video}
          className='h-full object-cover'
        />
      </div>
      <div className='sticky bottom-0 text-stone-200 z-40 flex'>
        <button
          className='absolute left-0 right-auto bottom-0 z-40 m-14'
          onClick={handleVideoControl}>
          <Icon
            path={mdiPause}
            size={0.75}
          />
        </button>
        <div className='absolute left-1/2 -translate-x-1/2 bottom-0 mb-14 flex flex-col items-center justify-center space-y-4'>
          <h2 className='md:text-3xl font-semibold'>
            Women Summer 2024 Collection
          </h2>
          <Link
            href={linkUrl}
            className='text-md rounded-full backdrop-blur-xl bg-transparent border-2 border-stone-200 px-4 py-2 hover:bg-stone-200 hover:text-stone-800 transition-all shadow-md'>
            Browse the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
