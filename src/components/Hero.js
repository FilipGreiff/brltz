export default function Hero({ title, subtitle }) {
  return (
    <div className="relative h-[70vh] min-h-[500px] bg-hero bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 font-medium">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-3xl text-gold-light font-serif font-light tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}