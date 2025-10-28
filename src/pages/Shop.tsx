import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productCleanser from "@/assets/product-cleanser.jpg";
import productSerumVitaminE from "@/assets/product-serum-vitamin-e.jpg";
import productSerumRetinol from "@/assets/product-serum-retinol.jpg";
import productSerumNiacinamide from "@/assets/product-serum-niacinamide.jpg";
import productSerumHyaluronic from "@/assets/product-serum-hyaluronic.jpg";
import productSerumPeptide from "@/assets/product-serum-peptide.jpg";
import productSerumCollagen from "@/assets/product-serum-collagen.jpg";
import productSerumBrightening from "@/assets/product-serum-brightening.jpg";
import productSerumAntiaging from "@/assets/product-serum-antiaging.jpg";
import productCreamDay from "@/assets/product-cream-day.jpg";
import productCreamEye from "@/assets/product-cream-eye.jpg";
import productCreamAntiwrinkle from "@/assets/product-cream-antiwrinkle.jpg";
import productCreamFirming from "@/assets/product-cream-firming.jpg";
import productCreamMoisturizing from "@/assets/product-cream-moisturizing.jpg";
import productCreamNourishing from "@/assets/product-cream-nourishing.jpg";
import productCreamRecovery from "@/assets/product-cream-recovery.jpg";
import productCreamSoothing from "@/assets/product-cream-soothing.jpg";
import productCleanserMicellar from "@/assets/product-cleanser-micellar.jpg";
import productCleanserGel from "@/assets/product-cleanser-gel.jpg";
import productCleanserOil from "@/assets/product-cleanser-oil.jpg";
import productCleanserExfoliating from "@/assets/product-cleanser-exfoliating.jpg";
import productCleanserPurifying from "@/assets/product-cleanser-purifying.jpg";
import productCleanserCream from "@/assets/product-cleanser-cream.jpg";
import productCleanserBalm from "@/assets/product-cleanser-balm.jpg";
import productCleanserMousse from "@/assets/product-cleanser-mousse.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    // Serum Category - 5 items
    { id: 1, name: "Radiance Serum", price: 68.0, image: productSerum, category: "Serum" },
    { id: 2, name: "Vitamin C Serum", price: 72.0, image: productSerum, category: "Serum" },
    { id: 3, name: "Retinol Serum", price: 78.0, image: productSerumRetinol, category: "Serum" },
    { id: 4, name: "Hyaluronic Acid Serum", price: 70.0, image: productSerumHyaluronic, category: "Serum" },
    { id: 5, name: "Niacinamide Serum", price: 62.0, image: productSerumNiacinamide, category: "Serum" },
    
    // Moisturizer Category - 5 items
    { id: 6, name: "Hydrating Cream", price: 52.0, image: productCream, category: "Moisturizer" },
    { id: 7, name: "Night Cream", price: 58.0, image: productCream, category: "Moisturizer" },
    { id: 8, name: "Day Cream", price: 54.0, image: productCreamDay, category: "Moisturizer" },
    { id: 9, name: "Anti-Wrinkle Cream", price: 64.0, image: productCreamAntiwrinkle, category: "Moisturizer" },
    { id: 10, name: "Firming Cream", price: 62.0, image: productCreamFirming, category: "Moisturizer" },
    
    // Cleanser Category - 5 items
    { id: 11, name: "Gentle Cleanser", price: 38.0, image: productCleanser, category: "Cleanser" },
    { id: 12, name: "Foaming Cleanser", price: 42.0, image: productCleanser, category: "Cleanser" },
    { id: 13, name: "Micellar Water", price: 36.0, image: productCleanserMicellar, category: "Cleanser" },
    { id: 14, name: "Gel Cleanser", price: 40.0, image: productCleanserGel, category: "Cleanser" },
    { id: 15, name: "Oil Cleanser", price: 45.0, image: productCleanserOil, category: "Cleanser" },
    
    // Toner Category - 5 items
    { id: 16, name: "Hydrating Toner", price: 34.0, image: productSerum, category: "Toner" },
    { id: 17, name: "Balancing Toner", price: 36.0, image: productSerumVitaminE, category: "Toner" },
    { id: 18, name: "Exfoliating Toner", price: 38.0, image: productSerumPeptide, category: "Toner" },
    { id: 19, name: "Soothing Toner", price: 32.0, image: productSerumCollagen, category: "Toner" },
    { id: 20, name: "Brightening Toner", price: 35.0, image: productSerumBrightening, category: "Toner" },
    
    // Face Mask Category - 5 items
    { id: 21, name: "Clay Mask", price: 45.0, image: productCreamMoisturizing, category: "Mask" },
    { id: 22, name: "Sheet Mask Set", price: 28.0, image: productCreamNourishing, category: "Mask" },
    { id: 23, name: "Sleeping Mask", price: 52.0, image: productCreamRecovery, category: "Mask" },
    { id: 24, name: "Hydrating Mask", price: 48.0, image: productCreamSoothing, category: "Mask" },
    { id: 25, name: "Detox Mask", price: 50.0, image: productCreamEye, category: "Mask" },
    
    // Sunscreen Category - 5 items
    { id: 26, name: "Daily UV Shield SPF 50", price: 42.0, image: productCream, category: "Sunscreen" },
    { id: 27, name: "Mineral Sunscreen SPF 45", price: 46.0, image: productCreamDay, category: "Sunscreen" },
    { id: 28, name: "Tinted Sunscreen SPF 40", price: 48.0, image: productCreamFirming, category: "Sunscreen" },
    { id: 29, name: "Waterproof Sunscreen SPF 50+", price: 44.0, image: productCreamMoisturizing, category: "Sunscreen" },
    { id: 30, name: "Lightweight Sunscreen SPF 35", price: 40.0, image: productCreamNourishing, category: "Sunscreen" },
    
    // Eye Care Category - 5 items
    { id: 31, name: "Eye Cream", price: 56.0, image: productCreamEye, category: "Eye Care" },
    { id: 32, name: "Eye Serum", price: 62.0, image: productSerumPeptide, category: "Eye Care" },
    { id: 33, name: "Eye Gel", price: 48.0, image: productSerumCollagen, category: "Eye Care" },
    { id: 34, name: "Dark Circle Treatment", price: 58.0, image: productSerumBrightening, category: "Eye Care" },
    { id: 35, name: "Eye Mask Patches", price: 32.0, image: productCreamSoothing, category: "Eye Care" },
    
    // Exfoliator Category - 5 items
    { id: 36, name: "Gentle Scrub", price: 38.0, image: productCleanserExfoliating, category: "Exfoliator" },
    { id: 37, name: "Chemical Exfoliant", price: 44.0, image: productCleanserPurifying, category: "Exfoliator" },
    { id: 38, name: "Enzyme Peel", price: 52.0, image: productCleanserCream, category: "Exfoliator" },
    { id: 39, name: "Peeling Gel", price: 40.0, image: productCleanserBalm, category: "Exfoliator" },
    { id: 40, name: "AHA/BHA Toner", price: 46.0, image: productCleanserMousse, category: "Exfoliator" },
    
    // Essence Category - 5 items
    { id: 41, name: "Hydrating Essence", price: 58.0, image: productSerumHyaluronic, category: "Essence" },
    { id: 42, name: "Brightening Essence", price: 62.0, image: productSerumBrightening, category: "Essence" },
    { id: 43, name: "Anti-Aging Essence", price: 68.0, image: productSerumAntiaging, category: "Essence" },
    { id: 44, name: "Repair Essence", price: 64.0, image: productSerumRetinol, category: "Essence" },
    { id: 45, name: "Soothing Essence", price: 56.0, image: productSerumVitaminE, category: "Essence" },
    
    // Mist Category - 5 items
    { id: 46, name: "Refreshing Mist", price: 28.0, image: productSerum, category: "Mist" },
    { id: 47, name: "Hydrating Mist", price: 32.0, image: productSerumHyaluronic, category: "Mist" },
    { id: 48, name: "Calming Mist", price: 30.0, image: productSerumVitaminE, category: "Mist" },
    { id: 49, name: "Setting Mist", price: 34.0, image: productSerumPeptide, category: "Mist" },
    { id: 50, name: "Glow Mist", price: 36.0, image: productSerumBrightening, category: "Mist" },
  ];

  const categories = ["All", "Serum", "Moisturizer", "Cleanser", "Toner", "Mask", "Sunscreen", "Eye Care", "Exfoliator", "Essence", "Mist"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Shop All Products</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of natural skincare essentials.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
