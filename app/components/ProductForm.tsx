'use client';

import { CartedProductType, ProductType } from '@/typings';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCartContext } from '../hooks/CartContext';
import { useState } from 'react';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const colors = ['slate', 'blue', 'orange'];
const bgColors = ['bg-slate-400', 'bg-blue-400', 'bg-orange-400'];

const ProductForm = ({ product }: { product: ProductType }) => {
  const searchParams = useSearchParams();
  const selectedSize = searchParams.get('size');
  const selectedColor = searchParams.get('color');
  const { carted, setCarted } = useCartContext();
  const [isProperlySelected, setIsProperlySelected] = useState(
    selectedSize && selectedColor ? true : false
  );

  const productToCart: CartedProductType = {
    title: product.title,
    id: product.id,
    collection: 'women-summer-2024', //change when updated database
    price: product.price, //change when updated database
    quantity: 1,
    size: selectedSize,
    color: selectedColor,
    image: product.images.at(0),
  };

  const handleAddToCart = () => {
    let isProductInArray = false;

    carted.map((product: CartedProductType) => {
      if (
        product.id === productToCart.id &&
        product.size === productToCart.size &&
        product.color === productToCart.color
      ) {
        isProductInArray = true;
        return { ...product, quantity: product.quantity++ };
      }
      return product;
    });

    if (carted.length === 0 || !isProductInArray)
      setCarted([...carted, productToCart]);
  };

  return (
    <div className='relative '>
      <div className='sticky top-80 px-[3vw] p-10 md:px-0 md:mx-auto md:max-w-xs lg:max-w-sm w-full flex justify-center flex-col space-y-4'>
        <div className='text-lg flex justify-between'>
          <h2>{product.title}</h2>
          <h2>€ {product.price}</h2>
        </div>
        <div className='flex flex-col justify-between md:space-y-4'>
          <div className='space-y-1'>
            <h3>Select color:</h3>
            <div className='flex space-x-2'>
              {colors.map((color, index) => (
                <Link
                  href={`?size=${selectedSize}&color=${color}`}
                  scroll={false}
                  shallow={true}
                  onClick={() =>
                    setIsProperlySelected(
                      selectedSize && selectedColor ? true : false
                    )
                  }
                  className={`border border-stone-300 w-12 h-12 flex justify-center items-center transition-colors p-1 ${
                    selectedColor === color && 'border-stone-500'
                  }`}
                  key={index}>
                  <div className={`w-full h-full bg-${color}-400`}></div>
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
                  onClick={() =>
                    setIsProperlySelected(
                      selectedSize && selectedColor ? true : false
                    )
                  }
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
          onClick={handleAddToCart}
          disabled={isProperlySelected ? false : true}
          className='text-lg bg-stone-800 text-white py-2 border-2 border-stone-800 enabled:hover:bg-white enabled:hover:text-stone-800 enabled:focus:bg-white enabled:focus:text-stone-800 disabled:opacity-75 transition-colors'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductForm;
