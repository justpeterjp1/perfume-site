import React from 'react';

export default function BrandCard({ brand, onClick, isActive }) {
  // Function to handle clicking on the brand card, typically redirects to the brand's product page
  

  return (
    <div 
      onClick={onClick}
      className={`bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 
        cursor-pointer border border-gray-100 flex flex-col items-center text-center
        ${isActive ? 'ring-2 ring-[#D4AF37] scale-105' : ''}
        `}
    >
      {/* <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full overflow-hidden border border-gray-200">
        <img 
          src={brand.image} // ⬅️ Use the image path from the data
          alt={`${brand.name} Logo`} 
          className="w-full h-full object-contain p-2" // Use object-contain to ensure the logo fits without cropping
        />
      </div> */}

      <h2 className="text-xl font-bold mb-1 text-gray-900">{brand.name}</h2>
      
      {/* Display product count */}
      <p className="text-sm text-gray-500 italic">
        {brand.productCount} {brand.productCount === 1 ? 'Product' : 'Products'}
      </p>
      
      {/* Display description */}
      <p className="text-xs text-gray-400 mt-2 line-clamp-2 h-8">
        {brand.description}
      </p>
    </div>
  );
}