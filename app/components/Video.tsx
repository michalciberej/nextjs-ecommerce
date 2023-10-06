'use client';
import Icon from '@mdi/react';
import { mdiPause, mdiPlay } from '@mdi/js';
import Link from 'next/link';
import { useRef, useState } from 'react';

const Video = ({
  video,
  linkUrl,
  children,
}: {
  video: string;
  linkUrl: string;
  children: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleVideoControl = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='relative overflow-hidden'>
      <div className='-mt-[5.5rem] md:-mt-0 w-full h-screen'>
        <video
          width='100%'
          height='100%'
          src={video}
          loop
          autoPlay={true}
          muted
          ref={videoRef}
          className='h-full object-cover'
        />
      </div>
      <div className='sticky bottom-0 text-stone-200 z-40 flex'>
        <button
          className='absolute left-0 right-auto bottom-0 z-40 m-14'
          onClick={handleVideoControl}>
          {isPlaying ? (
            <Icon
              path={mdiPause}
              size={0.75}
            />
          ) : (
            <Icon
              path={mdiPlay}
              size={0.75}
            />
          )}
        </button>
        <div className='absolute left-1/2 -translate-x-1/2 bottom-0 mb-14 flex flex-col items-center justify-center space-y-4'>
          <h2 className='text-2xl md:text-3xl'>{children}</h2>
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
