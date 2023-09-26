import Link from '@/node_modules/next/link';

const NotFound = () => {
  return (
    <main className='h-screen w-full text-gray-50 flex items-center justify-center flex-col'>
      <h2 className='text-xl'>Looks like something went wrong.</h2>
      <p className='text-lg'>
        Go back
        <Link
          href='/'
          className='text-amber-500 hover:underline ml-1'>
          Home
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
