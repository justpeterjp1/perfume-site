import  { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
     const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };
    return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Be the first to know about new arrivals, exclusive offers, and fragrance tips
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white rounded-full uppercase tracking-wider hover:bg-[#C5A028] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
    )
}