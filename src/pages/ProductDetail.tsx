import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const products = [
    // Serum Category
    {
      id: 1, name: "Radiance Serum", price: 68.0, image: productSerum, category: "Serum",
      description: "Our bestselling Radiance Serum is formulated with powerful botanicals to brighten, hydrate, and restore your skin's natural glow.",
      ingredients: "Hyaluronic Acid, Vitamin C, Rose Hip Oil, Aloe Vera, Green Tea Extract",
      benefits: ["Brightens and evens skin tone", "Deeply hydrates and plumps", "Reduces fine lines", "Protects against damage"],
    },
    {
      id: 2, name: "Vitamin C Serum", price: 72.0, image: productSerum, category: "Serum",
      description: "Potent vitamin C formula that targets dark spots and uneven skin tone for a luminous complexion.",
      ingredients: "Vitamin C, Ferulic Acid, Vitamin E, Hyaluronic Acid",
      benefits: ["Brightens complexion", "Reduces hyperpigmentation", "Boosts collagen", "Antioxidant protection"],
    },
    {
      id: 3, name: "Vitamin E Serum", price: 65.0, image: productSerumVitaminE, category: "Serum",
      description: "Nourishing vitamin E serum that protects and repairs skin from environmental stressors.",
      ingredients: "Vitamin E, Jojoba Oil, Squalane, Chamomile Extract",
      benefits: ["Nourishes deeply", "Repairs skin barrier", "Anti-inflammatory", "Soothes irritation"],
    },
    {
      id: 4, name: "Retinol Serum", price: 78.0, image: productSerumRetinol, category: "Serum",
      description: "Advanced retinol treatment that reduces signs of aging and improves skin texture overnight.",
      ingredients: "Retinol, Peptides, Niacinamide, Squalane",
      benefits: ["Reduces wrinkles", "Improves texture", "Minimizes pores", "Stimulates renewal"],
    },
    {
      id: 5, name: "Niacinamide Serum", price: 62.0, image: productSerumNiacinamide, category: "Serum",
      description: "Multi-functional niacinamide serum that refines pores and balances oil production.",
      ingredients: "Niacinamide, Zinc, Hyaluronic Acid, Allantoin",
      benefits: ["Minimizes pores", "Balances oil", "Reduces redness", "Strengthens barrier"],
    },
    {
      id: 6, name: "Hyaluronic Acid Serum", price: 70.0, image: productSerumHyaluronic, category: "Serum",
      description: "Ultra-hydrating serum with multiple molecular weights of hyaluronic acid for deep moisture.",
      ingredients: "Hyaluronic Acid, Glycerin, Vitamin B5, Aloe Vera",
      benefits: ["Intense hydration", "Plumps skin", "Smooth texture", "Long-lasting moisture"],
    },
    {
      id: 7, name: "Peptide Serum", price: 82.0, image: productSerumPeptide, category: "Serum",
      description: "Powerful peptide complex that firms skin and reduces the appearance of wrinkles.",
      ingredients: "Peptide Complex, Collagen, Elastin, Hyaluronic Acid",
      benefits: ["Firms skin", "Boosts collagen", "Reduces wrinkles", "Improves elasticity"],
    },
    {
      id: 8, name: "Collagen Serum", price: 75.0, image: productSerumCollagen, category: "Serum",
      description: "Collagen-boosting serum that enhances skin firmness and reduces sagging.",
      ingredients: "Marine Collagen, Peptides, Vitamin C, Rose Hip Oil",
      benefits: ["Boosts firmness", "Reduces sagging", "Enhances elasticity", "Smooths texture"],
    },
    {
      id: 9, name: "Brightening Serum", price: 68.0, image: productSerumBrightening, category: "Serum",
      description: "Illuminating serum that targets dullness and reveals a radiant, glowing complexion.",
      ingredients: "Vitamin C, Licorice Root, Kojic Acid, Niacinamide",
      benefits: ["Brightens instantly", "Reduces dark spots", "Evens tone", "Adds radiance"],
    },
    {
      id: 10, name: "Anti-Aging Serum", price: 85.0, image: productSerumAntiaging, category: "Serum",
      description: "Comprehensive anti-aging treatment with advanced ingredients to combat multiple signs of aging.",
      ingredients: "Retinol, Peptides, Vitamin C, Hyaluronic Acid, Coenzyme Q10",
      benefits: ["Reduces all aging signs", "Firms and lifts", "Brightens", "Deeply hydrates"],
    },

    // Moisturizer Category
    {
      id: 11, name: "Hydrating Cream", price: 52.0, image: productCream, category: "Moisturizer",
      description: "Rich, nourishing cream that provides lasting hydration with natural botanicals.",
      ingredients: "Shea Butter, Jojoba Oil, Chamomile Extract, Vitamin E, Ceramides",
      benefits: ["24-hour hydration", "Strengthens barrier", "Calms irritation", "Lightweight formula"],
    },
    {
      id: 12, name: "Night Cream", price: 58.0, image: productCream, category: "Moisturizer",
      description: "Intensive overnight treatment that repairs and rejuvenates while you sleep.",
      ingredients: "Retinol, Peptides, Shea Butter, Vitamin E",
      benefits: ["Repairs overnight", "Reduces wrinkles", "Deep nourishment", "Wakes up refreshed"],
    },
    {
      id: 13, name: "Day Cream", price: 54.0, image: productCreamDay, category: "Moisturizer",
      description: "Lightweight day cream with SPF protection and hydrating benefits for daily use.",
      ingredients: "Hyaluronic Acid, Vitamin C, Green Tea, SPF 30",
      benefits: ["UV protection", "Hydrates all day", "Brightens", "Perfect makeup base"],
    },
    {
      id: 14, name: "Eye Cream", price: 48.0, image: productCreamEye, category: "Moisturizer",
      description: "Targeted treatment for delicate eye area that reduces puffiness and dark circles.",
      ingredients: "Caffeine, Peptides, Vitamin K, Hyaluronic Acid",
      benefits: ["Reduces puffiness", "Diminishes circles", "Smooths lines", "Brightens eyes"],
    },
    {
      id: 15, name: "Anti-Wrinkle Cream", price: 64.0, image: productCreamAntiwrinkle, category: "Moisturizer",
      description: "Powerful anti-wrinkle cream that visibly smooths and firms mature skin.",
      ingredients: "Retinol, Peptides, Hyaluronic Acid, Vitamin C",
      benefits: ["Smooths wrinkles", "Firms skin", "Boosts collagen", "Visible results"],
    },
    {
      id: 16, name: "Firming Cream", price: 62.0, image: productCreamFirming, category: "Moisturizer",
      description: "Lifting cream that tightens and tones for a more youthful appearance.",
      ingredients: "Peptide Complex, Collagen, DMAE, Shea Butter",
      benefits: ["Lifts and firms", "Improves elasticity", "Tones skin", "Reduces sagging"],
    },
    {
      id: 17, name: "Moisturizing Cream", price: 55.0, image: productCreamMoisturizing, category: "Moisturizer",
      description: "Essential daily moisturizer that balances and hydrates all skin types.",
      ingredients: "Aloe Vera, Jojoba Oil, Vitamin E, Glycerin",
      benefits: ["Balanced hydration", "Soothes skin", "Non-greasy", "All skin types"],
    },
    {
      id: 18, name: "Nourishing Cream", price: 60.0, image: productCreamNourishing, category: "Moisturizer",
      description: "Ultra-rich cream that deeply nourishes and restores dry, depleted skin.",
      ingredients: "Argan Oil, Shea Butter, Vitamin E, Ceramides",
      benefits: ["Deep nourishment", "Restores dry skin", "Rich texture", "Long-lasting"],
    },
    {
      id: 19, name: "Recovery Cream", price: 68.0, image: productCreamRecovery, category: "Moisturizer",
      description: "Restorative cream that repairs damaged skin and strengthens the skin barrier.",
      ingredients: "Centella Asiatica, Ceramides, Peptides, Niacinamide",
      benefits: ["Repairs damage", "Strengthens barrier", "Calms sensitivity", "Restores health"],
    },
    {
      id: 20, name: "Soothing Cream", price: 56.0, image: productCreamSoothing, category: "Moisturizer",
      description: "Gentle cream that calms and comforts sensitive, irritated skin.",
      ingredients: "Chamomile, Calendula, Aloe Vera, Colloidal Oatmeal",
      benefits: ["Calms irritation", "Reduces redness", "Soothes sensitivity", "Gentle formula"],
    },

    // Cleanser Category
    {
      id: 21, name: "Gentle Cleanser", price: 38.0, image: productCleanser, category: "Cleanser",
      description: "pH-balanced cleanser that removes impurities while maintaining natural moisture.",
      ingredients: "Coconut Oil, Glycerin, Cucumber Extract, Green Tea, Aloe Vera",
      benefits: ["Removes impurities", "pH balanced", "Gentle formula", "Refreshes skin"],
    },
    {
      id: 22, name: "Foaming Cleanser", price: 42.0, image: productCleanser, category: "Cleanser",
      description: "Light foaming cleanser that deeply cleanses without stripping natural oils.",
      ingredients: "Glycerin, Green Tea, Chamomile, Aloe Vera",
      benefits: ["Deep cleansing", "Removes excess oil", "Refreshing foam", "Non-drying"],
    },
    {
      id: 23, name: "Micellar Water", price: 36.0, image: productCleanserMicellar, category: "Cleanser",
      description: "No-rinse micellar water that gently removes makeup and impurities in one step.",
      ingredients: "Micellar Technology, Rose Water, Glycerin, Cucumber",
      benefits: ["No-rinse formula", "Removes makeup", "Gentle on skin", "Quick cleansing"],
    },
    {
      id: 24, name: "Gel Cleanser", price: 40.0, image: productCleanserGel, category: "Cleanser",
      description: "Refreshing gel cleanser that purifies and revitalizes oily and combination skin.",
      ingredients: "Salicylic Acid, Tea Tree Oil, Aloe Vera, Glycerin",
      benefits: ["Purifies pores", "Controls oil", "Refreshing gel", "Clear complexion"],
    },
    {
      id: 25, name: "Oil Cleanser", price: 45.0, image: productCleanserOil, category: "Cleanser",
      description: "Luxurious oil cleanser that melts away makeup and sunscreen effortlessly.",
      ingredients: "Jojoba Oil, Olive Oil, Vitamin E, Sunflower Oil",
      benefits: ["Melts makeup", "Deep cleansing", "Nourishes skin", "Emulsifies easily"],
    },
    {
      id: 26, name: "Exfoliating Cleanser", price: 44.0, image: productCleanserExfoliating, category: "Cleanser",
      description: "Gentle exfoliating cleanser with natural enzymes for smooth, radiant skin.",
      ingredients: "Papaya Enzyme, Jojoba Beads, Glycolic Acid, Aloe Vera",
      benefits: ["Exfoliates gently", "Smooths texture", "Brightens skin", "Reveals radiance"],
    },
    {
      id: 27, name: "Purifying Cleanser", price: 41.0, image: productCleanserPurifying, category: "Cleanser",
      description: "Detoxifying cleanser that draws out impurities for clear, balanced skin.",
      ingredients: "Charcoal, Green Tea, Tea Tree Oil, Glycerin",
      benefits: ["Detoxifies skin", "Draws impurities", "Balances oil", "Clarifies pores"],
    },
    {
      id: 28, name: "Cream Cleanser", price: 43.0, image: productCleanserCream, category: "Cleanser",
      description: "Creamy, hydrating cleanser perfect for dry and sensitive skin types.",
      ingredients: "Shea Butter, Chamomile, Glycerin, Vitamin E",
      benefits: ["Hydrating formula", "Gentle cleansing", "Soothes dryness", "Soft finish"],
    },
    {
      id: 29, name: "Balm Cleanser", price: 46.0, image: productCleanserBalm, category: "Cleanser",
      description: "Solid-to-oil balm cleanser that transforms into silky milk upon contact with water.",
      ingredients: "Shea Butter, Coconut Oil, Vitamin E, Rose Hip Oil",
      benefits: ["Melts makeup", "Nourishes deeply", "Luxurious texture", "Spa-like experience"],
    },
    {
      id: 30, name: "Mousse Cleanser", price: 39.0, image: productCleanserMousse, category: "Cleanser",
      description: "Airy mousse cleanser that gently purifies without disrupting skin's moisture balance.",
      ingredients: "Amino Acids, Glycerin, Chamomile, Aloe Vera",
      benefits: ["Ultra-gentle", "Airy texture", "Balances skin", "Perfect for sensitive"],
    },
  ];

  const product = products.find((p) => p.id === Number(id)) || products[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/shop"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Benefits */}
              <div>
                <h3 className="font-semibold mb-3">Key Benefits:</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="font-semibold mb-2">Ingredients:</h3>
                <p className="text-sm text-muted-foreground">{product.ingredients}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button size="lg" className="w-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
