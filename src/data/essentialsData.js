// essentialdata.js

// --- Helper function to create specialized mock products ---
const createProduct = (id, category, name, specField, specValue) => ({
    id: `${category.id}-${id}`,
    name: name,
    category: category.name,
    price: `₦${(Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000).toLocaleString('en-US')}`, // Random price between ₦3,000 and ₦15,000
    image: `src/assets/Images/essentials/${category.id}-${id}.jpg`, // Mock image path
    description: `A highly-concentrated, essential ${category.name.toLowerCase()} item for superior ambiance and lasting fragrance.`,
    [specField]: specValue, // Specialized field
});


// --- Core Category Definitions ---
export const ESSENTIAL_CATEGORIES = [
    { id: 'oils', name: "Perfume Oils", icon: '💧', products: [] },
    { id: 'diffusers', name: "Diffusers", icon: '🕯️', products: [] },
    { id: 'sprays', name: "Body Sprays", icon: '✨', products: [] },
    { id: 'soaps', name: "Luxury Soaps", icon: '🧼', products: [] },
    { id: 'candles', name: "Scented Candles", icon: '🕯️', products: [] },
    { id: 'gifts', name: "Gift Sets", icon: '🎁', products: [] },
];


// --- Populate 10 Products for each Category ---

// Perfume Oils
for (let i = 1; i <= 10; i++) {
    ESSENTIAL_CATEGORIES[0].products.push(createProduct(
        i, ESSENTIAL_CATEGORIES[0], 
        `Concentrated Attar No. ${i}`, 
        'volume', 
        i % 2 === 0 ? '10ml' : '15ml'
    ));
}

// Diffusers
for (let i = 1; i <= 10; i++) {
    ESSENTIAL_CATEGORIES[1].products.push(createProduct(
        i, ESSENTIAL_CATEGORIES[1], 
        `Reed Diffuser Luxury ${i}`, 
        'duration', 
        i % 3 === 0 ? '90 Days' : '60 Days'
    ));
}

// Body Sprays
for (let i = 1; i <= 10; i++) {
    ESSENTIAL_CATEGORIES[2].products.push(createProduct(
        i, ESSENTIAL_CATEGORIES[2], 
        `Velvet Body Mist ${i}`, 
        'formula', 
        i % 2 === 0 ? 'Non-alcoholic' : 'Quick-dry'
    ));
}

// Luxury Soaps
for (let i = 1; i <= 10; i++) {
    ESSENTIAL_CATEGORIES[3].products.push(createProduct(
        i, ESSENTIAL_CATEGORIES[3], 
        `Triple Milled Soap ${i}`, 
        'weight', 
        i % 4 === 0 ? '200g' : '100g'
    ));
}

// Scented Candles
for (let i = 1; i <= 10; i++) {
    ESSENTIAL_CATEGORIES[4].products.push(createProduct(
        i, ESSENTIAL_CATEGORIES[4], 
        `Signature Soy Candle ${i}`, 
        'burnTime', 
        i % 3 === 0 ? '50 hours' : '30 hours'
    ));
}

// Gift Sets
for (let i = 1; i <= 10; i++) {
    ESSENTIAL_CATEGORIES[5].products.push(createProduct(
        i, ESSENTIAL_CATEGORIES[5], 
        `The Grand Collection ${i}`, 
        'itemsIncluded', 
        i % 2 === 0 ? '4 pieces' : '3 pieces'
    ));
}

export default ESSENTIAL_CATEGORIES;