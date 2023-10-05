import Link from '@/node_modules/next/link';

const Footer = () => {
  return (
    <footer>
      <div className='flex border-t-2 border-stone-200 text-xs text-stone-800 px-[3vw] md:px-[10vw] justify-between py-20'>
        <div className='flex flex-col space-y-4'>
          <h3 className='text-stone-500'>HELP</h3>
          <ul className='space-y-2'>
            <li>
              <button>Product Care</button>
            </li>
            <li>
              <button>Stores</button>
            </li>
            <li>
              <button>FAQ</button>
            </li>
          </ul>
        </div>
        <div className='flex flex-col space-y-4'>
          <h3 className='text-stone-500'>SERVICES</h3>
          <ul className='space-y-2'>
            <li>
              <button>Repairs</button>
            </li>
            <li>
              <button>Gifts</button>
            </li>
            <li>
              <button>Download our App</button>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-start space-y-4'>
          <h3 className='text-stone-500'>HELP</h3>
          <ul className='space-y-2'>
            <li>
              <button>Product Care</button>
            </li>
            <li>
              <button>Stores</button>
            </li>
            <li>
              <button>FAQ</button>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-start space-y-4'>
          <h3 className='text-stone-500'>CONNECT</h3>
          <ul className='space-y-2'>
            <li>
              <button>Product Care</button>
            </li>
            <li>
              <button>Stores</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center mb-10'>
        <Link href={'/'}>
          <h1 className='text-xl tracking-widest font-bold'>Glamour Glow</h1>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
