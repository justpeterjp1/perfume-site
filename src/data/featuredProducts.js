const products = [
  {
    id: 1,
    name: "Dior Sauvage",
    brand: "Dior",
    price: "₦85,000",
    image: "src/assets/Images/perfume-a.jpg",
    description: "A bold, masculine fragrance with fresh and spicy notes.",
    notes: ["Bergamot", "Pepper", "Ambroxan"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },
  {
    id: 2,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: "₦110,000",
    image: "src/assets/Images/perfume-b.jpg",
    description: "A sophisticated woody-aromatic scent for men.",
    notes: ["Citrus", "Sandalwood", "Cedar"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },
  {
    id: 3,
    name: "Versace Eros",
    brand: "Versace",
    price: "₦75,000",
    image: "src/assets/Images/perfume-h.jpg",
    description: "Fresh, sweet, and woody fragrance inspired by love and passion.",
    notes: ["Mint", "Tonka Bean", "Vanilla"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },
  {
    id: 4,
    name: "YSL Libre",
    brand: "Yves Saint Laurent",
    price: "₦95,000",
    image: "src/assets/Images/perfume-d.jpg",
    description: "A warm floral fragrance for women with bold character.",
    notes: ["Lavender", "Orange Blossom", "Musk"],
    sizes: ["50ml", "90ml"],
    category: "female"
  },
  {
    id: 5,
    name: "Carolina Herrera Good Girl",
    brand: "Carolina Herrera",
    price: "₦98,000",
   image: "src/assets/Images/perfume-e.jpg",
    description: "A sensual and modern feminine scent.",
    notes: ["Cocoa", "Tuberose", "Tonka Bean"],
    sizes: ["50ml",  "80ml"],
    category: "female"
  },
  {
    id: 6,
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    price: "₦420,000",
    image: "src/assets/Images/perfume-f.jpg",
    description: "A luxurious woody-amber scent with a radiant signature.",
    notes: ["Ambergris", "Cedar", "Saffron"],
    sizes: ["70ml"],
    category: "unisex"
  },
  {
    id: 7,
    name: "Tom Ford Oud Wood",
    brand: "Tom Ford",
    price: "₦250,000",
    image: "src/assets/Images/perfume-i.jpg",
    description: "Rare oud blended with spices and woods for a rich aroma.",
    notes: ["Oud", "Cardamom", "Sandalwood"],
    sizes: ["50ml", "100ml"],
    category: "unisex"
  },
  {
    id: 8,
    name: "Armani Si",
    brand: "Giorgio Armani",
    price: "₦89,000",
    image: "/images/si.jpg",
    description: "A sweet modern chypre fragrance for women.",
    notes: ["Vanilla", "Blackcurrant", "Rose"],
    sizes: ["50ml", "100ml"],
    category: "female"
  },
  {
    id: 9,
    name: "Creed Aventus",
    brand: "Creed",
    price: "₦350,000",
    image: "/images/aventus.jpg",
    description: "A powerful masculine fragrance symbolizing success.",
    notes: ["Pineapple", "Birch", "Musk"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },
  {
    id: 10,
    name: "Lattafa Asad",
    brand: "Lattafa",
    price: "₦25,000",
    image: "/images/asad.jpg",
    description: "A warm-spicy Middle Eastern fragrance with strong projection.",
    notes: ["Black Pepper", "Vanilla", "Patchouli"],
    sizes: ["100ml"],
    category: "male"
  },
  {
    id: 11,
    name: "Lattafa Yara",
    brand: "Lattafa",
    price: "₦19,000",
    image: "/images/yara.jpg",
    description: "A sweet creamy fragrance for women with tropical notes.",
    notes: ["Coconut", "Vanilla", "Rose"],
    sizes: ["100ml"],
    category: "female"
  },
  {
    id: 12,
    name: "Body Spray – Dubai Oud",
    brand: "Arabian Oud",
    price: "₦6,500",
    image: "/images/body-spray-oud.jpg",
    description: "A long-lasting oud body spray for daily wear.",
    notes: ["Oud", "Spices", "Woody"],
    sizes: ["250ml"],
    category: "sprays"
  },
  {
    id: 13,
    name: "Reed Diffuser – Amber Wood",
    brand: "ScentHouse",
    price: "₦12,000",
    image: "/images/diffuser-amber.jpg",
    description: "Home diffuser with warm, woody notes.",
    notes: ["Amber", "Cedarwood", "Musk"],
    sizes: ["100ml"],
    category: "diffusers"
  },
  {
    id: 14,
    name: "Perfume Oil – Musk Tahara",
    brand: "Swiss Arabian",
    price: "₦8,000",
    image: "/images/musk-tahara.jpg",
    description: "A clean, soft musk perfume oil.",
    notes: ["White Musk"],
    sizes: ["6ml", "12ml"],
    category: "perfume-oils"
  },
  {
    id: 15,
    name: "Soap – Oud & Amber",
    brand: "Riwayat",
    price: "₦3,500",
    image: "/images/oud-soap.jpg",
    description: "Luxury bathing soap with oud and amber blend.",
    notes: ["Oud", "Amber", "Vanilla"],
    sizes: ["150g"],
    category: "soaps"
  },
  {
    id: 16,
    name: "Scented Candle – Vanilla Musk",
    brand: "Aroma Luxe",
    price: "₦15,000",
    image: "/images/vanilla-candle.jpg",
    description: "Warm vanilla and musk candle for cozy ambience.",
    notes: ["Vanilla", "Musk", "Coconut"],
    sizes: ["200g"],
    category: "candles"
  },
  {
    id: 17,
    name: "Gift Set – Floral Collection",
    brand: "BloomScents",
    price: "₦45,000",
    image: "/images/floral-giftset.jpg",
    description: "A curated feminine fragrance gift set.",
    notes: ["Rose", "Jasmine", "Vanilla"],
    sizes: ["30ml x 3"],
    category: "gift-sets"
  },
  {
    id: 18,
    name: "Gift Set – Oud Royale",
    brand: "Arabian Legend",
    price: "₦60,000",
    image: "/images/oud-giftset.jpg",
    description: "A premium oud-themed gift set for men.",
    notes: ["Oud", "Leather", "Cedar"],
    sizes: ["50ml + Oil + Soap"],
    category: "gift-sets"
  },
  {
    id: 19,
    name: "Unisex Musk Perfume",
    brand: "Zara",
    price: "₦18,500",
    image: "/images/zara-musk.jpg",
    description: "A soft musk fragrance suitable for all genders.",
    notes: ["White Musk", "Lily", "Amber"],
    sizes: ["50ml"],
    category: "unisex"
  },
  {
    id: 20,
    name: "Davidoff Cool Water",
    brand: "Davidoff",
    price: "₦30,000",
    image: "/images/cool-water.jpg",
    description: "Fresh aquatic fragrance inspired by the ocean.",
    notes: ["Mint", "Sea Water", "Lavender"],
    sizes: ["50ml", "100ml"],
    category: "male"
  }
];

export default products;
