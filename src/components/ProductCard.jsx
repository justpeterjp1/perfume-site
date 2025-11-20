import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';


export default function ProductCard({ product, onCardClick, onQuickAdd }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <div
      className="group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* Image Container */}
         <div className="relative aspect-square bg-white overflow-hidden" onClick={onCardClick(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> 
            <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product.id);
            }}
            className="w-full bg-[#D4AF37] text-white py-2 rounded-full flex items-center justify-center gap-2 uppercase tracking-wider hover:bg-[#C5A028] transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Quick Add
          </button>
        </div>
        </div>
        {/* Product Info */}
        <div className="p-4" onClick={onCardClick}>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{product.brand}</p>
            <h3 className="text-[#2C2C2C] mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-[#D4AF37]">{product.price}</p>
        </div>
    </div>
    )
}