import React from 'react';
import Image from 'next/image';
import useDatabaseDataById from '@/app/hooks/useDatabaseDataById';
const data = [
  {
    id: 1,
    name: 'Tshirt 1',
    pictures:
      'https://freepngimg.com/thumb/tshirt/95012-monster-cup-athletic-series-energy-nascar-tshirt.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
  {
    id: 2,
    name: 'Tshirt 2',
    pictures:
      'https://freepngimg.com/thumb/polo%20shirt/10-green-polo-shirt-png-image.png',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
  {
    id: 3,
    name: 'Tshirt 3',
    pictures:
      'https://freepngimg.com/thumb/polo%20shirt/15-polo-shirt-png-image.png',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
  {
    id: 4,
    name: 'Tshirt 4',
    pictures:
      "https://freepngimg.com/thumb/jeans/21-women's-jeans-png-image.png",

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
  {
    id: 5,
    name: 'Tshirt 5',
    pictures:
      'https://freepngimg.com/thumb/polo%20shirt/7-polo-shirt-png-image.png',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
  {
    id: 6,
    name: 'Tshirt 6',
    pictures:
      'https://freepngimg.com/thumb/polo%20shirt/21-polo-shirt-png-image.png',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
  {
    id: 7,
    name: 'Tshirt 7',
    pictures: 'https://freepngimg.com/thumb/beanie/25339-5-beanie-photos.png',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
  {
    id: 8,
    name: 'Tshirt 8',
    pictures: 'https://freepngimg.com/thumb/pant/37050-2-mens-pant-hd.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto mollitia eos nemo sunt inventore quas pariatur sint necessitatibus animi, soluta architecto porro deserunt distinctio eum voluptates, odit quaerat.',
  },
];

const ProductPage = async ({ params }: { params: { id: number } }) => {
  const { documents } = await useDatabaseDataById(1);
  return (
    <>
      <main className='grid md:grid-cols-2'>
        <div>
          <ul className='flex flex-col'>
            <li className='w-[50vw] h-screen flex justify-center items-center bg-gradient-to-br from-stone-200 to-stone-50'>
              <Image
                src={result.pictures}
                alt='picture'
                width={500}
                height={500}
                quality={80}
              />
            </li>
            <li className='w-[50vw] h-screen flex justify-center items-center bg-gradient-to-br from-stone-200 to-stone-50'>
              <Image
                src={result.pictures}
                alt='picture'
                width={500}
                height={500}
                quality={80}
              />
            </li>
            <li className=' w-[50vw] h-screen flex justify-center items-center bg-gradient-to-br from-stone-200 to-stone-50'>
              <Image
                src={result.pictures}
                alt='picture'
                width={500}
                height={500}
                quality={80}
              />
            </li>
          </ul>
        </div>
        <div className='relative '>
          <div className='sticky top-60 mx-auto py-20 bg-yellow-400 flex items-center justify-center flex-col'>
            <h2>{result.name}</h2>
          </div>
        </div>
      </main>
      <div className='mx-[10vw] py-20'>{result.description}</div>
    </>
  );
};

export default ProductPage;
