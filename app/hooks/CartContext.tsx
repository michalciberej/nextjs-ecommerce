'use client';

import { CartedProductType } from '@/typings';
import { useState, createContext, useContext } from 'react';

type CartContextType = {
  carted: CartedProductType[];
  setCarted: React.Dispatch<React.SetStateAction<CartedProductType[]>>;
};

const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [carted, setCarted] = useState<CartedProductType[]>([]);

  return (
    <CartContext.Provider value={{ carted, setCarted }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};
