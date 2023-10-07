import Image from '@/node_modules/next/image';
import Video from './components/Video';

const Home = () => {
  return (
    <main>
      <section>
        <Video
          video={'/homepage-video.mp4'}
          linkUrl={'/women-summer-2024'}>
          Women Summer 2024
        </Video>
      </section>
      <section>
        <Video
          video={'/homepage-video2.mp4'}
          linkUrl={'/women-autumn-2024'}>
          Women Autumn 2024
        </Video>
      </section>
      <section>
        <div className='px-[3vw] md:px-[10vw] py-20 flex flex-col text-center space-y-8'>
          <div className='mx-auto grid grid-cols-1 sm:grid-cols-3 justify-between items-center text-sm space-y-8 md:space-y-0 space-x-2'>
            <div className='flex flex-col text-start space-y-4 md:space-y-0'>
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
            <div className='flex flex-col text-start space-y-4 md:space-y-0'>
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
            <div className='flex flex-col text-start space-y-4 md:space-y-0'>
              <Image
                src={'/homepage-picture3.jpg'}
                alt='Picture of clothes'
                width={500}
                height={500}
                quality={80}
                className='w-full max-w-lg'
              />
              <h3 className='text-stone-500 text-xl'>Custom Zippers</h3>
              <p className='text-stone-800 max-w-'>
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
