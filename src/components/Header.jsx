import React, {useState} from 'react'
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import logo from '../assets/perfume-logo.jpg'

export default function Header ({ searchQuery, onSearch, isMenuOpen, toggleMenu, cartCount, onCartClick}) {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const handleInputChange = (e) => {
        const query = e.target.value;
        onSearch(query);
    };

    const handleClearSearch = () => {
        onSearch(""); // Clear search
        setIsSearchExpanded(false);
    };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-inputBackground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
            {/* Mobile Menu Toggle */}
            <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <button 
                // onClick={onLogoClick} 
                className="flex-shrink-0 focus:outline-none"
            >
                <img 
                    src={logo} 
                    alt="Lolly's Hub - Your One Stop Perfume Plug" 
                    className="h-12 md:h-14 w-auto object-contain hover:opacity-80 transition-opacity"
                />
            </button>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
                <div className="relative w-4/5">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[--color-charcoal] opacity-50" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search for perfumes, brands..."
                        className="w-full pl-10 pr-10 py-2 bg-white border border-[--color-light-gray] rounded-full focus:outline-none focus:border-foreground transition-colors"
                    />
                    {/* ✅ Clear Button - Desktop */}
                    {searchQuery && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Clear search"
                        >
                            <X size={16} className="text-gray-400 hover:text-gray-600" />
                        </button>
                    )}
                </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
                {/* Mobile Search Toggle */}
                <button 
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                >
                    <Search size={24} />
                </button>

                {/* Cart Icon */}
                <button 
                    onClick={onCartClick}
                    className="relative p-2 hover:bg-muted rounded-lg transition-colors"
                >
                    <ShoppingCart size={24} />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-foreground text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cartCount > 9 ? '9+' : cartCount}
                        </span>
                    )}
                </button>
            </div>
        </div>

        {/* Mobile Search Expanded */}
        {isSearchExpanded && (
            <div className="md:hidden px-4 pb-4 animate-slideDown">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[--color-charcoal] opacity-50" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search for perfumes, brands..."
                        className="w-full pl-10 pr-10 py-2 bg-white border rounded-full focus:outline-none focus:border-foreground transition-colors"
                        autoFocus
                    />
                    {/* ✅ Clear Button - Mobile */}
                    {searchQuery && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Clear search"
                        >
                            <X size={16} className="text-gray-400 hover:text-gray-600" />
                        </button>
                    )}
                </div>
            </div>
        )}

        {/* Animation for mobile search */}
        <style jsx>{`
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .animate-slideDown {
                animation: slideDown 0.2s ease-out;
            }
        `}</style>
    </header>
  )
}