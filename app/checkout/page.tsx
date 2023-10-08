'use client';

import React from 'react';
import { useCartContext } from '../hooks/CartContext';
import { CartedProductType, OrderType, CustomerDataType } from '@/typings';
import { notFound } from 'next/navigation';
import { mdiTrashCanOutline } from '@mdi/js';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@mdi/react';

const Checkout = () => {
  const { carted, setCarted } = useCartContext();
  const [customerData, setCustomerData] = useState<CustomerDataType>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const order: OrderType = {
    customer: customerData,
    orderedProducts: carted,
  };

  // if (carted.length === 0) notFound();

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
    <main>
      <section>
        <div className='mx-[3vw] md:mx-[10vw] flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0 justify-center items-start pt-20 md:pb-40 md:pt-40 lg:pb-64 lg:pt-60 xl:pt-80 pb-20'>
          <div className='flex flex-col space-y-2 lg:max-w-md w-full'>
            <input
              type='text'
              placeholder='First Name'
              value={customerData.firstName}
              onChange={(e) =>
                setCustomerData({ ...customerData, firstName: e.target.value })
              }
              className='border border-stone-800 px-2 py-1 text-xl'
            />
            <input
              type='text'
              placeholder='Last Name'
              value={customerData.lastName}
              onChange={(e) =>
                setCustomerData({ ...customerData, lastName: e.target.value })
              }
              className='border border-stone-800 px-2 py-1 text-xl'
            />
            <input
              type='email'
              placeholder='Email'
              value={customerData.email}
              onChange={(e) =>
                setCustomerData({ ...customerData, email: e.target.value })
              }
              className='border border-stone-800 px-2 py-1 text-xl'
            />
            <input
              type='number'
              placeholder='Phone number'
              value={customerData.phoneNumber}
              onChange={(e) =>
                setCustomerData({
                  ...customerData,
                  phoneNumber: e.target.value,
                })
              }
              className='border border-stone-800 px-2 py-1 text-xl'
            />
            <input
              type='text'
              placeholder='Shipping address'
              value={customerData.address}
              onChange={(e) =>
                setCustomerData({ ...customerData, address: e.target.value })
              }
              className='border border-stone-800 px-2 py-1 text-xl'
            />

            <button
              type='button'
              className='text-lg w-full bg-stone-800 text-white disabled:opacity-75 py-1 border-2 border-stone-800 enabled:hover:bg-white enabled:hover:text-stone-800 enabled:focus:bg-white enabled:focus:text-stone-800 transition-colors'>
              <Link href='#'>Send order</Link>
            </button>
          </div>
          <div className='flex flex-col space-y-4 w-full lg:max-w-lg'>
            {carted.map((product: CartedProductType) => (
              <div
                key={product.id + product.size + product.color}
                className='flex border border-stone-800 shadow-md p-2 space-x-8 text-lg '>
                <Link
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
      </section>
    </main>
  );
};

export default Checkout;
