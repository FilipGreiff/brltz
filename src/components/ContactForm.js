export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Namn
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full border-secondary/30 rounded-sm shadow-sm focus:ring-secondary focus:border-secondary"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-post
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full border-secondary/30 rounded-sm shadow-sm focus:ring-secondary focus:border-secondary"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Meddelande
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full border-secondary/30 rounded-sm shadow-sm focus:ring-secondary focus:border-secondary"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-sm transition-colors"
      >
        Skicka meddelande
      </button>
    </form>
  );
}