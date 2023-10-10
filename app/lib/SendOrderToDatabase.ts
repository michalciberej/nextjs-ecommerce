import { OrderType } from '@/typings';
import { ID } from 'appwrite';
import { database } from '../appwrite';

const SendOrderToDatabase = async (order: OrderType) => {
  await database
    .createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_ORDERS_COLLECTION_ID,
      ID.unique(),
      order
    )
    .catch((error) => {
      console.log(error);
    });
};

export default SendOrderToDatabase;
