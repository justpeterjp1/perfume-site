import { useState, useEffect, useRef } from 'react';


export default function Navbar({ isOpen, onClose,  setCurrentSection }) {
  const [showEssentials, setShowEssentials] = useState(false);
  

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
    
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        onClose();
      }
    }

   
    document.addEventListener("mousedown", handleClickOutside);
    
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);


  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      onClose();
      
      setShowEssentials(false); 
    }
  };

  const home = () => {
    setCurrentSection("home")
    handleLinkClick()
  }
  const brand = () => {
    setCurrentSection("shop")
    handleLinkClick()
  }
  const male = () => {
    setCurrentSection("shop")
    handleLinkClick()
  }
  const female = () => {
    setCurrentSection("shop")
    handleLinkClick()
  }
  const essential = () => {
    setCurrentSection("shop")
    handleLinkClick()
  }

  return (
    
    <header 
      ref={navRef} 
      className="sticky top-20 z-50 w-full bg-secondary border-b border-muted"
    >
      <div className="flex items-center justify-center p-0 md:px-6 md:py-4">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-primary">
          <a onClick={home} className="hover:text-accent transition">Home</a>
          <a onClick={brand} className="hover:text-accent transition">Shop by Brand</a>
          <a onClick={male} className="hover:text-accent transition">Male Section</a>
          <a onClick={female} className="hover:text-accent transition">Female Section</a>

          <div className="relative group">
            <button className="hover:text-accent transition">Body Essentials</button>
            <div className="absolute hidden group-hover:flex flex-col top-full left-0 mt-2 bg-secondary shadow-lg rounded-lg p-4 gap-2 w-56 z-50">
              <a className="text-primary hover:text-accent hover:bg-cream/50 px-3 py-2 rounded-md transition whitespace-nowrap">
                💧 Perfume Oils
              </a>
              <a className="text-primary hover:text-accent hover:bg-cream/50 px-3 py-2 rounded-md transition whitespace-nowrap">
                🕯️ Diffusers
              </a>
              <a className="text-primary hover:text-accent hover:bg-cream/50 px-3 py-2 rounded-md transition whitespace-nowrap">
                ✨ Body Sprays
              </a>
              <a className="text-primary hover:text-accent hover:bg-cream/50 px-3 py-2 rounded-md transition whitespace-nowrap">
                🧼 Luxury Soaps
              </a>
              <a className="text-primary hover:text-accent hover:bg-cream/50 px-3 py-2 rounded-md transition whitespace-nowrap">
                🕯️ Scented Candles
              </a>
              <a className="text-primary hover:text-accent hover:bg-cream/50 px-3 py-2 rounded-md transition whitespace-nowrap">
                🎁 Gift Sets
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 py-4 bg-secondary border-t border-muted">
          {/* 6. Add onClick={handleLinkClick} to ALL mobile links */}
          <a 
            onClick={home}
            className="px-4 py-3 rounded-lg text-primary hover:bg-cream hover:text-accent transition-all duration-200 font-medium cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={brand}
            className="px-4 py-3 rounded-lg text-primary hover:bg-cream hover:text-accent transition-all duration-200 font-medium cursor-pointer"
          >
            Shop by Brand
          </a>
          <a 
            onClick={male}
            className="px-4 py-3 rounded-lg text-primary hover:bg-cream hover:text-accent transition-all duration-200 font-medium cursor-pointer"
          >
            Male Section
          </a>
          <a 
            onClick={female}
            className="px-4 py-3 rounded-lg text-primary hover:bg-cream hover:text-accent transition-all duration-200 font-medium cursor-pointer"
          >
            Female Section
          </a>

          {/* Essentials Dropdown */}
          <div className="mt-2">
            <button 
              onClick={() => setShowEssentials(prev => !prev)}
              className="w-full px-4 py-3 rounded-lg flex justify-between items-center text-left hover:bg-cream hover:text-accent transition-all duration-200 font-medium group"
            >
              <span>Essentials</span>
              <span 
                className={`text-accent transition-transform duration-300 ${
                  showEssentials ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                showEssentials ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-1 mt-2 ml-4 pl-4 border-l-2 border-gold/30">
                {/* Add handleLinkClick to sub-menu items as well */}
                <a onClick={handleLinkClick} className="cursor-pointer py-2.5 px-3 text-sm text-primary/80 hover:text-accent hover:bg-cream/50 rounded-md transition-all duration-200 whitespace-nowrap">
                  💧 Perfume Oils
                </a>
                <a onClick={handleLinkClick} className="cursor-pointer py-2.5 px-3 text-sm text-primary/80 hover:text-accent hover:bg-cream/50 rounded-md transition-all duration-200 whitespace-nowrap">
                  🕯️ Diffusers
                </a>
                <a onClick={handleLinkClick} className="cursor-pointer py-2.5 px-3 text-sm text-primary/80 hover:text-accent hover:bg-cream/50 rounded-md transition-all duration-200 whitespace-nowrap">
                  ✨ Body Sprays
                </a>
                <a onClick={handleLinkClick} className="cursor-pointer py-2.5 px-3 text-sm text-primary/80 hover:text-accent hover:bg-cream/50 rounded-md transition-all duration-200 whitespace-nowrap">
                  🧼 Luxury Soaps
                </a>
                <a onClick={handleLinkClick} className="cursor-pointer py-2.5 px-3 text-sm text-primary/80 hover:text-accent hover:bg-cream/50 rounded-md transition-all duration-200 whitespace-nowrap">
                  🕯️ Scented Candles
                </a>
                <a onClick={handleLinkClick} className="cursor-pointer py-2.5 px-3 text-sm text-primary/80 hover:text-accent hover:bg-cream/50 rounded-md transition-all duration-200 whitespace-nowrap">
                  🎁 Gift Sets
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}