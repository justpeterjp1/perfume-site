import React from 'react'
import HeroImage from '/Images/perfume-h.jpg'

const HeroSection = ({onShopNewArrivals}) => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
  <div className="absolute inset-0">

    <img
      src={HeroImage}
      alt="Luxury perfume collection"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/40 z-10"></div>

    
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-20"></div>
  </div>

  <div className="relative z-30 max-w-7xl mx-auto px-4 h-full flex items-center">
    <div className="max-w-xl text-white">
      <h1 className="mb-4 text-4xl md:text-5xl font-bold">
        The Essence of Luxury
      </h1>

      <p className="text-lg md:text-xl mb-8 opacity-90">
        Discover our curated collection of the world's finest fragrances
      </p>

      <button onClick={onShopNewArrivals} className="bg-accent hover:bg-copper text-white px-8 py-3 rounded-full transition-colors">
        Shop New Arrivals
      </button>
    </div>
  </div>
</section>

  )
}

export default HeroSection