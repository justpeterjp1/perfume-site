import React, { useState, useEffect, useMemo } from 'react';
import BRANDS from '../data/brands.js';
import featuredProducts from '../data/featuredProducts.js';
import ProductCard from './ProductCard.jsx';
import BrandCard from './BrandCard.jsx';
import AnimatedGrid from './AnimatedGrid.jsx';

// Utility function to shuffle and pick a subset of array
const getRandomSlice = (array, count) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

export default function ShopByBrand({ onCardClick, onQuickAdd }) {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeBrand, setActiveBrand] = useState(null);

  // Simulate fetching brands
  useEffect(() => {
    setTimeout(() => {
      setBrands(BRANDS);
      setLoading(false);
    }, 500); // slightly faster
  }, []);

  // Compute displayed products: filter by brand or random
  const displayedProducts = useMemo(() => {
    if (activeBrand) {
      return featuredProducts.filter(p => p.brand === activeBrand);
    }
    return getRandomSlice(featuredProducts, 6);
  }, [activeBrand]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500">Loading exquisite brands...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#D4AF37]">
        Shop All Luxury Brands
      </h1>

      {/* Brand Grid */}
      <div className="m-4 p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <BrandCard
            key={brand.id}
            brand={brand}
            onClick={() => setActiveBrand(brand.name)}
            // Add highlight if this brand is selected
            isActive={activeBrand === brand.name}
          />
        ))}
      </div>

      {/* Show All button */}
      {activeBrand && (
        <div className="text-center my-4">
          <button
            onClick={() => setActiveBrand(null)}
            className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            Show All
          </button>
        </div>
      )}

      {/* Featured Products Grid */}
      <AnimatedGrid key={activeBrand || 'all'} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={onCardClick}
            onQuickAdd={onQuickAdd}
          />
        ))}
      </AnimatedGrid>
    </div>
  );
}
