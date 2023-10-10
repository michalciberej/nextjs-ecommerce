'use client';

import { CartedProductType } from '@/typings';
import { useCartContext } from '../hooks/CartContext';
import { useState } from 'react';

const colors = ['slate', 'blue', 'orange'];

const ChangeColorDropDown = ({ product }: { product: CartedProductType }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { carted, setCarted } = useCartContext();

  const availableColors = colors.filter((color) => color != product.color);

  const updateProductSize = (newColor: string) => {
    let indexOfChangedProduct: number;
    let indexOfDoubledProduct: number;
    let isProductDoubled = false;

    let updatedCarted = carted.map((targetProduct, index) => {
      if (
        targetProduct.id === product.id &&
        targetProduct.size === product.size &&
        targetProduct.color === product.color
      ) {
        indexOfChangedProduct = index;
        return { ...targetProduct, color: newColor };
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
        className='border border-stone-800 h-full flex justify-center items-center transition-colors p-1 hover:bg-stone-50'>
        <div className={`bg-${product.color}-400 h-full w-8`} />
      </button>
      <div
        className={`flex flex-col transition-transform origin-top absolute top-8 bg-white z-50 shadow-md ${
          isOpened ? 'scaleY-y-100' : 'scale-y-0'
        }`}>
        {availableColors.map((color, index) => (
          <button
            type='button'
            key={index}
            className='border-x border-b first:border-t border-stone-800 h-8 flex justify-center items-center transition-colors p-1 hover:bg-stone-50'
            onClick={() => {
              setIsOpened(!isOpened);
              updateProductSize(color);
            }}>
            <div className={`bg-${color}-400 h-full w-8`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChangeColorDropDown;
