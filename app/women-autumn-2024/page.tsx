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
        <div className='w-full h-[100dvh]'>
          <Image
            src={'/women-summer-2024-hero.png'}
            alt='Picture of women wearing clothes from out summer 2024 collection'
            width={1920}
            height={1080}
            className='h-full object-cover'
          />
        </div>
      </section>
      <section>
        <div className='grid md:grid-cols-2 lg:grid-cols-4'>
          {documents.map((product: ProductType) => {
            if (product.id.includes('WA24'))
              return (
                <ProductCard
                  product={product}
                  key={product.id}
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
