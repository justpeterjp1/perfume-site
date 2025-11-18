import { useState } from 'react'
import viteLogo from '/perfume-logo.jpg'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <main>
        <Header
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
         isMenuOpen={isMenuOpen}/>
        <Navbar />
        <NewsLetter />
        <Footer />
      </main>
    </>
  )
}

export default App
