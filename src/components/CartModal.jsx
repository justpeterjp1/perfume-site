import React from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';


export function CartModal({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  return (
    <>
      
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" 
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-[50] flex justify-end items-start p-4 sm:pt-20 sm:pr-6 sm:pb-6">
        
        
        <div 
          className="max-w-xs sm:max-w-md w-full bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden" 
          onClick={(e) => e.stopPropagation()} 
        >
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-foreground" />
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              {items > 0 && (
                  <span className="text-sm text-gray-500">({items} items)</span>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 max-h-[70vh]"> 
            {items === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-center"> 
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 mb-2 font-medium">Your cart is empty</p>
                <p className="text-sm text-gray-400">Add some fragrances to get started</p>
              </div>
            ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-[--color-off-white] rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[--color-charcoal] opacity-70">{item.brand}</p>
                    <h4 className="mb-1 truncate">{item.name}</h4>
                    <p className="text-sm text-[--color-charcoal] opacity-70 mb-2">Size: {item.size}</p>
                    <p className="text-[--color-gold]">{item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[--color-light-gray] rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-2 hover:bg-[--color-light-gray] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-[--color-light-gray] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-foreground">₦0.00</span>
            </div>
            <button 
              disabled={items === 0}
              className="w-full bg-foreground text-white py-3 rounded-full uppercase tracking-wider font-semibold hover:bg-[#0c3c6ffa] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout
            </button>
            <button 
              onClick={onClose}
              className="w-full mt-2 text-gray-600 py-2 hover:text-[#2C2C2C] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}