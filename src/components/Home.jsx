import { useState, useRef } from 'react';
import HeroSection from './HeroSection';
import ProductCard from './ProductCard';
import BestOffers from './BestOffers';
import NewArrivals from './NewArrivals';
import AnimatedGrid from './AnimatedGrid';

export default function Home( { featuredProducts, onCardClick, onQuickAdd, onOpenQuiz, onNavigate,  }) {
    const newArrivalsRef = useRef(null);

  const scrollToNewArrivals = () => {
    if (newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
    return (
        <div>
            <HeroSection
           onShopNewArrivals={scrollToNewArrivals}
            />
             <section ref={newArrivalsRef}>
             {/* ⭐ NEW ARRIVALS */}
          <NewArrivals 
            products={featuredProducts || []}
            onCardClick={onCardClick}
            onQuickAdd={onQuickAdd}
          />
             </section>

      {/* ⭐ BEST OFFERS */}
      <BestOffers 
        products={featuredProducts} 
        onCardClick={onCardClick}
        onQuickAdd={onQuickAdd}
      />
            <section className="bg-rosegold/10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl font-bold">Featured Collection</h2>
          <p className="text-charcoal opacity-70 max-w-2xl mx-auto">
            Discover our handpicked selection of luxury fragrances from the world's most prestigious houses
          </p>
        </div>

        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCardClick={onCardClick}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </AnimatedGrid>
      </section>
          {/* Fragrance Quiz CTA */}
      <section className="bg-copper/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-">
            <h2 className="text-gray text-3xl font-semibold mb-4">Find Your Perfect Scent</h2>
            <p className="text-gray/90 mb-8 text-lg">
              Not sure which fragrance suits you best? Take our quick 5-question quiz and discover personalized recommendations tailored to your unique style and preferences.
            </p>
            <button 
              onClick={onOpenQuiz}
              className="bg-accent text-white hover:bg-copper px-8 py-4 rounded-full transition-colors text-lg"
            >
              Take the Fragrance Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className=" bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-3xl font-semibold">Shop by Collection</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Male Section */}
            <div 
              onClick={() => onNavigate("male")}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className=" men absolute inset-0 bg-primary group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-gray-900 mb-4 font-semibold text-xl">Men's Collection</h3>
                  <p className="text-gray-900 mb-6">Bold & Distinguished</p>
                  <button className="bg-accent hover:bg-copper text-white px-6 py-2 rounded-full transition-colors">
                    Explore Men's
                  </button>
                </div>
              </div>
            </div>

            {/* Female Section */}

            <div 
              onClick={() => onNavigate("female")}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="women absolute inset-0 bg-rosegold group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-white mb-4 font-semibold text-xl">Women's Collection</h3>
                  <p className="text-white/80 mb-6">Elegant & Timeless</p>
                  <button className="bg-accent hover:bg-copper text-white px-6 py-2 rounded-full transition-colors">
                    Explore Women's
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* Other Products Showcase */}
      <section className="bg-[--color-off-white] container mx-auto px-4 py-16 border-b">
        <h2 className="text-center mb-12 font-bold">Explore More</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Perfume Oils", value: "perfume-oils" },
            { label: "Diffusers", value: "diffusers" },
            { label: "Sprays", value: "sprays" },
            { label: "Soaps", value: "soaps" },
            { label: "Candles", value: "candles" },
            { label: "Gift Sets", value: "gift-sets" },
          ].map((category) => (
            <button
              key={category.value}
            //   onClick={() => onNavigate(category.value)}
              className="p-6 bg-white border border-gray-300 rounded-lg hover:border-foreground hover:shadow-lg transition-all text-center"
            >
              <div className="text-3xl mb-2">
                {category.value === "perfume-oils" && "💧"}
                {category.value === "diffusers" && "🌿"}
                {category.value === "sprays" && "💨"}
                {category.value === "soaps" && "🧼"}
                {category.value === "candles" && "🕯️"}
                {category.value === "gift-sets" && "🎁"}
              </div>
              <p className="text-sm">{category.label}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
    )
}