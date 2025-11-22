import { useState, useRef } from 'react'
import './App.css';
import Header from './components/Header';
import CartModal from './components/CartModal';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Brands from './components/ShopByBrand';
import { FragranceQuiz } from './components/FragranceQuiz';
import NewsLetter from './components/NewsLetter';
import { Toast } from './components/Toast';
import MaleSection from './components/MaleSection';
import FemaleSection from './components/FemaleSection';
import Essentials from './components/Essentials';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard'; // ✅ ADD THIS IMPORT

import featuredProducts from './data/featuredProducts'
import { ESSENTIAL_PRODUCTS } from './data/essentialsData';

function App() {
  const essentialSectionRefs = useRef({}); 
  const scrollToSection = (id) => {
    const element = essentialSectionRefs.current[id];
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Attempted to scroll to section '${id}', but ref not found.`);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // ✅ FIXED: Simplified search handler
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      setCurrentSection('home'); // Go back to home when search is cleared
      return;
    }

    const lowerQuery = query.toLowerCase();

    // Combine all products
    const allProducts = [...featuredProducts, ...ESSENTIAL_PRODUCTS];

    const results = allProducts.filter(p => {
      return (
        p.name?.toLowerCase().includes(lowerQuery) ||
        p.description?.toLowerCase().includes(lowerQuery) ||
        p.brand?.toLowerCase().includes(lowerQuery) ||
        (p.notes && Array.isArray(p.notes) && p.notes.some(note => note.toLowerCase().includes(lowerQuery)))
      );
    });

    setSearchResults(results);
    setCurrentSection("search"); 
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Opening individual product modal
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Adding to cart
  const handleAddToCart = (productId, size) => {
    const allProducts = [...featuredProducts, ...ESSENTIAL_PRODUCTS];
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId && item.size === size);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: 1,
        size: size,
      }];
    });

    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
  };

  const handleQuickAdd = (product) => {
    console.log('Adding to cart:', product);

    if (!product || !product.id) {
      console.error('Invalid product:', product);
      return;
    }

    if (!product.price) {
      console.warn('Product has no price, defaulting to 0:', product);
    }

    const size = product.sizes && product.sizes.length > 0 ? product.sizes[0] : null;
    handleAddToCart(product.id, size);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(itemId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleNavigate = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
    setSearchQuery(""); // ✅ Clear search when navigating
    setSearchResults([]); // ✅ Clear results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ FIXED: Search results as a section
  const renderSection = () => {
    // Show search results if searching
    if (currentSection === "search" && searchQuery.trim()) {
      return (
        <section className="container mx-auto px-4 py-16 min-h-screen">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Search Results
            </h2>
            <p className="text-gray-600">
              Found {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} for "{searchQuery}"
            </p>
          </div>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onCardClick={handleCardClick}
                  onQuickAdd={handleQuickAdd}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 mb-6">
                Try searching with different keywords
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSearchResults([]);
                  setCurrentSection("home");
                }}
                className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg hover:bg-[#C5A028] transition-colors"
              >
                Back to Home
              </button>
            </div>
          )}
        </section>
      );
    }

    // Regular sections
    switch (currentSection) {
      case 'home':
        return (
          <Home
            featuredProducts={featuredProducts}
            onCardClick={handleCardClick}
            onNavigate={handleNavigate}
            onQuickAdd={handleQuickAdd}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        );
      case "shop":
        return (
          <Brands
            onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
          />
        );
      case "male":
        return (
          <MaleSection
            onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
          />
        );
      case "female":
        return (
          <FemaleSection
            onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
          />
        );
      case "essentials":
        return (
          <Essentials 
            onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
          />
        );
      default:
        return (
          <Home
            featuredProducts={featuredProducts}
            onCardClick={handleCardClick}
            onNavigate={handleNavigate}
            onQuickAdd={handleQuickAdd}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        );
    }
  };

  return (
    <>
      <Header
        searchQuery={searchQuery} 
        onSearch={handleSearch} // ✅ Pass correct handler
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Navbar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        setCurrentSection={setCurrentSection}
        scrollToSection={scrollToSection}
        onNavigate={handleNavigate}
      />

      <main>
        {renderSection()}
      </main>

      <NewsLetter />
      <Footer />

      {/* Cart Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Fragrance Quiz */}
      <FragranceQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        featuredProducts={featuredProducts}
        onCardClick={handleCardClick}
        onQuickAdd={handleQuickAdd}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

export default App;