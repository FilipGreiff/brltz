export default function SupplierCard({ name, logo, description }) {
  return (
    <div className="bg-white border border-secondary/20 p-8 transition-shadow hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={logo}
          alt={name}
          className="object-contain w-full h-full"
        />
      </div>
      <h3 className="text-xl font-serif text-primary mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}