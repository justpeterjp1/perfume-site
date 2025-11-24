import ProductCard from "./ProductCard";
import { AnimatedGrid, FadeInOnView } from "./AnimatedGrid";

export default function NewArrivals({ products, onCardClick, onQuickAdd }) {
  const newArrivals = products.slice(-8); // last 6 = newest

  return (
    <section className="bg-white container mx-auto px-4 py-16">
      <FadeInOnView className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">New Arrivals</h2>
        <p className="text-gray-600 p-4 text-xl  max-w-xl mx-auto">
          Fresh new fragrances just added to the collection.
        </p>
      </FadeInOnView>
      
      <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {newArrivals.map((product) => (
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
