import { ProductType } from '@/typings';
import ProductCard from '@/app/components/ProductCard';
import getDatabaseData from '@/app/lib/getDatabaseData';
import Video from '@/app/components/Video';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Women Summer 2024 | Glamour Glow',
};

const WomenSummer2024 = async () => {
  const { documents } = await getDatabaseData();

  return (
    <main>
      <section>
        <Video
          video='/homepage-video.mp4'
          button={false}
        />
      </section>
      <section>
        <div className='grid md:grid-cols-2 lg:grid-cols-4'>
          {documents.map((product: ProductType) => {
            if (product.id.includes('WS24'))
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                />
              );
          })}
        </div>
      </section>
    </main>
  );
};

export default WomenSummer2024;

export const generateStaticParams = async () => {
  const staticParams = await getDatabaseData();

  return staticParams.documents.map((obj: ProductType) => ({ id: obj.id }));
};
