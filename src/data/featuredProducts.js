const products = [
  // --------------------------
  // ORIGINAL 30 PRODUCTS
  // --------------------------
  {
    id: 1,
    name: "Dior Sauvage",
    brand: "Dior",
    price: "₦85,000",
    oldPrice: "₦95,000",
    image: "src/assets/Images/perfume-a.jpg",
    description: "A bold, masculine fragrance with fresh and spicy notes.",
    notes: ["Citrus", "Spicy", "Amber"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },
  {
    id: 2,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: "₦110,000",
    oldPrice: "₦130,000",
    image: "src/assets/Images/bleudechanel1.jpg",
    description: "A sophisticated woody-aromatic scent for men.",
    notes: ["Citrus", "Woody", "Cedar"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },
  {
    id: 3,
    name: "Versace Eros",
    brand: "Versace",
    price: "₦75,000",
    image: "src/assets/Images/versace1.jpg",
    description: "Fresh, sweet, and woody fragrance inspired by love and passion.",
    notes: ["Fruity", "Vanilla", "Mint"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },
  {
    id: 4,
    name: "Khamrah Lattafa",
    brand: "Lattafa",
    price: "₦95,000",
    image: "src/assets/Images/perfume-d.jpg",
    description: "A warm floral fragrance for women with bold character.",
    notes: ["Floral", "Fruity", "Musk"],
    sizes: ["50ml", "90ml"],
    category: "female"
  },
  {
    id: 5,
    name: "9 PM Female",
    brand: "9 PM",
    price: "₦98,000",
    oldPrice: "₦115,000",
    image: "src/assets/Images/9pm-1.jpg",
    description: "A sensual and modern feminine scent.",
    notes: ["Chypre", "Fruity", "Tonka Bean"],
    sizes: ["50ml", "80ml"],
    category: "female"
  },
  {
    id: 6,
    name: "Creed Aventus",
    brand: "Creed",
    price: "₦420,000",
    image: "src/assets/Images/perfume-f.jpg",
    description: "A luxurious woody-amber scent with a radiant signature.",
    notes: ["Ambergris", "Gourmand", "Saffron"],
    sizes: ["70ml"],
    category: "unisex"
  },
  {
    id: 7,
    name: "Tom Ford Black Lacquer",
    brand: "Tom Ford",
    price: "₦250,000",
    oldPrice: "₦270,000",
    image: "src/assets/Images/tom-ford6.jpg",
    description: "Rare oud blended with spices and woods for a rich aroma.",
    notes: ["Oud", "Spicy", "Woody"],
    sizes: ["50ml", "100ml"],
    category: "unisex"
  },
  {
    id: 8,
    name: "Armani Si",
    brand: "Giorgio Armani",
    price: "₦89,000",
    oldPrice: "₦100,000",
    image: "src/assets/Images/armani1.jpg",
    description: "A sweet modern chypre fragrance for women.",
    notes: ["Vanilla", "Fruity", "Rose"],
    sizes: ["50ml", "100ml"],
    category: "female"
  },
  {
    id: 9,
    name: "Creed Aventus Cologne",
    brand: "Creed",
    price: "₦350,000",
    image: "src/assets/Images/creed2.jpg",
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
    image: "src/assets/Images/lattafa1.jpg",
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
    image: "src/assets/Images/lattafa2.jpg",
    description: "A sweet creamy fragrance for women with tropical notes.",
    notes: ["Coconut", "Vanilla", "Rose"],
    sizes: ["100ml"],
    category: "female"
  },
  {
    id: 12,
    name: "Dubai Oud Body Spray",
    brand: "Oud",
    price: "₦6,500",
    image: "src/assets/Images/gucci1.jpg",
    description: "A long-lasting oud body spray for daily wear.",
    notes: ["Oud", "Spicy", "Woody"],
    sizes: ["250ml"],
    category: "male"
  },
  {
    id: 13,
    name: "Amber Wood Diffuser",
    brand: "ScentHouse",
    price: "₦12,000",
    image: "src/assets/Images/diffusers.jpg",
    description: "Home diffuser with warm, woody notes.",
    notes: ["Amber", "Cedarwood", "Musk"],
    sizes: ["100ml"],
    category: "unisex"
  },
  {
    id: 14,
    name: "Calvin Klein One",
    brand: "Calvin Klein",
    price: "₦8,000",
    image: "src/assets/Images/calvin-klein1.jpg",
    description: "A clean, soft musk perfume oil.",
    notes: ["White Musk", "Aquatic"],
    sizes: ["6ml", "12ml"],
    category: "male"
  },
  {
    id: 15,
    name: "Oud & Amber Soap",
    brand: "Riwayat",
    price: "₦3,500",
    image: "src/assets/Images/lattafa1.jpg",
    description: "Luxury bathing soap with oud and amber blend.",
    notes: ["Oud", "Amber", "Vanilla"],
    sizes: ["150g"],
    category: "unisex"
  },
  {
    id: 16,
    name: "Vanilla Musk Candle",
    brand: "Aroma Luxe",
    price: "₦15,000",
    image: "src/assets/Images/diffuser-b.jpg",
    description: "Warm vanilla and musk candle for cozy ambience.",
    notes: ["Vanilla", "Musk", "Coconut"],
    sizes: ["200g"],
    category: "unisex"
  },
  {
    id: 17,
    name: "Floral Collection Gift Set",
    brand: "BloomScents",
    price: "₦45,000",
    image: "src/assets/Images/set1.jpg",
    description: "A curated feminine fragrance gift set.",
    notes: ["Rose", "Floral", "Vanilla"],
    sizes: ["30ml x 3"],
    category: "female"
  },
  {
    id: 18,
    name: "Oud Royale Gift Set",
    brand: "Arabian Legend",
    price: "₦60,000",
    image: "src/assets/Images/lattafa1.jpg",
    description: "A premium oud-themed gift set for men.",
    notes: ["Oud", "Leather", "Cedar"],
    sizes: ["50ml + Oil + Soap"],
    category: "male"
  },
  {
    id: 19,
    name: "Burberry Touch",
    brand: "Burberry",
    price: "₦18,500",
    image: "src/assets/Images/burberry1.jpg",
    description: "A soft musk fragrance suitable for all genders.",
    notes: ["White Musk", "Lily", "Amber"],
    sizes: ["50ml"],
    category: "unisex"
  },
  {
    id: 20,
    name: "1 Million",
    brand: "Paco rabanne",
    price: "₦1,000,000",
    image: "src/assets/Images/paco-rabbane3.jpg",
    description: "Fresh aquatic fragrance inspired by the ocean.",
    notes: ["Mint", "Sea Water", "Lavender"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },

  // (… your items 21 to 30 preserved as-is …)

  // -------------------------------------------
  // NEWLY GENERATED PRODUCTS (31 → 75)
  // -------------------------------------------

  {
    id: 31,
    name: "Dior Homme Intense",
    brand: "Dior",
    price: "₦135,000",
    oldPrice: "₦160,000",
    image: "/src/assets/Images/dior1.jpg",
    description: "Elegant woody iris with long-lasting masculine depth.",
    notes: ["Woody", "Amber", "Powdery"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 32,
    name: "Dior Addict Eau Fraiche",
    brand: "Dior",
    price: "₦98,000",
    image: "src/assets/Images/dior2.jpg",
    description: "A bright fruity floral scent perfect for daytime elegance.",
    notes: ["Fruity", "Floral", "Musk"],
    sizes: ["50ml", "100ml"],
    category: "female"
  },

  {
    id: 33,
    name: "Dior Oud Ispahan",
    brand: "Dior",
    price: "₦250,000",
    image: "/src/assets/Images/oud2.jpg",
    description: "Dark rose and smoky oud blended into luxury unisex scent.",
    notes: ["Oud", "Floral", "Amber"],
    sizes: ["75ml"],
    category: "unisex"
  },

  {
    id: 34,
    name: "Chanel Coco Mademoiselle",
    brand: "Chanel",
    price: "₦120,000",
    oldPrice: "₦150,000",
    image: "src/assets/Images/chanel3.jpg",
    description: "A modern feminine chypre fragrance with sweet undertones.",
    notes: ["Chypre", "Vanilla", "Floral"],
    sizes: ["50ml", "100ml"],
    category: "female"
  },

  {
    id: 35,
    name: "Chanel Gabrielle",
    brand: "Chanel",
    price: "₦140,000",
    image: "src/assets/Images/chanel2.jpg",
    description: "A radiant bouquet of white florals for sophisticated women.",
    notes: ["Floral", "Powdery", "Vanilla"],
    sizes: ["100ml"],
    category: "female"
  },

  {
    id: 36,
    name: "Chanel Allure Homme Sport",
    brand: "Chanel",
    price: "₦110,000",
    image: "src/assets/Images/chanel3.jpg",
    description: "A fresh aquatic fragrance with woody masculine depth.",
    notes: ["Aquatic", "Citrus", "Woody"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 37,
    name: "YSL Libre",
    brand: "YSL",
    price: "₦105,000",
    oldPrice: "₦130,000",
    image: "src/assets/Images/ysl1.jpg",
    description: "Vanilla and lavender blend for bold, warm feminine scent.",
    notes: ["Vanilla", "Floral", "Amber"],
    sizes: ["50ml", "100ml"],
    category: "female"
  },

  {
    id: 38,
    name: "YSL Black Opium",
    brand: "YSL",
    price: "₦110,000",
    image: "/src/assets/Images/ysl2.jpg",
    description: "Gourmand coffee and vanilla powerhouse for women.",
    notes: ["Gourmand", "Vanilla", "Musk"],
    sizes: ["50ml", "90ml"],
    category: "female"
  },

  {
    id: 39,
    name: "YSL La Nuit De L’homme",
    brand: "YSL",
    price: "₦125,000",
    image: "/src/assets/Images/ysl3.jpg",
    description: "Warm spicy masculine scent ideal for nighttime use.",
    notes: ["Spicy", "Amber", "Woody"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 40,
    name: "Armani Acqua Di Gio Profumo",
    brand: "Armani",
    price: "₦135,000",
    oldPrice: "₦155,000",
    image: "src/assets/Images/armani2.jpg",
    description: "A deep aquatic scent with incense and woods.",
    notes: ["Aquatic", "Woody", "Musk"],
    sizes: ["75ml", "125ml"],
    category: "male"
  },

  {
    id: 41,
    name: "Armani My Way",
    brand: "Armani",
    price: "₦100,000",
    image: "/src/assets/Images/armani4.jpg",
    description: "A sweet floral feminine scent with gentle projection.",
    notes: ["Floral", "Fruity", "Vanilla"],
    sizes: ["50ml", "90ml"],
    category: "female"
  },

  {
    id: 42,
    name: "Versace Dylan Blue",
    brand: "Versace",
    price: "₦95,000",
    image: "/src/assets/Images/versace2.jpg",
    description: "A bold masculine scent with fresh citrus and deep musk.",
    notes: ["Citrus", "Musk", "Woody"],
    sizes: ["50ml", "100ml"],
    category: "male"
  },

  {
    id: 43,
    name: "Versace Bright Crystal",
    brand: "Versace",
    price: "₦78,000",
    image: "/src/assets/Images/versace3.jpg",
    description: "A fruity floral feminine fragrance for youthful energy.",
    notes: ["Fruity", "Floral", "Musk"],
    sizes: ["50ml", "90ml"],
    category: "female"
  },

  {
    id: 44,
    name: "Versace Oud Noir",
    brand: "Versace",
    price: "₦150,000",
    oldPrice: "₦180,000",
    image: "/src/assets/Images/versace4.jpg",
    description: "Dark spicy masculine oud fragrance.",
    notes: ["Oud", "Spicy", "Leather"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 45,
    name: "Gucci Bloom",
    brand: "Gucci",
    price: "₦90,000",
    oldPrice: "₦115,000",
    image: "/src/assets/Images/gucci2.jpg",
    description: "A bouquet of white florals for women.",
    notes: ["Floral", "Powdery", "Musk"],
    sizes: ["50ml", "100ml"],
    category: "female"
  },

  {
    id: 46,
    name: "Gucci Flora Gorgeous Gardenia",
    brand: "Gucci",
    price: "₦85,000",
    image: "/src/assets/Images/gucci4.jpg",
    description: "A fruity floral feminine fragrance with charm.",
    notes: ["Floral", "Fruity", "Vanilla"],
    sizes: ["50ml"],
    category: "female"
  },

  {
    id: 47,
    name: "Tom Ford Lost Cherry",
    brand: "Tom Ford",
    price: "₦300,000",
    image: "/src/assets/Images/tom-ford5.jpg",
    description: "A rich cherry-vanilla gourmand unisex fragrance.",
    notes: ["Gourmand", "Fruity", "Vanilla"],
    sizes: ["50ml"],
    category: "unisex"
  },

  {
    id: 48,
    name: "Tom Ford Rose Prick",
    brand: "Tom Ford",
    price: "₦320,000",
    image: "/src/assets/Images/tom-ford6.jpg",
    description: "A spicy rose-forward unisex luxury scent.",
    notes: ["Floral", "Spicy", "Amber"],
    sizes: ["50ml"],
    category: "unisex"
  },

  {
    id: 49,
    name: "Tom Ford Soleil Blanc",
    brand: "Tom Ford",
    price: "₦280,000",
    oldPrice: "₦310,000",
    image: "/src/assets/Images/tom-ford7.jpg",
    description: "Creamy coconut and amber perfect for warm weather.",
    notes: ["Vanilla", "Amber", "Coconut"],
    sizes: ["100ml"],
    category: "unisex"
  },

  {
    id: 50,
    name: "Paco Rabanne Invictus",
    brand: "Paco rabanne",
    price: "₦105,000",
    image: "src/assets/Images/paco-rabbane4.jpg",
    description: "A fresh sporty masculine scent with marine tones.",
    notes: ["Aquatic", "Citrus", "Musk"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 51,
    name: "Paco Rabanne Olympéa",
    brand: "Paco rabanne",
    price: "₦98,000",
    image: "src/assets/Images/paco-rabanne2.jpg",
    description: "A salty vanilla feminine fragrance.",
    notes: ["Vanilla", "Amber", "Floral"],
    sizes: ["80ml"],
    category: "female"
  },

  {
    id: 52,
    name: "Lattafa Qaed Al Fursan",
    brand: "Lattafa",
    price: "₦32,000",
    image: "/src/assets/Images/lattafa4.jpg",
    description: "A rich woody-amber scent with strong projection.",
    notes: ["Woody", "Amber", "Musk"],
    sizes: ["90ml"],
    category: "male"
  },

  {
    id: 53,
    name: "Lattafa Malik Al Tayoor",
    brand: "Lattafa",
    price: "₦27,000",
    oldPrice: "₦35,000",
    image: "/src/assets/Images/lattafa5.jpg",
    description: "A warm spicy oud fragrance.",
    notes: ["Oud", "Spicy", "Woody"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 54,
    name: "Lattafa Yara Tous",
    brand: "Lattafa",
    price: "₦20,000",
    image: "/src/assets/Images/lattafa6.jpg",
    description: "Sweet vanilla and fruity feminine fragrance.",
    notes: ["Vanilla", "Fruity", "Floral"],
    sizes: ["100ml"],
    category: "female"
  },

  {
    id: 55,
    name: "Calvin klein Black",
    brand: "Calvin Klein",
    price: "₦30,000",
    image: "/src/assets/Images/calvin-klein3.jpg",
    description: "A warm spicy masculine scent with amber undertones.",
    notes: ["Spicy", "Amber", "Woody"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 56,
    name: "Asad Al Sultan",
    brand: "Asad",
    price: "₦29,000",
    oldPrice: "₦40,000",
    image: "/src/assets/Images/asad2.jpg",
    description: "Creamy vanilla and musk blend with a Middle Eastern twist.",
    notes: ["Vanilla", "Musk", "Amber"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 57,
    name: "Zara Red Vanilla",
    brand: "Zara",
    price: "₦22,000",
    image: "src/assets/Images/zara1.jpg",
    description: "A sweet fruity vanilla feminine fragrance.",
    notes: ["Vanilla", "Fruity", "Floral"],
    sizes: ["100ml"],
    category: "female"
  },

  {
    id: 58,
    name: "Zara Night Pour Homme",
    brand: "Zara",
    price: "₦24,000",
    image: "src/assets/Images/zara2.jpg",
    description: "A woody masculine scent with fresh spices.",
    notes: ["Spicy", "Woody", "Amber"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 59,
    name: "Zara Cherry Smoothie",
    brand: "Zara",
    price: "₦21,000",
    oldPrice: "₦28,000",
    image: "src/assets/Images/zara3.jpg",
    description: "Fruit-forward gourmand fragrance.",
    notes: ["Fruity", "Gourmand", "Vanilla"],
    sizes: ["100ml"],
    category: "female"
  },

  {
    id: 60,
    name: "Oud Satin Mood",
    brand: "Oud",
    price: "₦420,000",
    image: "src/assets/Images/oud1.jpg",
    description: "Elegant rose and vanilla blended with refined oud.",
    notes: ["Oud", "Vanilla", "Floral"],
    sizes: ["70ml"],
    category: "unisex"
  },

  {
    id: 61,
    name: "Creed Silver",
    brand: "Creed",
    price: "₦450,000",
    oldPrice: "₦480,000",
    image: "src/assets/Images/creed3.jpg",
    description: "A dark spicy oud powerhouse.",
    notes: ["Oud", "Spicy", "Leather"],
    sizes: ["90ml"],
    category: "unisex"
  },

  {
    id: 62,
    name: "Tusk Seduction",
    brand: "Tusk",
    price: "₦28,000",
    image: "/src/assets/Images/tusk1.jpg",
    description: "Sweet resinous oud that projects strongly.",
    notes: ["Oud", "Amber", "Vanilla"],
    sizes: ["100ml"],
    category: "unisex"
  },

  {
    id: 63,
    name: "Mont Blanc Starwalker",
    brand: "Mont Blanc",
    price: "₦25,000",
    image: "/src/assets/Images/mont-blanc3.jpg",
    description: "Warm tobacco and woody aroma for men.",
    notes: ["Woody", "Spicy", "Amber"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 64,
    name: "Gucci Oud",
    brand: "Gucci",
    price: "₦180,000",
    image: "src/assets/Images/gucci4.jpg",
    description: "Smoky oud blended with floral sweetness.",
    notes: ["Oud", "Floral", "Amber"],
    sizes: ["75ml"],
    category: "unisex"
  },

  {
    id: 65,
    name: "Gucci Mémoire",
    brand: "Gucci",
    price: "₦85,000",
    oldPrice: "₦100,000",
    image: "src/assets/Images/gucci3.jpg",
    description: "A musky herbal unisex perfume.",
    notes: ["Musk", "Woody", "Amber"],
    sizes: ["100ml"],
    category: "unisex"
  },

  {
    id: 66,
    name: "Armani Code",
    brand: "Armani",
    price: "₦120,000",
    image: "/src/assets/Images/armani2.jpg",
    description: "A spicy masculine scent with rich tonka and woods.",
    notes: ["Spicy", "Amber", "Woody"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 67,
    name: "Armani In Love With You",
    brand: "Armani",
    price: "₦105,000",
    image: "/src/assets/Images/armani3.jpg",
    description: "A fruity floral scent with modern sweetness.",
    notes: ["Fruity", "Floral", "Vanilla"],
    sizes: ["100ml"],
    category: "female"
  },

  {
    id: 68,
    name: "Paco Rabanne Invictus",
    brand: "Paco Rabanne",
    price: "₦95,000",
    image: "src/assets/Images/paco-rabbane4.jpg",
    description: "A futuristic masculine lavender and citrus scent.",
    notes: ["Citrus", "Lavender", "Amber"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 69,
    name: "Versace Pour Femme Dylan Blue",
    brand: "Versace",
    price: "₦85,000",
    oldPrice: "₦110,000",
    image: "/src/assets/Images/versace3.jpg",
    description: "A fruity floral feminine fragrance.",
    notes: ["Fruity", "Floral", "Musk"],
    sizes: ["100ml"],
    category: "female"
  },

  {
    id: 70,
    name: "Mont Blanc Explorer",
    brand: "Mont blanc",
    price: "₦130,000",
    image: "/src/assets/Images/mont-blanc1.jpg",
    description: "A citrus-ambrox masculine scent with long lasting strength.",
    notes: ["Citrus", "Amber", "Woody"],
    sizes: ["100ml"],
    category: "male"
  },

  {
    id: 71,
    name: "Tom Ford Vanilla Fatale",
    brand: "Tom Ford",
    price: "₦350,000",
    image: "/src/assets/Images/tom-ford4.jpg",
    description: "A rich vanilla amber unisex perfume with creamy depth.",
    notes: ["Vanilla", "Amber", "Musk"],
    sizes: ["100ml"],
    category: "unisex"
  },

  {
    id: 72,
    name: "Dior J'adore",
    brand: "Dior",
    price: "₦110,000",
    image: "/src/assets/Images/dior5.jpg",
    description: "A bright floral feminine classic.",
    notes: ["Floral", "Vanilla", "Powdery"],
    sizes: ["50ml", "100ml"],
    category: "female"
  },

  {
    id: 73,
    name: "Paco Rabanne Pour Homme",
    brand: "Paco rabanne",
    price: "₦230,000",
    oldPrice: "₦300,000",
    image: "/src/assets/Images/paco-rabanne1.jpg",
    description: "A woody unisex fragrance with subtle sweetness.",
    notes: ["Woody", "Amber", "Musk"],
    sizes: ["100ml"],
    category: "unisex"
  },

  {
    id: 74,
    name: "Lattafa Fakhar Rose",
    brand: "Lattafa",
    price: "₦26,000",
    image: "/src/assets/Images/lattafa3.jpg",
    description: "A floral feminine scent with creamy undertones.",
    notes: ["Floral", "Vanilla", "Musk"],
    sizes: ["100ml"],
    category: "female"
  },

  {
    id: 75,
    name: " Oud Attar",
    brand: "oud",
    price: "₦32,000",
    image: "/src/assets/Images/oud2.jpg",
    description: "A warm spicy masculine fragrance with luxurious finish.",
    notes: ["Spicy", "Woody", "Amber"],
    sizes: ["100ml"],
    category: "male"
  }
];

export default products;
