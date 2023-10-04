import React from 'react';
import Image from '@/node_modules/next/image';
import ProductCard from '../components/ProductCard';
import getDatabaseData from '../hooks/getDatabaseData';
import { ProductType } from '@/typings';

const WomenSummer2024 = async () => {
  const { documents } = await getDatabaseData();

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
          {documents.map((obj: ProductType) => {
            if (obj.id.includes('WS24'))
              return (
                <ProductCard
                  image={obj.images[0]}
                  url={obj.id}
                  key={obj.id}
                />
              );
          })}
        </div>
      </section>
    </main>
  );
};

export default WomenSummer2024;

export const generateStaticParams = async () => {
  const staticParams = await getDatabaseData();

  return staticParams.documents.map((obj: ProductType) => ({ id: obj.id }));
};
