'use client';

import { useCartContext } from '../hooks/CartContext';
import { CartedProductType } from '@/typings';
import { incrementProductQuantity } from '../lib/IncrementProductQuantity';
import { decrementProductQuantity } from '../lib/decrementProductQuantity';
import { mdiTrashCanOutline } from '@mdi/js';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@mdi/react';
import ChangeSizeDropDown from './ChangeSizeDropDown';
import ChangeColorDropDown from './ChangeColorDropDown';

const ProductCardSmall = () => {
  const { carted, setCarted } = useCartContext();

  return (
    <div className='flex flex-col space-y-4 w-full lg:max-w-md'>
      {carted.map((product, index) => (
        <div
          key={product.id + product.size + product.color + index}
          className='flex border border-stone-800 shadow-md p-2 space-x-8 text-lg '>
          <Link
            href={`/${product.collection}/${product.id}?size=${product.size}&color=${product.color}`}>
            <Image
              src={product.image}
              alt={`Picture of ${
                product.title.charAt(0).toUpperCase() + product.title.slice(1)
              }`}
              width='100'
              height='100'
              quality={80}
            />
          </Link>
          <div className='w-full flex flex-col justify-between'>
            <div className='w-full flex justify-between items-center text-xl'>
              <h3>
                {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
              </h3>
              <h3>€ {product.price}</h3>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex space-x-2 h-full'>
                <div className='flex'>
                  <button
                    type='button'
                    onClick={() =>
                      decrementProductQuantity(product, setCarted, carted)
                    }
                    className='border border-stone-800 px-2 hover:bg-stone-50 focus:bg-stone-50 transition-colors'>
                    -
                  </button>
                  <div className='border-y border-stone-800 px-2 w-6'>
                    {product.quantity}
                  </div>

                  <button
                    type='button'
                    onClick={() =>
                      incrementProductQuantity(product, setCarted, carted)
                    }
                    className='border border-stone-800 px-2 hover:bg-stone-50 focus:bg-stone-50 transition-colors'>
                    +
                  </button>
                </div>
                <ChangeSizeDropDown product={product} />
                <ChangeColorDropDown product={product} />
              </div>
              <button
                type='button'
                onClick={() =>
                  setCarted(
                    carted.filter(
                      (productToDelete: CartedProductType) =>
                        !(
                          productToDelete.id === product.id &&
                          productToDelete.size === product.size &&
                          productToDelete.color === product.color
                        )
                    )
                  )
                }>
                <Icon
                  path={mdiTrashCanOutline}
                  size={1}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className='flex justify-between text-2xl'>
        <span>Total</span>
        <span>
          €{' '}
          {carted.reduce(
            (acc, product) => (acc += product.quantity * product.price),
            0
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCardSmall;
