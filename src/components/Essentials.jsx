import React from 'react';
import { ESSENTIAL_CATEGORIES, ESSENTIAL_PRODUCTS } from '../data/essentialsData';
import HorizontalScrollSection from './HorizontalScrollSection';

export default function Essentials({ onCardClick, onQuickAdd }) {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const groupedProducts = ESSENTIAL_CATEGORIES.map(category => ({
        ...category,
        products: ESSENTIAL_PRODUCTS.filter(p => p.category === category.id),
    }));

    return (
        <div className="bg-[#FAF7F0] min-h-screen">
            <div className="container mx-auto px-4 py-16">

                {/* Header & Navigation */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-[#D4AF37] mb-4">The Essentials</h1>
                    <p className="text-xl text-gray-700">
                        Explore our curated collection of luxury fragrance accessories.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {ESSENTIAL_CATEGORIES.map(category => (
                            <button
                                key={category.id}
                                onClick={() => scrollToSection(category.id)}
                                className="text-lg bg-foreground/10 font-medium text-gray-700 hover:text-[#D4AF37] transition-colors p-3 rounded-lg border border-transparent hover:border-gray-300 whitespace-nowrap"
                            >
                                {category.icon} {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                {groupedProducts.map(category => (
                    <div
                        key={category.id}
                        id={category.id}
                        className="mb-16"
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
