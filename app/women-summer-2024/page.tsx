import React from 'react';
import Image from '@/node_modules/next/image';
import ProductCard from '../components/ProductCard';
import useDatabaseData from '../hooks/useDatabaseData';

const WomenSummer2024 = () => {
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

  return (
    <main>
      <section>
        <div className='h-screen w-full'>
          <Image
            src={'/women-summer-2024-hero.png'}
            alt='Picture of women wearing clothes from out summer 2024 collection'
            width={1920}
            height={1080}
            className='w-full h-full'
          />
        </div>
      </section>
      <section>
        <div className='grid grid-cols-4'>
          {data.map((el) => (
            <React.Fragment key={el.id}>
              <ProductCard
                picture={el.pictures}
                url={el.id}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WomenSummer2024;

export const generateStaticParams = () => {
  return [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
};
