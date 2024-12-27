import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Image from 'next/image';

export default function Suppliers() {
  const suppliers = [
    { logo: '/lev1.jpg', name: 'Leverantör 1', description: 'Kvalitetsprodukter för lantbruk och trädgård' },
    { logo: '/lev2.gif', name: 'Leverantör 2', description: 'Specialister inom jordbruksprodukter' },
    { logo: '/lev3.jpg', name: 'Leverantör 3', description: 'Ledande leverantör av lantbruksutrustning' },
    { logo: '/lev4.jpg', name: 'Leverantör 4', description: 'Innovativa lösningar för moderna lantbrukare' },
    { logo: '/lev5.png', name: 'Leverantör 5', description: 'Hållbara produkter för framtidens jordbruk' },
    { logo: '/lev6.png', name: 'Leverantör 6', description: 'Expertis inom lantbruksmaskiner' },
    { logo: '/lev7.png', name: 'Leverantör 7', description: 'Kvalitetsprodukter för professionella användare' },
    { logo: '/lev8.png', name: 'Leverantör 8', description: 'Specialister på jordbruksutrustning' },
    { logo: '/lev9.png', name: 'Leverantör 9', description: 'Innovativa lantbrukslösningar' },
    { logo: '/lev10.png', name: 'Leverantör 10', description: 'Ledande inom lantbruksteknik' },
    { logo: '/lev11.jpg', name: 'Leverantör 11', description: 'Kvalitetsprodukter för moderna gårdar' },
    { logo: '/lev12.jpg', name: 'Leverantör 12', description: 'Experter på lantbruksutrustning' },
    { logo: '/lev13.jpg', name: 'Leverantör 13', description: 'Innovativa lösningar för lantbruket' },
    { logo: '/lev14.jpg', name: 'Leverantör 14', description: 'Specialister inom jordbruksprodukter' },
  ];

  return (
    <Layout title="Leverantörer">
      <Hero 
        title="Våra Leverantörer"
        subtitle="Samarbetspartners vi litar på"
      />
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suppliers.map((supplier, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all hover:shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={supplier.logo}
                    alt={supplier.name}
                    className="object-contain w-full h-full transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{supplier.name}</h3>
                <p className="text-gray-600">{supplier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 