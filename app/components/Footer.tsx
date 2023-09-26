const Footer = () => {
  return (
    <footer>
      <div className='flex border-t-2 border-stone-200 text-xs text-stone-800 px-[10vw] justify-between py-20'>
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
              <button>FAQ's</button>
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
              <button>FAQ's</button>
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
      <div className='flex pb-10'>
        <h1 className='mx-auto text-3xl tracking-wider leading-tight font-bold'>
          FAKE STORE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
