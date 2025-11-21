import React, { useState, useEffect, useMemo } from 'react';
import BRANDS from '../data/brands.js';
import featuredProducts from '../data/featuredProducts.js'
import ProductCard from './ProductCard.jsx';
import BrandCard from './BrandCard.jsx'; 

// 1. DEFINE UTILITY FUNCTION OUTSIDE OR INSIDE, BUT BEFORE HOOKS
const getRandomSlice = (array, count) => {
  // 1. Create a shallow copy of the array to avoid modifying the original data source.
  const shuffled = [...array]; 

  // 2. Perform Fisher-Yates shuffle (in-place randomization on the copy)
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 3. Slice the array to get the desired number of items.
  return shuffled.slice(0, count);
};

export default function ShopByBrand({onCardClick, onQuickAdd}) {
  // 2. ALL HOOKS MUST BE CALLED UNCONDITIONALLY AT THE TOP LEVEL
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hook 1: useEffect for data fetching
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setBrands(BRANDS); 
      setLoading(false);
    }, 1000);
  }, []); 

  // Hook 2: useMemo for random product selection (Runs only on first render)
  const randomFeaturedProducts = useMemo(() => {
    // This call is now safe because it executes every time, even if 'loading' is true.
    return getRandomSlice(featuredProducts, 6);
  }, [featuredProducts]);


  // 3. CONDITIONAL EARLY RETURN MUST COME AFTER ALL HOOKS
  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500">Loading exquisite brands...</p>
      </div>
    );
  }

  // 4. RETURN THE MAIN CONTENT WHEN NOT LOADING
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#D4AF37]">
        Shop All Luxury Brands
      </h1>

      {/* Brand Grid */}
      <div className="m-4 p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>

      {/* Featured Products Grid (Uses the memoized random list) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {randomFeaturedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={onCardClick}
            onQuickAdd={onQuickAdd}
          />
        ))}
      </div>
    </div>
  );
}