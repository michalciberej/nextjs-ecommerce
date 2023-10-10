import { CartedProductType } from '@/typings';

export const decrementProductQuantity = (
  product: CartedProductType,
  setCarted: React.Dispatch<React.SetStateAction<CartedProductType[]>>,
  carted: CartedProductType[]
) => {
  setCarted(
    carted.map((productToIncrement: CartedProductType) => {
      if (
        productToIncrement.id === product.id &&
        productToIncrement.size === product.size &&
        productToIncrement.color === product.color &&
        productToIncrement.quantity > 1
      ) {
        productToIncrement.quantity--;
        return productToIncrement;
      }
      return productToIncrement;
    })
  );
};
