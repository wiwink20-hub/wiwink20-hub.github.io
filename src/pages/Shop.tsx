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
    // Serum Category - 10 items
    { id: 1, name: "Radiance Serum", price: 68.0, image: productSerum, category: "Serum" },
    { id: 2, name: "Vitamin C Serum", price: 72.0, image: productSerum, category: "Serum" },
    { id: 3, name: "Vitamin E Serum", price: 65.0, image: productSerumVitaminE, category: "Serum" },
    { id: 4, name: "Retinol Serum", price: 78.0, image: productSerumRetinol, category: "Serum" },
    { id: 5, name: "Niacinamide Serum", price: 62.0, image: productSerumNiacinamide, category: "Serum" },
    { id: 6, name: "Hyaluronic Acid Serum", price: 70.0, image: productSerumHyaluronic, category: "Serum" },
    { id: 7, name: "Peptide Serum", price: 82.0, image: productSerumPeptide, category: "Serum" },
    { id: 8, name: "Collagen Serum", price: 75.0, image: productSerumCollagen, category: "Serum" },
    { id: 9, name: "Brightening Serum", price: 68.0, image: productSerumBrightening, category: "Serum" },
    { id: 10, name: "Anti-Aging Serum", price: 85.0, image: productSerumAntiaging, category: "Serum" },
    
    // Moisturizer Category - 10 items
    { id: 11, name: "Hydrating Cream", price: 52.0, image: productCream, category: "Moisturizer" },
    { id: 12, name: "Night Cream", price: 58.0, image: productCream, category: "Moisturizer" },
    { id: 13, name: "Day Cream", price: 54.0, image: productCreamDay, category: "Moisturizer" },
    { id: 14, name: "Eye Cream", price: 48.0, image: productCreamEye, category: "Moisturizer" },
    { id: 15, name: "Anti-Wrinkle Cream", price: 64.0, image: productCreamAntiwrinkle, category: "Moisturizer" },
    { id: 16, name: "Firming Cream", price: 62.0, image: productCreamFirming, category: "Moisturizer" },
    { id: 17, name: "Moisturizing Cream", price: 55.0, image: productCreamMoisturizing, category: "Moisturizer" },
    { id: 18, name: "Nourishing Cream", price: 60.0, image: productCreamNourishing, category: "Moisturizer" },
    { id: 19, name: "Recovery Cream", price: 68.0, image: productCreamRecovery, category: "Moisturizer" },
    { id: 20, name: "Soothing Cream", price: 56.0, image: productCreamSoothing, category: "Moisturizer" },
    
    // Cleanser Category - 10 items
    { id: 21, name: "Gentle Cleanser", price: 38.0, image: productCleanser, category: "Cleanser" },
    { id: 22, name: "Foaming Cleanser", price: 42.0, image: productCleanser, category: "Cleanser" },
    { id: 23, name: "Micellar Water", price: 36.0, image: productCleanserMicellar, category: "Cleanser" },
    { id: 24, name: "Gel Cleanser", price: 40.0, image: productCleanserGel, category: "Cleanser" },
    { id: 25, name: "Oil Cleanser", price: 45.0, image: productCleanserOil, category: "Cleanser" },
    { id: 26, name: "Exfoliating Cleanser", price: 44.0, image: productCleanserExfoliating, category: "Cleanser" },
    { id: 27, name: "Purifying Cleanser", price: 41.0, image: productCleanserPurifying, category: "Cleanser" },
    { id: 28, name: "Cream Cleanser", price: 43.0, image: productCleanserCream, category: "Cleanser" },
    { id: 29, name: "Balm Cleanser", price: 46.0, image: productCleanserBalm, category: "Cleanser" },
    { id: 30, name: "Mousse Cleanser", price: 39.0, image: productCleanserMousse, category: "Cleanser" },
  ];

  const categories = ["All", "Serum", "Moisturizer", "Cleanser"];

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
