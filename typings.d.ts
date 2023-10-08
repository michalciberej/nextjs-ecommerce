export interface ProductType {
  title: string;
  id: string;
  images: string[];
  description: string;
  price: number;
}

export interface CartedProductType {
  title: string;
  id: string;
  collection: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

export interface CustomerDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | string;
  address: string;
}

export interface OrderType {
  customer: CustomerDataType;
  orderedProducts: CartedProductType[];
}
