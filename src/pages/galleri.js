import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Gallery() {
  const images = [
    { src: '/gallery/store1.jpg', alt: 'Butiken utifrån' },
    { src: '/gallery/products1.jpg', alt: 'Våra produkter' },
    { src: '/gallery/environment1.jpg', alt: 'Vår miljö' },
  ];

  return (
    <Layout title="Galleri">
      <Hero 
        title="Galleri"
        subtitle="Upptäck vår fina miljö"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-4 aspect-h-3">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}