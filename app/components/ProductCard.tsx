import Link from 'next/link';
import Image from 'next/image';
import { ProductType } from '@/typings';

const colors = ['slate', 'blue', 'orange'];
const bgColors = ['bg-slate-400', 'bg-blue-400', 'bg-orange-400'];

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className='flex flex-col border'>
      <Link
        href={`/women-${product.id.includes('WS') ? 'summer' : 'autumn'}-2024/${
          product.id
        }`}
        className='flex justify-center items-center h-[400px] bg-gradient-to-tr from-stone-50 to-stone-200'>
        <Image
          src={product.images.at(0)}
          alt={`Picture of ${
            product.title.charAt(0).toUpperCase() + product.title.slice(1)
          }`}
          width={250}
          height={250}
          quality={80}
        />
      </Link>
      <div className='flex justify-between items-center px-4 my-2 text-lg'>
        <div className='flex space-x-1'>
          {colors.map((color, index) => (
            <div
              key={index}
              className={`h-full w-4 p-2 rounded-xl bg-${color}-400 justify-center items-center`}
            />
          ))}
        </div>
        <div>
          <span className='text-xl'>{product.title}</span>
        </div>
        <div>
          <span>€ {product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
