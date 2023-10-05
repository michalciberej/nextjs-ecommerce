'use client';

import { ProductType } from '@/typings';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const colors = ['gray', 'green', 'purple'];

const ProductForm = ({ product }: { product: ProductType }) => {
  const searchParams = useSearchParams();
  const selectedSize = searchParams.get('size');
  const selectedColor = searchParams.get('color');

  return (
    <div className='relative '>
      <div className='sticky top-60 px-[3vw] md:px-0 md:mx-auto md:max-w-xs lg:max-w-sm w-full flex justify-center flex-col space-y-4'>
        <div className='text-lg flex justify-between '>
          <h2>{product.title}</h2>
          <h2>100$</h2>
        </div>
        <div className='flex flex-row md:flex-col justify-between md:space-y-4'>
          <div className='space-y-1'>
            <h3>Select color:</h3>
            <div className='flex space-x-2'>
              {colors.map((color, index) => (
                <Link
                  href={`?size=${selectedSize}&color=${color}`}
                  scroll={false}
                  shallow={true}
                  className={`border border-stone-300 w-12 h-12 flex justify-center items-center transition-colors p-1 ${
                    selectedColor === color && 'border-stone-500'
                  }`}
                  key={index}>
                  <div
                    style={{ backgroundColor: color }}
                    className={`w-full h-full`}></div>
                </Link>
              ))}
            </div>
          </div>
          <div className='space-y-1'>
            <h3>Select size:</h3>
            <div className='mx-auto flex space-x-2'>
              {sizes.map((size, index) => (
                <Link
                  href={`?size=${size}&color=${selectedColor}`}
                  scroll={false}
                  shallow={true}
                  className={`border border-stone-300 w-12 h-12 flex justify-center items-center transition-colors ${
                    selectedSize === size && 'border-stone-500'
                  }`}
                  key={index}>
                  {size.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <button
          type='button'
          className='text-lg bg-stone-800 text-stone-200 py-2 border-2 border-stone-800 hover:bg-white hover:text-stone-800 active:bg-white active:text-stone-800 transition-colors'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductForm;
