import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import CartModal  from './components/CartModal';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { FragranceQuiz } from './components/FragranceQuiz';
import NewsLetter from './components/NewsLetter';
import { Toast } from './components/Toast';
import Footer from './components/Footer';

import featuredProducts from './data/featuredProducts'

function App() {
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
    const product = featuredProducts.find(p => p.id === productId);
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

   const handleQuickAdd = (productId) => {
     const product = featuredProducts.find(p => p.id === productId);
     if (!product) return;
     
     handleAddToCart(productId, product.sizes[0]);
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

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <Home
           featuredProducts={featuredProducts}
            onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
             onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )
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
