import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SupplierCard from '../components/SupplierCard';

export default function Suppliers() {
  const suppliers = [
    {
      name: "Nordic Grain",
      logo: "https://placehold.co/400x200/E5D5B7/1B4B8A?text=Nordic+Grain",
      description: "Premium spannmålsprodukter från svenska gårdar"
    },
    {
      name: "Svenska Foder",
      logo: "https://placehold.co/400x200/E5D5B7/1B4B8A?text=Svenska+Foder",
      description: "Kvalitetsfoder för alla djur"
    },
    {
      name: "Gyllebo Gödning",
      logo: "https://placehold.co/400x200/E5D5B7/1B4B8A?text=Gyllebo",
      description: "Naturlig gödning för bättre skördar"
    },
    {
      name: "Lantmännen",
      logo: "https://placehold.co/400x200/E5D5B7/1B4B8A?text=Lantmännen",
      description: "Sveriges ledande lantbrukskooperativ"
    },
    {
      name: "Farm & Forest",
      logo: "https://placehold.co/400x200/E5D5B7/1B4B8A?text=Farm+%26+Forest",
      description: "Skogsbruksprodukter av högsta kvalitet"
    },
    {
      name: "Agro Oil",
      logo: "https://placehold.co/400x200/E5D5B7/1B4B8A?text=Agro+Oil",
      description: "Förstklassiga oljor och smörjmedel"
    }
  ];

  return (
    <Layout title="Leverantörer">
      <Hero 
        title="Våra Leverantörer"
        subtitle="Kvalitet från utvalda partners"
      />
      
      <div className="bg-gold-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suppliers.map((supplier, index) => (
              <SupplierCard key={index} {...supplier} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}