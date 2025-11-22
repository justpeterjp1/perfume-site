// essentialsData.js

// ---------------------------------------------
// 1. Category Definitions (for Navbar & Grouping)
// ---------------------------------------------
export const ESSENTIAL_CATEGORIES = [
    { id: "oils", name: "Perfume Oils", icon: "💧" },
    { id: "diffusers", name: "Diffusers", icon: "🕯️" },
    { id: "sprays", name: "Body Sprays", icon: "✨" },
    { id: "soaps", name: "Luxury Soaps", icon: "🧼" },
    { id: "candles", name: "Scented Candles", icon: "🕯️" },
    { id: "gifts", name: "Gift Sets", icon: "🎁" },
];

// ---------------------------------------------
// 2. Helper – random price generator (numeric)
// ---------------------------------------------
const randomPrice = () =>
    Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000; // numeric value

// ---------------------------------------------
// 3. PERFUME OILS (10)
// ---------------------------------------------
const OILS = [
    "Arabian Musk",
    "Rose Oud Elixir",
    "Amber Nightfall",
    "White Musk Serenity",
    "Royal Oud Fusion",
    "Golden Sand Attar",
    "Vanilla Amber Bloom",
    "Mystic Oud Essence",
    "Fresh Linen Musk",
    "Sandalwood Pure Oil",
].map((name, i) => ({
    id: `oils-${i + 1}`,
    name,
    brand: "ESSENCE",
    category: "oils",
    price: `₦${randomPrice().toLocaleString()}`,
    image: `/src/assets/Images/essentials/oils/${i + 1}.jpg`,
    description: `${name} is a premium concentrated perfume oil with long-lasting projection.`,
    volume: i % 2 === 0 ? "10ml" : "15ml",
}));

// ---------------------------------------------
// 4. DIFFUSERS (8)
// ---------------------------------------------
const DIFFUSERS = [
    "Lavender Breeze",
    "Citrus Wood Fusion",
    "Midnight Amber Reed",
    "Vanilla & Cashmere",
    "Forest Pine Aroma",
    "Coconut Island",
    "Fresh Linen Diffuser",
    "Oud Home Luxury",
].map((name, i) => ({
    id: `diffuser-${i + 1}`,
    name,
    brand: "ESSENCE",
    category: "diffusers",
    price: `₦${randomPrice().toLocaleString()}`,
    image: `/src/assets/Images/essentials/diffusers/${i + 1}.jpg`,
    description: `A long-lasting home diffuser infused with ${name} fragrance.`,
    duration: i % 3 === 0 ? "90 Days" : "60 Days",
}));

// ---------------------------------------------
// 5. BODY SPRAYS (8)
// ---------------------------------------------
const SPRAYS = [
    "Riggs",
    "Ocean Fresh Splash",
    "Cocoa Vanilla Spray",
    "Cedar Rush",
    "Storm",
    "Wild Blossom",
    "Cotton Cloud",
    "Warm Sugar Glow",
].map((name, i) => ({
    id: `spray-${i + 1}`,
    name,
    brand: "ESSENCE",
    category: "sprays",
    price: `₦${randomPrice().toLocaleString()}`,
    image: `/src/assets/Images/essentials/sprays/${i + 1}.jpg`,
    description: `A refreshing body spray perfect for daily wear. Scent: ${name}.`,
    formula: i % 2 === 0 ? "Non-alcoholic" : "Quick-dry",
}));

// ---------------------------------------------
// 6. LUXURY SOAPS (10)
// ---------------------------------------------
const SOAPS = [
    "Shea Butter Luxury Bar",
    "Oatmeal & Honey Cleanser",
    "Charcoal Detox Soap",
    "Coconut Milk Bar",
    "Vanilla Bean Soap",
    "Rose Petal Cleanser",
    "Dudu Osun",
    "Dove Liquid Soap",
    "Aloe Pure Hydrating Soap",
    "Extract Soap",
].map((name, i) => ({
    id: `soap-${i + 1}`,
    name,
    brand: "ESSENCE",
    category: "soaps",
    price: `₦${randomPrice().toLocaleString()}`,
    image: `/src/assets/Images/essentials/soaps/${i + 1}.jpg`,
    description: `A handcrafted luxury soap enriched with natural oils. Scent: ${name}.`,
    weight: i % 4 === 0 ? "200g" : "100g",
}));

// ---------------------------------------------
// 7. CANDLES (8)
// ---------------------------------------------
const CANDLES = [
    "Vanilla Sugar Candle",
    "Midnight Oud Candle",
    "Citrus Bloom Candle",
    "Amber Noir Candle",
    "Rose Garden Candle",
    "Sandalwood Glow",
    "Ocean Breeze Candle",
    "Golden Musk Candle",
].map((name, i) => ({
    id: `candle-${i + 1}`,
    name,
    brand: "ESSENCE",
    category: "candles",
    price: `₦${randomPrice().toLocaleString()}`,
    image: `/src/assets/Images/essentials/candles/${i + 1}.jpg`,
    description: `A premium handcrafted scented candle with notes of ${name}.`,
    burnTime: i % 3 === 0 ? "50 hours" : "30 hours",
}));

// ---------------------------------------------
// 8. GIFT SETS (8)
// ---------------------------------------------
const GIFTS = [
    "Luxury Oud Gift Set",
    "Mystical Gift Set",
    "Women's Perfume Box",
    "Gentleman's Desire Set",
    "Amber & Vanilla Duo",
    "Royal Arabian Set",
    "Home Perfume Experience",
    "Floral Scent Box",
].map((name, i) => ({
    id: `gift-${i + 1}`,
    name,
    brand: "ESSENCE",
    category: "gifts",
    price: `₦${randomPrice().toLocaleString()}`,
    image: `/src/assets/Images/essentials/gifts/${i + 1}.jpg`,
    description: `A beautifully packaged gift set featuring ${name}.`,
    itemsIncluded: i % 2 === 0 ? "4 pieces" : "3 pieces",
}));

// ---------------------------------------------
// 9. EXPORT ALL PRODUCTS
// ---------------------------------------------
export const ESSENTIAL_PRODUCTS = [
    ...OILS,
    ...DIFFUSERS,
    ...SPRAYS,
    ...SOAPS,
    ...CANDLES,
    ...GIFTS,
];

export default ESSENTIAL_PRODUCTS;
