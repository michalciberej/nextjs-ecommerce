import './globals.css';
import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartContextProvider from './hooks/CartContext';

const cabin = Cabin({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Glamour Glow',
  description: 'Fake ecommerce site created by Michal Ciberej',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cabin.className}>
        <CartContextProvider>
          <Navbar />
          {children}
        </CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
