import React, { useEffect, useRef } from "react";
import { ShoppingBag, X } from 'lucide-react'; 

export default function CartModal({
  isOpen,
  onClose,
  items, // Assumed to be an array of cart items
  onUpdateQuantity,
  onRemoveItem,
}) {
  const modalRef = useRef(null);

  // --- Utility Hooks ---
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

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

  if (!isOpen) return null;

  // 💰 CORRECT TOTAL CALCULATION LOGIC
  const total = items.reduce(
    (sum, item) => {
      // 1. Remove currency symbol (₦) and commas (,) from the price string
      const priceStringClean = item.price.replace(/[₦,]/g, ''); 
      
      // 2. Parse the cleaned string as a float
      const price = parseFloat(priceStringClean) || 0;
      
      // 3. Ensure quantity is an integer
      const quantity = parseInt(item.quantity) || 0;

      return sum + (price * quantity);
    },
    0
  );

  // Convert "₦85,000" → 85000
const parsePrice = (str) => {
  if (!str) return 0;
  return parseFloat(str.replace(/[₦,]/g, '')) || 0;
};


  // Temporary whatsapp checkout
  const handleWhatsAppCheckout = () => {
  if (items.length === 0) return;

  const phoneNumber = "2347012624054";

  let message = "🛍️ *New Order from Lolly's Hub*\n\n";
  message += "*Products:*\n";

  items.forEach((item, index) => {
    const price = parsePrice(item.price);
    const subtotal = price * item.quantity;

    message += `${index + 1}. ${item.name}\n`;
    message += `   Brand: ${item.brand}\n`;
    message += `   Price: ₦${price.toLocaleString()}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Subtotal: ₦${subtotal.toLocaleString()}\n\n`;
  });

  message += `*Total: ₦${total.toLocaleString()}*\n\n`;
  message += "Please confirm my order. Thank you! 🙏";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
};


  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex justify-end"
      onClick={onClose} 
    >
      {/* RIGHT SLIDE-IN PANEL */}
      <div
        ref={modalRef}
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slideIn"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* ---------- HEADER (Fixed) ---------- */}
        <div className="flex-shrink-0 p-6 border-b flex items-center justify-between bg-white shadow-sm">
          <div className="flex items-center gap-3">
            {/* Shopping Bag Icon restored */}
            <ShoppingBag className="w-6 h-6 text-foreground" /> 
            
            <div>
              <h2 className="font-bold text-xl text-gray-900">Shopping Cart</h2>
              {items.length > 0 && (
                <p className="text-sm text-gray-500 mt-1">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              )}
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-600 hover:text-gray-900"
            aria-label="Close cart"
          >
            {/* Lucide X icon restored */}
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* ---------- SCROLLABLE CART ITEMS ---------- */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              {/* Shopping Bag Icon restored for empty state */}
              <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" /> 
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add some fragrances to get started!</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white"
              >
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                    alt={item.name}
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                    {/* Price displayed from original item string (₦420,000) */}
                    <p className="text-foreground font-bold text-lg mt-1">
                      {item.price} 
                    </p>
                  </div>

                  {/* Quantity Controls and Remove Button */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 rounded-l-lg transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="font-semibold min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 rounded-r-lg transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ---------- STICKY FOOTER (Fixed) ---------- */}
        <div className="flex-shrink-0 p-6 border-t bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          {/* Subtotal */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium">Subtotal</span>
            {/* Total displayed correctly with Naira symbol and formatting */}
            <span className="text-2xl font-bold text-foreground">
              ₦{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          {/* Shipping Notice */}
          {items.length > 0 && (
            <p className="text-xs text-gray-500 mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
          )}

          {/* Checkout Button */}
           

          <button
            disabled={items.length === 0}
            className="w-full bg-foreground text-white py-4 rounded-full font-semibold text-lg
                        hover:bg-[#104a7aff] transition-colors shadow-lg mb-3
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-foreground"
          >
            {items.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
          </button>

          <button
            onClick={handleWhatsAppCheckout}
            disabled={items.length === 0}
            className="w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Checkout via WhatsApp
          </button>

          {/* Continue Shopping */}
          <button
            onClick={onClose}
            className="w-full mt-3 text-gray-600 hover:text-gray-900 py-2 font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Slide-in Animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}