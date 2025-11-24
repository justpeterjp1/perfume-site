import ProductCard from "./ProductCard";
import AnimatedGrid from "./AnimatedGrid";

export default function BestOffers({ products, onCardClick, onQuickAdd }) {
  const offers = products.filter(p => p.oldPrice); // Only discounted items

  if (offers.length === 0) return null;

  return (
    <section className="bg-[--color-off-white] container mx-auto px-4 py-16">
      <AnimatedGrid className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Best Offers</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Grab top deals while stock lasts.
        </p>
      </AnimatedGrid>

      <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.slice(0, 8).map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onCardClick={onCardClick}
            onQuickAdd={onQuickAdd}
          />
        ))}
      </AnimatedGrid>
    </section>
  );
}
