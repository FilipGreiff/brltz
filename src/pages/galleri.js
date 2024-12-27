import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { 
      src: 'https://images.unsplash.com/photo-1589923188900-85dae523342b',
      alt: 'Butiken utifrån',
      span: 'col-span-1',
    },
    { 
      src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
      alt: 'Våra produkter',
      span: 'col-span-2',
    },
    { 
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      alt: 'Vår miljö',
      span: 'col-span-1',
    },
    { 
      src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae',
      alt: 'Lager',
      span: 'col-span-1',
    },
    { 
      src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01',
      alt: 'Maskiner',
      span: 'col-span-1',
    },
    { 
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      alt: 'Utomhusmiljö',
      span: 'col-span-2',
    },
  ];

  return (
    <Layout title="Galleri">
      <Hero 
        title="Galleri"
        subtitle="Upptäck vår fina miljö"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`${image.span} relative group cursor-pointer overflow-hidden rounded-lg`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-secondary"
            onClick={() => setSelectedImage(null)}
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </Layout>
  );
}