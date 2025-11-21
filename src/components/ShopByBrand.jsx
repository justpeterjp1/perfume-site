import React, { useState, useEffect } from 'react';
import BRANDS  from '../data/brands.js'; // Adjust the path as necessary

// Import a card component if you have one, or define it inline.
import BrandCard from './BrandCard.jsx'; // Assuming you'll create this later

export default function ShopByBrand() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use useEffect to simulate fetching data (or fetch from a real API)
  useEffect(() => {
    // In a real app, this would be an 'axios.get' or 'fetch' call.
    
    setTimeout(() => {
      setBrands(BRANDS); // Load the data into state
      setLoading(false);
    }, 500);
  }, []); 

  if (loading) {
    // Placeholder while data loads
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500">Loading exquisite brands...</p>
        {/* You might add a spinner here */}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#D4AF37]">
        Shop All Luxury Brands
      </h1>

      {/* Grid Layout for Brands */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          // Render a component for each brand
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}