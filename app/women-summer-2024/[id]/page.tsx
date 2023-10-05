import React from 'react';
import Image from 'next/image';
import getDatabaseDataById from '@/app/hooks/getDatabaseDataById';
import ProductForm from '@/app/components/ProductForm';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getDatabaseDataById(id);
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
      <div className='mx-[3vw] md:mx-[10vw] py-20'>{product.description}</div>
    </>
  );
};

export default ProductPage;
