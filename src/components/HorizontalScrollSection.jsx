import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard'; // Assuming you reuse ProductCard
import AnimatedGrid from './AnimatedGrid';
const HorizontalScrollSection = ({ title, products, onCardClick, onQuickAdd }) => {
    const scrollRef = useRef(null);
    
    // Function to handle the smooth horizontal scrolling
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust scroll distance as needed
            if (direction === 'left') {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-semibold text-[#2C2C2C]">{title}</h2>
                <div className="flex gap-2">
                    {/* Scroll Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full bg-gray-100 shadow-md hover:bg-gray-200 flex items-center justify-center transition-all"
                        aria-label={`Scroll left for ${title}`}
                    >
                        <ChevronLeft className="w-5 h-5 text-[#2C2C2C]" />
                    </button>
                    {/* Scroll Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full bg-gray-100 shadow-md hover:bg-gray-200 flex items-center justify-center transition-all"
                        aria-label={`Scroll right for ${title}`}
                    >
                        <ChevronRight className="w-5 h-5 text-[#2C2C2C]" />
                    </button>
                </div>
            </div>

            <AnimatedGrid
                ref={scrollRef}
                // Key classes for horizontal scroll: flex gap-6 overflow-x-auto
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar CSS
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        // flex-shrink-0 and fixed width are crucial for horizontal cards
                        className="flex-shrink-0 w-64 group cursor-pointer" 
                    >
                        {/* Assuming ProductCard is used for item display */}
                        <ProductCard 
                            product={product} 
                            onCardClick={onCardClick} 
                            onQuickAdd={onQuickAdd} 
                        />
                    </div>
                ))}
            </AnimatedGrid>
        </section>
    );
};

export default HorizontalScrollSection;