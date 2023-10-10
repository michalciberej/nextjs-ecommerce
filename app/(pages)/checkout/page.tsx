import CheckoutForm from '@/app/components/CheckoutForm';
import CartedProductCards from '@/app/components/CartedProductCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout | Glamour Glow',
};

const CheckoutPage = () => {
  return (
    <main>
      <section>
        <div className='mx-[3vw] md:mx-[10vw] flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0 justify-center items-start pt-20 md:pb-40 md:pt-40 lg:pb-64 lg:pt-60 xl:pt-80 pb-20'>
          <CheckoutForm />
          <CartedProductCards />
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
