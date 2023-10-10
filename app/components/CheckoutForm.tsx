'use client';

import { useState } from 'react';
import { useCartContext } from '../hooks/CartContext';
import { CustomerDataType, OrderType } from '@/typings';
import { notFound, useRouter } from 'next/navigation';
import SendOrderToDatabase from '../lib/SendOrderToDatabase';

const CheckoutForm = () => {
  const router = useRouter();
  const { carted, setCarted } = useCartContext();
  const [orderSent, setOrderSent] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerDataType>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  if (!orderSent && carted.length === 0) notFound();

  const order: OrderType = {
    customer: [
      customerData.firstName,
      customerData.lastName,
      customerData.email,
      customerData.phoneNumber.toString(),
      customerData.address,
    ],
    orderedProducts: carted.map(
      (product) =>
        product.id + '-' + product.quantity.toString() + '-' + product.quantity
    ),
  };

  return (
    <form
      className='flex flex-col space-y-2 lg:max-w-md w-full'
      onSubmit={(e) => {
        e.preventDefault();
        SendOrderToDatabase(order);
        setOrderSent(true);
        setCarted([]);
        router.replace('/order-successful');
      }}>
      <input
        required={true}
        type='text'
        placeholder='First Name'
        value={customerData.firstName}
        onChange={(e) =>
          setCustomerData({ ...customerData, firstName: e.target.value })
        }
        className='border border-stone-800 px-2 py-1 text-xl'
      />
      <input
        required={true}
        type='text'
        placeholder='Last Name'
        value={customerData.lastName}
        onChange={(e) =>
          setCustomerData({ ...customerData, lastName: e.target.value })
        }
        className='border border-stone-800 px-2 py-1 text-xl'
      />
      <input
        required={true}
        type='email'
        placeholder='Email'
        value={customerData.email}
        onChange={(e) =>
          setCustomerData({ ...customerData, email: e.target.value })
        }
        className='border border-stone-800 px-2 py-1 text-xl'
      />
      <input
        required={true}
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
        required={true}
        type='text'
        placeholder='Shipping address'
        value={customerData.address}
        onChange={(e) =>
          setCustomerData({ ...customerData, address: e.target.value })
        }
        className='border border-stone-800 px-2 py-1 text-xl'
      />
      <button className='text-lg w-full bg-stone-800 text-white disabled:opacity-75 py-1 border-2 border-stone-800 enabled:hover:bg-white enabled:hover:text-stone-800 enabled:focus:bg-white enabled:focus:text-stone-800 transition-colors'>
        Send order
      </button>
    </form>
  );
};

export default CheckoutForm;
