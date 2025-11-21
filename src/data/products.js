import brands from "./brands";

const generateProducts = () => {
  const products = [];

  brands.forEach((brand) => {
    for (let i = 1; i <= 4; i++) {
      products.push({
        id: `${brand.id}-p${i}`,
        brand: brand.name,
        brandId: brand.id,
        name: `${brand.name} Perfume ${i}`,
        price: Math.floor(Math.random() * 30000) + 15000, // ₦15k - ₦45k
        isNew: Math.random() > 0.5, // randomly mark new arrivals
        image: `/src/assets/products/brands/${brand.name}/product${i}.jpg`,
        size: "100ml",
      });
    }
  });

  return products;
};

const products = generateProducts();
export default products;
