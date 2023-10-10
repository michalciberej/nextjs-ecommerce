'use client';

import { CartedProductType } from '@/typings';
import { useCartContext } from '../hooks/CartContext';
import { useState } from 'react';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const ChangeSizeDropDown = ({ product }: { product: CartedProductType }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { carted, setCarted } = useCartContext();

  const availableSizes = sizes.filter((size) => size != product.size);

  const updateProductSize = (newSize: string) => {
    let indexOfChangedProduct: number;
    let isProductDoubled = false;
    let indexOfDoubledProduct: number;

    let updatedCarted = carted.map((targetProduct, index) => {
      if (
        targetProduct.id === product.id &&
        targetProduct.size === product.size &&
        targetProduct.color === product.color
      ) {
        indexOfChangedProduct = index;
        return { ...targetProduct, size: newSize };
      }
      return targetProduct;
    });

    for (let i = 0; i < updatedCarted.length; i++) {
      if (i != indexOfChangedProduct) {
        if (
          updatedCarted[indexOfChangedProduct].id === updatedCarted[i].id &&
          updatedCarted[indexOfChangedProduct].size === updatedCarted[i].size &&
          updatedCarted[indexOfChangedProduct].color === updatedCarted[i].color
        ) {
          isProductDoubled = true;
          indexOfDoubledProduct = i;
        }
      }
    }

    if (isProductDoubled) {
      updatedCarted[indexOfDoubledProduct].quantity +=
        updatedCarted[indexOfChangedProduct].quantity;
      updatedCarted.splice(indexOfChangedProduct, 1);
    }

    setCarted(updatedCarted);
  };

  return (
    <div className='flex flex-col relative'>
      <button
        type='button'
        onClick={() => setIsOpened(!isOpened)}
        className='w-10 border border-stone-800 hover:bg-stone-50 transition-colors'>
        {product.size.toUpperCase()}
      </button>
      <div
        className={`flex flex-col transition-transform origin-top absolute top-8 bg-white z-50 shadow-md ${
          isOpened ? 'scaleY-y-100' : 'scale-y-0'
        }`}>
        {availableSizes.map((size, index) => (
          <button
            type='button'
            key={index}
            className='w-10 border-x border-b first:border-t border-stone-800 hover:bg-stone-50'
            onClick={() => {
              setIsOpened(!isOpened);
              updateProductSize(size);
            }}>
            {size.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChangeSizeDropDown;
