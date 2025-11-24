import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Heart, Package, Sparkles } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Set default size when product changes
  useEffect(() => {
    if (product?.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  const parsePrice = (priceString) => {
    if (typeof priceString === 'number') return priceString;
    return parseFloat(priceString.replace(/[₦,]/g, '')) || 0;
  };

  const totalPrice = parsePrice(product.price) * quantity;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-8 p-8">
          
          {/* LEFT: Product Image */}
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Heart 
                className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              />
            </button>
          </div>

          {/* RIGHT: Product Details */}
          <div className="flex flex-col">
            
            {/* Brand */}
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              {product.brand}
            </p>

            {/* Product Name */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-4xl font-bold text-[#D4AF37] mb-6">
              {product.price}
            </p>

            {/* Description */}
            {product.description && (
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Fragrance Notes (for perfumes) */}
            {product.notes && product.notes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  Fragrance Notes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector (for perfumes) */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select Size
                </label>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-[#D4AF37] bg-amber-50 text-[#D4AF37]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Items Included (for gift sets) */}
            {product.itemsIncluded && (
              <div className="mb-6 flex items-center gap-2 text-gray-600">
                <Package className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">
                  <strong>Includes:</strong> {product.itemsIncluded}
                </span>
              </div>
            )}

            {/* Weight (for soaps) */}
            {product.weight && (
              <div className="mb-6 flex items-center gap-2 text-gray-600">
                <Package className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">
                  <strong>Weight:</strong> {product.weight}
                </span>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-semibold"
                >
                  −
                </button>
                <span className="text-xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            {quantity > 1 && (
              <div className="mb-6 p-4 bg-amber-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Total Price:</span>
                  <span className="text-2xl font-bold text-[#D4AF37]">
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#D4AF37] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#C5A028] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              
              <button
                onClick={onClose}
                className="px-6 py-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
              >
                Cancel
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Free shipping over ₦50,000
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Authentic products
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Secure payment
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  24/7 support
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}