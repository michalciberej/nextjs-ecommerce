'use client';
import { useState } from 'react';

const ProductDescription = ({ description }: { description: string }) => {
  const [isOpenedShipping, setIsOpenedShipping] = useState(false);
  const [isOpenedDescription, setIsOpenedDescription] = useState(false);

  return (
    <>
      <div className='px-[3vw] md:px-[10vw] py-1 bg-stone-100 border-t-2 border-stone-200 flex flex-around'>
        <button
          type='button'
          onClick={() => {
            setIsOpenedShipping(false);
            setIsOpenedDescription(!isOpenedDescription);
          }}
          className='mx-auto text-lg hover:text-stone-600 transition-colors'>
          Product Description <span className='text-xl'>+</span>
        </button>
        <button
          type='button'
          onClick={() => {
            setIsOpenedDescription(false);
            setIsOpenedShipping(!isOpenedShipping);
          }}
          className='mx-auto text-lg hover:text-stone-600 transition-colors'>
          Shipping & Returns <span className='text-xl'>+</span>
        </button>
      </div>
      <div
        className={`px-[3vw] md:px-[10vw] py-8 justify-center items-center ${
          isOpenedDescription ? 'flex' : 'hidden'
        } transition-transform origin-top`}>
        <span>{description}</span>
      </div>
      <div
        className={`px-[3vw] md:px-[10vw] py-8 justify-center items-center ${
          isOpenedShipping ? 'flex' : 'hidden'
        } transition-transform origin-top`}>
        <span>
          No import duties or customs charges/taxes to the United States FedEx.
          Standard Shipping (4-6 business Days) $8 USD or FREE if $250 or above.
        </span>
      </div>
    </>
  );
};

export default ProductDescription;
