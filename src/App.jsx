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


  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Opening individual project modal
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

    // 1. Basic validation
    if (!product || !product.id) {
        console.error('Invalid product:', product);
        return;
    }

    // 2. Optional: Ensure price exists and is a valid number
    if (!product.price) {
        console.warn('Product has no price, defaulting to 0:', product);
    }

    // 3. Handle size or variant if available
    const size = product.sizes && product.sizes.length > 0 ? product.sizes[0] : null;

    // 4. Call the actual cart handler
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
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
        )
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
        )
      case "female":
        return (
          <FemaleSection
          onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
          />
        )
      case "essentials":
        return (
          <Essentials 
          onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
          />
        )

      default:
        return <Home />;
    }
  }
  return (
    <>
      <Header
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Navbar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(!isMenuOpen)}
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
  )
}

export default App;
