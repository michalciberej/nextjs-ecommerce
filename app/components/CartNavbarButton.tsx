'use client';

import React, { useState } from 'react';
import { mdiClose, mdiCartOutline, mdiTrashCanOutline } from '@mdi/js';
import { useCartContext } from '../hooks/CartContext';
import { CartedProductType } from '@/typings';
import useDelayUnmount from '../hooks/UseDelayUnmount';
import Image from 'next/image';
import Icon from '@mdi/react';
import Link from '@/node_modules/next/link';

const bgColors = ['bg-slate-400', 'bg-blue-400', 'bg-orange-400'];

const CartNavbarButton = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const { carted, setCarted } = useCartContext();
  const shouldRenderCart = useDelayUnmount(isCartOpened, 500);

  const totalQuantity: number = carted.reduce(
    (acc: number, product: CartedProductType) => (acc += product.quantity),
    0
  );

  const totalPrice: number = carted.reduce(
    (acc: number, product: CartedProductType) =>
      (acc += product.price * product.quantity),
    0
  );

  const incrementProductQuantity = (product: CartedProductType) => {
    setCarted(
      carted.map((productToIncrement: CartedProductType) => {
        if (productToIncrement.id === product.id) {
          productToIncrement.quantity++;
          return productToIncrement;
        }
        return productToIncrement;
      })
    );
  };

  const decrementProductQuantity = (product: CartedProductType) => {
    setCarted(
      carted.map((productToIncrement: CartedProductType) => {
        if (
          productToIncrement.id === product.id &&
          productToIncrement.quantity > 1
        ) {
          productToIncrement.quantity--;
          return productToIncrement;
        }
        return productToIncrement;
      })
    );
  };

  return (
    <>
      <button
        type='button'
        onClick={() => setIsCartOpened(!isCartOpened)}
        className='relative flex space-x-2 items-center justify-center mr-[3vw]'>
        <Icon
          path={mdiCartOutline}
          size={1}
        />
        {carted.length > 0 && (
          <div className='absolute -right-3 -top-3 rounded-full p-1 bg-yellow-300 w-6 text-xs font-semibold'>
            {<>{totalQuantity}</>}
          </div>
        )}
      </button>
      {shouldRenderCart && (
        <>
          <div
            className='fixed right-0 px-[3vw] md:px-[1vw] flex flex-col justify-between text-stone-800 top-0 h-screen w-full md:w-1/2 lg:w-1/4 bg-white py-6 z-[70]'
            style={
              isCartOpened
                ? { animation: 'inAnimationCart 500ms ease' }
                : { animation: 'outAnimationCart 510ms ease' }
            }>
            <div>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-xl'>Cart</span>
                <button
                  type='button'
                  className='flex items-center justify-center ml-auto '
                  onClick={() => setIsCartOpened(!isCartOpened)}>
                  <Icon
                    path={mdiClose}
                    size={1}
                  />
                </button>
              </div>
              <div className='flex flex-col justify-between space-y-4'>
                {carted.map((product: CartedProductType, index: number) => (
                  <div
                    key={product.id + product.size + product.color}
                    className='flex border border-stone-800 shadow-md p-2 space-x-8 text-lg'>
                    <Link
                      onClick={() => setIsCartOpened(!isCartOpened)}
                      href={`/${product.collection}/${product.id}?size=${product.size}&color=${product.color}`}>
                      <Image
                        src={product.image}
                        alt={`Picture of ${
                          product.title.charAt(0).toUpperCase() +
                          product.title.slice(1)
                        }`}
                        width='100'
                        height='100'
                        quality={80}
                      />
                    </Link>
                    <div className='w-full flex flex-col justify-between'>
                      <div className='w-full flex justify-between items-center text-xl'>
                        <h3>
                          {product.title.charAt(0).toUpperCase() +
                            product.title.slice(1)}
                        </h3>
                        <h3>€ {product.price}</h3>
                      </div>
                      <div className='flex justify-between items-center'>
                        <div className='flex space-x-2 h-full'>
                          <div className='flex'>
                            <button
                              type='button'
                              onClick={() => decrementProductQuantity(product)}
                              className='border border-stone-800 px-2 hover:bg-stone-50 focus:bg-stone-50 transition-colors'>
                              -
                            </button>
                            <div className='border-y border-stone-800 px-2 w-6'>
                              {product.quantity}
                            </div>

                            <button
                              type='button'
                              onClick={() => incrementProductQuantity(product)}
                              className='border border-stone-800 px-2 hover:bg-stone-50 focus:bg-stone-50 transition-colors'>
                              +
                            </button>
                          </div>
                          <div className='border border-stone-800 px-2 flex justify-center items-center'>
                            {product.size.toUpperCase()}
                          </div>
                          <div className='h-full p-0.5 border border-stone-800'>
                            <div
                              className={`bg-${product.color}-400 h-full w-8 `}
                            />
                          </div>
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
              </div>
            </div>
            <div className='w-full border-t border-stone-400 pt-4'>
              <div className='flex mb-3 justify-between'>
                <span>Total</span>
                <span>€ {<>{totalPrice}</>}</span>
              </div>
              <Link href='/checkout'>
                <button
                  type='button'
                  disabled={carted.length > 0 ? false : true}
                  className='text-lg w-full bg-stone-800 text-white disabled:opacity-75 py-1 border-2 border-stone-800 enabled:hover:bg-white enabled:hover:text-stone-800 enabled:focus:bg-white enabled:focus:text-stone-800 transition-colors'>
                  Checkout
                </button>
              </Link>
            </div>
          </div>
          <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-stone-800/80 z-[60] transition-all duration-500 opacity-0'
            onClick={() => setIsCartOpened(!isCartOpened)}
            style={isCartOpened ? { opacity: 1 } : { opacity: 0 }}
          />
        </>
      )}
    </>
  );
};

export default CartNavbarButton;
