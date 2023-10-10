import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order sent | Glamour Glow',
};

const OrderSuccessfulPage = () => {
  return (
    <main>
      <section>
        <div className='h-[100dvh] w-full flex flex-col justify-center items-center'>
          <h2 className='text-3xl'>Thank you for Order</h2>
          <span>*** Order has been sent to database ***</span>
        </div>
      </section>
    </main>
  );
};

export default OrderSuccessfulPage;
