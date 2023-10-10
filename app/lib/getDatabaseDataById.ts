import { ProductType } from '@/typings';

const getDatabaseDataById = async (id: string) => {
  const res = await fetch(
    `https://cloud.appwrite.io/v1/databases/${process.env.NEXT_PUBLIC_DATABASE_ID}/collections/${process.env.NEXT_PUBLIC_PRODUCTS_COLLECTION_ID}/documents/`,
    {
      headers: {
        'content-type': 'application/json',
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID,
        'X-Appwrite-Key': process.env.NEXT_PUBLIC_API_KEY,
      },
      next: { revalidate: 0 },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  const product = res.documents.filter((obj: ProductType) => obj.id == id);

  return product[0];
};

export default getDatabaseDataById;
