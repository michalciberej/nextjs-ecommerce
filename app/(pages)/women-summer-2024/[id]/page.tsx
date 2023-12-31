import React from 'react';
import Image from 'next/image';
import getDatabaseDataById from '@/app/lib/getDatabaseDataById';
import ProductForm from '@/app/components/ProductForm';
import { notFound } from 'next/navigation';
import ProductDescription from '@/app/components/ProductDescription';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getDatabaseDataById(id);

  if (!product) notFound();

  return (
    <>
      <main className='grid md:grid-cols-2'>
        <div>
          <ul className='flex flex-col'>
            {product.images.map((img: string, index: number) => (
              <li
                className='lg:w-[50vw] h-screen flex justify-center items-center bg-gradient-to-br from-stone-200 to-stone-50'
                key={index}>
                <Image
                  src={img}
                  alt='Picture of product'
                  width={500}
                  height={500}
                  quality={80}
                />
              </li>
            ))}
          </ul>
        </div>
        <ProductForm product={product} />
      </main>
      <ProductDescription description={product.description} />
    </>
  );
};

export default ProductPage;
