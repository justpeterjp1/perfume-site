import React, { useRef } from 'react';
import ESSENTIAL_CATEGORIES from '../data/essentialsData'; 
import HorizontalScrollSection from './HorizontalScrollSection'; 

export default function Essentials({ onCardClick, onQuickAdd }) {
    // Use useRef to hold references to each section container for scrolling
    const sectionRefs = useRef({});

    // Function to scroll to a specific section by its ID
    const scrollToSection = (id) => {
        const element = sectionRefs.current[id];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="bg-[#FAF7F0] min-h-screen">
            <div className="container mx-auto px-4 py-16">
                
                {/* --- 1. Navigation Header --- */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-[#D4AF37] mb-4">The Essentials</h1>
                    <p className="text-xl text-gray-700">Explore our curated collection of luxury fragrance accessories.</p>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {ESSENTIAL_CATEGORIES.map(category => (
                            <button
                                key={category.id}
                                onClick={() => scrollToSection(category.id)}
                                className="text-lg font-medium text-gray-700 hover:text-[#D4AF37] transition-colors p-3 rounded-lg border border-transparent hover:border-gray-300 whitespace-nowrap"
                            >
                                {category.icon} {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- 2. Sections Container --- */}
                {ESSENTIAL_CATEGORIES.map(category => (
                    <div 
                        key={category.id}
                        id={`essential-${category.id}`} // Used for direct external links if needed
                        className="mb-16"
                        // Attach the ref for the scrollIntoView function
                        ref={el => sectionRefs.current[category.id] = el}
                    >
                        <HorizontalScrollSection
                            title={category.name}
                            products={category.products}
                            onCardClick={onCardClick}
                            onQuickAdd={onQuickAdd}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}