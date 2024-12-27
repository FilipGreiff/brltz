export default function Footer() {
  return (
    <footer className="bg-secondary/90 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Kontakta oss</h3>
            <address className="not-italic">
              <p>AB Bröderna Lantz Spannmålsaffär</p>
              <p>Vankiva 2510</p>
              <p>28195 VANKIVA</p>
              <p className="mt-2">Tel: 0451-19090</p>
              <p>E-post: info@brlantz.se</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Öppettider Vankiva</h3>
            <p>Måndag - fredag: 08.00 - 17.00</p>
            <p className="text-sm text-white/80">(lunchstängt 12.00-13.00)</p>
            <p className="mt-2">Lördagar: 09.00-14.00</p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Öppettider Knislinge</h3>
            <p>Måndag - fredag: 8.00-16.30</p>
            <p className="text-sm text-white/80">(lunchstängt 12.00-12.30)</p>
            <p className="mt-2">Lördagar: Stängt tillsvidare</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Bröderna Lantz. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}