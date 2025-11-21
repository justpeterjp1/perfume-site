import React from 'react';

// This component receives the individual brand object
export default function BrandCard({ brand }) {
  // Function to handle clicking on the brand card, typically redirects to the brand's product page
  const handleBrandClick = () => {
    console.log(`Navigating to products for: ${brand.name}`);
    // In a real app with react-router-dom, you would use navigate(`/brand/${brand.id}`);
  };

  return (
    <div 
      onClick={handleBrandClick}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100 flex flex-col items-center text-center"
    >
      {/* Brand Logo Placeholder */}
      <div className="w-20 h-20 mb-4 flex items-center justify-center border rounded-full">
        {/* This would be an <img src={brand.logo} /> in a final version */}
        <span className="text-xl font-semibold text-gray-700">{brand.name.substring(0, 1)}</span>
      </div>

      <h2 className="text-xl font-bold mb-1 text-gray-900">{brand.name}</h2>
      <p className="text-sm text-gray-500 italic">{brand.productCount} Products</p>
      
      {/* Optional: Brief description */}
      <p className="text-xs text-gray-400 mt-2 line-clamp-2">
        {brand.description}
      </p>
    </div>
  );
}