import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

import featuredProducts from './data/featuredProducts'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home')
  const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedProduct, setSelectedProduct] = useState(null);
  

  
   const handleQuickAdd = (productId) => {
     const product = featuredProducts.find(p => p.id === productId);
     if (!product) return;
     
    //  handleAddToCart(productId, product.sizes[0]);
    };
    const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <Home
           featuredProducts={featuredProducts}
            onCardClick={handleCardClick}
            onQuickAdd={handleQuickAdd}
          />
        )
    }
  }
  return (
    <>
        <Header
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
         isMenuOpen={isMenuOpen}/>
        <Navbar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(!isMenuOpen)}
         />
      <main>
        {renderSection()}
      </main>
        <NewsLetter />
        <Footer />
    </>
  )
}

export default App
