import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="Bröderna Lantz"
        subtitle="Din lokala lantgårdsbutik i Vankiva"
      />
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                På Bröderna Lantz i Vankiva har vi grus och makadam för avhämtning/leverans. 
                Vi hjälper dig gärna att lasta ditt släp. Behöver du endast några hinkar går 
                det såklart också bra.
              </p>
              <p className="text-lg text-gray-700">
                Vi har även matjord och leksand. Tveka inte att höra av dig om du undrar 
                över något!
              </p>
              <div className="border border-secondary/20 p-6 bg-gold-light/10">
                <h2 className="text-xl font-serif text-primary mb-4">Bröderna Lantz Overall</h2>
                <p>Finns att köpa hos oss</p>
                <p className="text-lg font-semibold mt-2 text-wheat-dark">
                  560:- ex.moms (700:- ink.moms)
                </p>
              </div>
            </div>
            
            <div className="border border-secondary/20 p-6 bg-gold-light/10">
              <h2 className="text-xl font-serif text-primary mb-4">Öppettider</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Vankiva</h3>
                  <p>Måndag - fredag: 08.00 - 17.00</p>
                  <p className="text-sm text-gray-600">(lunchstängt 12.00-13.00)</p>
                  <p>Lördagar: 09.00-14.00</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Knislinge</h3>
                  <p>Måndag - fredag: 8.00-16.30</p>
                  <p className="text-sm text-gray-600">(lunchstängt 12.00-12.30)</p>
                  <p>Lördagar: Stängt tillsvidare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}