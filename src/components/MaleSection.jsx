import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import featuredProducts from "../data/featuredProducts"; // The complete product list
import { AnimatedGrid, FadeInOnView } from "./AnimatedGrid"
// Define the available note filters for this section
const MALE_NOTES = ['All', 'Woody', 'Musk', 'Spicy', 'Citrus', 'Amber', 'Aquatic', 'Leather'];

// --- Helper function to filter products based on notes and category ---
const filterProducts = (products, selectedNote) => {
  return products.filter(product => {
    // 1. Category Filter: Include 'male' or 'unisex' products only
    const isRelevantCategory = 
      product.category === 'male' || product.category === 'unisex';

    if (!isRelevantCategory) {
      return false;
    }

    // 2. Note Filter: Check if the product has the selected note
    if (selectedNote === 'All') {
      return true;
    }
    
    // Check if the product's 'notes' array includes the selectedNote (case-insensitive)
    const notesLower = product.notes.map(note => note.toLowerCase());
    return notesLower.includes(selectedNote.toLowerCase());
  });
};


const MaleSection = ({ onQuickAdd, onCardClick }) => {
  const [activeNote, setActiveNote] = useState('All');

  // Use useMemo to cache the list of products based on the active filter.
  // This prevents unnecessary re-filtering on every non-filter-related render.
  const displayedProducts = useMemo(() => {
    return filterProducts(featuredProducts, activeNote);
  }, [activeNote]); // Recalculate only when the activeNote changes

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        For Him & Unisex
      </h1>

      {/* 1. Filter Buttons for Notes */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {MALE_NOTES.map(note => (
          <button
            key={note}
            onClick={() => setActiveNote(note)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeNote === note 
                ? 'bg-[#D4AF37] text-white shadow-md' // Active style (Gold)
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Inactive style
              }
            `}
          >
            {note}
          </button>
        ))}
      </div>

      {/* 2. Product Grid */}
      {displayedProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">
            No perfumes found for the **{activeNote}** note in this section.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onCardClick={onCardClick}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MaleSection;