import Layout from '../components/Layout';
import Hero from '../components/Hero';
import LogoBanner from '../components/LogoBanner';
import { ArrowRightIcon, ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="Bröderna Lantz"
        subtitle="Din lokala lantgårdsbutik i Vankiva"
      />
      
      {/* Featured Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-primary mb-4">Våra Tjänster</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder ett brett utbud av produkter och tjänster för ditt hem och trädgård
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gold-light/5 p-6 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all">
              <h3 className="font-semibold text-xl mb-3">Grus & Makadam</h3>
              <p className="text-gray-600 mb-4">Avhämtning eller leverans. Vi hjälper dig att lasta.</p>
              <Link href="/kontakt" className="text-primary hover:text-secondary flex items-center gap-2">
                Kontakta oss <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gold-light/5 p-6 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all">
              <h3 className="font-semibold text-xl mb-3">Matjord & Leksand</h3>
              <p className="text-gray-600 mb-4">Kvalitetsprodukter för din trädgård.</p>
              <Link href="/kontakt" className="text-primary hover:text-secondary flex items-center gap-2">
                Kontakta oss <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gold-light/5 p-6 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all">
              <h3 className="font-semibold text-xl mb-3">Bröderna Lantz Overall</h3>
              <p className="text-gray-600 mb-4">560:- ex.moms (700:- ink.moms)</p>
              <Link href="/kontakt" className="text-primary hover:text-secondary flex items-center gap-2">
                Beställ nu <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-primary mb-4">Våra Samarbetspartners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Vi samarbetar med ledande leverantörer för att erbjuda dig de bästa produkterna
            </p>
          </div>
          <LogoBanner />
          <div className="text-center mt-8">
            <Link 
              href="/leverantorer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 text-primary rounded-lg transition-all"
            >
              Se alla leverantörer
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact & Hours Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary mb-6">Kontakta Oss</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="font-semibold">Vankiva 2510</p>
                    <p>28195 VANKIVA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-6 w-6 text-secondary" />
                  <div>
                    <p>Tel: <a href="tel:045119090" className="text-primary hover:text-secondary">0451-19090</a></p>
                    <p>E-post: <a href="mailto:info@brlantz.se" className="text-primary hover:text-secondary">info@brlantz.se</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary mb-6">Öppettider</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <ClockIcon className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Vankiva</h3>
                    <p>Måndag - fredag: 08.00 - 17.00</p>
                    <p className="text-sm text-gray-600">(lunchstängt 12.00-13.00)</p>
                    <p>Lördagar: 09.00-14.00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClockIcon className="h-6 w-6 text-secondary flex-shrink-0" />
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