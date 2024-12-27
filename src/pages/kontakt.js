import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Layout title="Kontakta oss">
      <Hero 
        title="Kontakta oss"
        subtitle="Vi finns här för dig"
      />
      
      <div className="bg-gold-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-secondary/20 p-8">
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white border border-secondary/20 p-8">
                <h2 className="text-2xl font-serif text-primary mb-6">Kontaktinformation</h2>
                <address className="not-italic space-y-4">
                  <div>
                    <p className="font-semibold">AB Bröderna Lantz Spannmålsaffär</p>
                    <p>Vankiva 2510</p>
                    <p>28195 VANKIVA</p>
                  </div>
                  <div>
                    <p>Tel: <a href="tel:045119090" className="text-primary hover:text-secondary">0451-19090</a></p>
                    <p>E-post: <a href="mailto:info@brlantz.se" className="text-primary hover:text-secondary">info@brlantz.se</a></p>
                  </div>
                </address>
              </div>
              
              <div className="bg-white border border-secondary/20 p-8">
                <h2 className="text-2xl font-serif text-primary mb-6">Öppettider</h2>
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
      </div>
    </Layout>
  );
}