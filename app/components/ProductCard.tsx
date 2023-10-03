import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ picture, url }: { picture: string; url: number }) => {
  return (
    <Link
      href={`/women-summer-2024/${url}`}
      className='flex justify-center items-center h-[400px] bg-gradient-to-tr from-stone-50 to-stone-200'>
      <Image
        src={picture}
        alt='picture'
        width={250}
        height={250}
        quality={80}
      />
    </Link>
  );
};

export default ProductCard;
