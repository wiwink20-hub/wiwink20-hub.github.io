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
    // Serum Category - 5 items
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
      id: 3, name: "Retinol Serum", price: 78.0, image: productSerumRetinol, category: "Serum",
      description: "Advanced retinol treatment that reduces signs of aging and improves skin texture overnight.",
      ingredients: "Retinol, Peptides, Niacinamide, Squalane",
      benefits: ["Reduces wrinkles", "Improves texture", "Minimizes pores", "Stimulates renewal"],
    },
    {
      id: 4, name: "Hyaluronic Acid Serum", price: 70.0, image: productSerumHyaluronic, category: "Serum",
      description: "Ultra-hydrating serum with multiple molecular weights of hyaluronic acid for deep moisture.",
      ingredients: "Hyaluronic Acid, Glycerin, Vitamin B5, Aloe Vera",
      benefits: ["Intense hydration", "Plumps skin", "Smooth texture", "Long-lasting moisture"],
    },
    {
      id: 5, name: "Niacinamide Serum", price: 62.0, image: productSerumNiacinamide, category: "Serum",
      description: "Multi-functional niacinamide serum that refines pores and balances oil production.",
      ingredients: "Niacinamide, Zinc, Hyaluronic Acid, Allantoin",
      benefits: ["Minimizes pores", "Balances oil", "Reduces redness", "Strengthens barrier"],
    },
    
    // Moisturizer Category - 5 items
    {
      id: 6, name: "Hydrating Cream", price: 52.0, image: productCream, category: "Moisturizer",
      description: "Rich, nourishing cream that provides lasting hydration with natural botanicals.",
      ingredients: "Shea Butter, Jojoba Oil, Chamomile Extract, Vitamin E, Ceramides",
      benefits: ["24-hour hydration", "Strengthens barrier", "Calms irritation", "Lightweight formula"],
    },
    {
      id: 7, name: "Night Cream", price: 58.0, image: productCream, category: "Moisturizer",
      description: "Intensive overnight treatment that repairs and rejuvenates while you sleep.",
      ingredients: "Retinol, Peptides, Shea Butter, Vitamin E",
      benefits: ["Repairs overnight", "Reduces wrinkles", "Deep nourishment", "Wakes up refreshed"],
    },
    {
      id: 8, name: "Day Cream", price: 54.0, image: productCreamDay, category: "Moisturizer",
      description: "Lightweight day cream with SPF protection and hydrating benefits for daily use.",
      ingredients: "Hyaluronic Acid, Vitamin C, Green Tea, SPF 30",
      benefits: ["UV protection", "Hydrates all day", "Brightens", "Perfect makeup base"],
    },
    {
      id: 9, name: "Anti-Wrinkle Cream", price: 64.0, image: productCreamAntiwrinkle, category: "Moisturizer",
      description: "Advanced anti-aging cream that targets wrinkles and fine lines with powerful ingredients.",
      ingredients: "Retinol, Peptides, Vitamin C, Hyaluronic Acid",
      benefits: ["Reduces wrinkles", "Firms skin", "Boosts collagen", "Smooths texture"],
    },
    {
      id: 10, name: "Firming Cream", price: 62.0, image: productCreamFirming, category: "Moisturizer",
      description: "Lifting cream that improves skin elasticity and reduces sagging for a youthful appearance.",
      ingredients: "Peptide Complex, Caffeine, Shea Butter, Vitamin E",
      benefits: ["Lifts and firms", "Improves elasticity", "Tightens skin", "Reduces sagging"],
    },

    // Cleanser Category - 5 items
    {
      id: 11, name: "Gentle Cleanser", price: 38.0, image: productCleanser, category: "Cleanser",
      description: "Ultra-gentle cleanser that purifies skin without stripping natural moisture.",
      ingredients: "Chamomile, Aloe Vera, Glycerin, Green Tea",
      benefits: ["Gentle cleansing", "Maintains moisture", "Soothes skin", "Perfect for daily use"],
    },
    {
      id: 12, name: "Foaming Cleanser", price: 42.0, image: productCleanser, category: "Cleanser",
      description: "Rich foaming cleanser that deeply cleanses pores for fresh, clear skin.",
      ingredients: "Amino Acids, Glycerin, Aloe Vera, Tea Tree Oil",
      benefits: ["Deep cleansing", "Removes excess oil", "Refreshing foam", "Non-drying"],
    },
    {
      id: 13, name: "Micellar Water", price: 36.0, image: productCleanserMicellar, category: "Cleanser",
      description: "No-rinse micellar water that gently removes makeup and impurities in one step.",
      ingredients: "Micellar Technology, Rose Water, Glycerin, Cucumber",
      benefits: ["No-rinse formula", "Removes makeup", "Gentle on skin", "Quick cleansing"],
    },
    {
      id: 14, name: "Gel Cleanser", price: 40.0, image: productCleanserGel, category: "Cleanser",
      description: "Refreshing gel cleanser that purifies and revitalizes oily and combination skin.",
      ingredients: "Salicylic Acid, Tea Tree Oil, Aloe Vera, Glycerin",
      benefits: ["Purifies pores", "Controls oil", "Refreshing gel", "Clear complexion"],
    },
    {
      id: 15, name: "Oil Cleanser", price: 45.0, image: productCleanserOil, category: "Cleanser",
      description: "Luxurious oil cleanser that melts away makeup and sunscreen effortlessly.",
      ingredients: "Jojoba Oil, Olive Oil, Vitamin E, Sunflower Oil",
      benefits: ["Melts makeup", "Deep cleansing", "Nourishes skin", "Emulsifies easily"],
    },

    // Toner Category - 5 items
    {
      id: 16, name: "Hydrating Toner", price: 34.0, image: productSerum, category: "Toner",
      description: "Moisture-rich toner that preps skin for better absorption of serums and creams.",
      ingredients: "Hyaluronic Acid, Rose Water, Glycerin, Aloe Vera",
      benefits: ["Boosts hydration", "Preps skin", "Balances pH", "Refreshing feel"],
    },
    {
      id: 17, name: "Balancing Toner", price: 36.0, image: productSerumVitaminE, category: "Toner",
      description: "pH-balancing toner that restores skin's natural equilibrium after cleansing.",
      ingredients: "Witch Hazel, Niacinamide, Green Tea, Centella",
      benefits: ["Balances pH", "Tightens pores", "Controls oil", "Soothes skin"],
    },
    {
      id: 18, name: "Exfoliating Toner", price: 38.0, image: productSerumPeptide, category: "Toner",
      description: "Gentle chemical exfoliant that removes dead skin cells for a brighter complexion.",
      ingredients: "Glycolic Acid, Lactic Acid, Niacinamide, Aloe Vera",
      benefits: ["Exfoliates gently", "Brightens skin", "Smooths texture", "Refines pores"],
    },
    {
      id: 19, name: "Soothing Toner", price: 32.0, image: productSerumCollagen, category: "Toner",
      description: "Calming toner that reduces redness and irritation for sensitive skin.",
      ingredients: "Centella Asiatica, Chamomile, Aloe Vera, Green Tea",
      benefits: ["Calms irritation", "Reduces redness", "Hydrates gently", "Perfect for sensitive skin"],
    },
    {
      id: 20, name: "Brightening Toner", price: 35.0, image: productSerumBrightening, category: "Toner",
      description: "Illuminating toner that evens skin tone and adds radiance.",
      ingredients: "Vitamin C, Niacinamide, Licorice Extract, Rose Water",
      benefits: ["Brightens complexion", "Evens tone", "Adds glow", "Refreshes skin"],
    },

    // Mask Category - 5 items
    {
      id: 21, name: "Clay Mask", price: 45.0, image: productCreamMoisturizing, category: "Mask",
      description: "Purifying clay mask that draws out impurities and refines pores.",
      ingredients: "Kaolin Clay, Bentonite Clay, Tea Tree Oil, Charcoal",
      benefits: ["Deep cleansing", "Detoxifies pores", "Controls oil", "Refines texture"],
    },
    {
      id: 22, name: "Sheet Mask Set", price: 28.0, image: productCreamNourishing, category: "Mask",
      description: "Hydrating sheet mask set infused with nourishing essences for instant glow.",
      ingredients: "Hyaluronic Acid, Vitamin C, Aloe Vera, Green Tea",
      benefits: ["Instant hydration", "Brightens skin", "Easy to use", "Multiple benefits"],
    },
    {
      id: 23, name: "Sleeping Mask", price: 52.0, image: productCreamRecovery, category: "Mask",
      description: "Overnight mask that deeply nourishes and repairs skin while you sleep.",
      ingredients: "Peptides, Hyaluronic Acid, Shea Butter, Vitamin E",
      benefits: ["Overnight repair", "Deep nourishment", "Wake up glowing", "Intensive treatment"],
    },
    {
      id: 24, name: "Hydrating Mask", price: 48.0, image: productCreamSoothing, category: "Mask",
      description: "Ultra-hydrating mask that quenches thirsty skin with lasting moisture.",
      ingredients: "Hyaluronic Acid, Ceramides, Glycerin, Aloe Vera",
      benefits: ["Intense hydration", "Plumps skin", "Soothes dryness", "Radiant results"],
    },
    {
      id: 25, name: "Detox Mask", price: 50.0, image: productCreamEye, category: "Mask",
      description: "Activated charcoal mask that purifies and revitalizes congested skin.",
      ingredients: "Activated Charcoal, Kaolin Clay, Tea Tree Oil, Vitamin E",
      benefits: ["Detoxifies deeply", "Removes toxins", "Clarifies skin", "Refines pores"],
    },

    // Sunscreen Category - 5 items
    {
      id: 26, name: "Daily UV Shield SPF 50", price: 42.0, image: productCream, category: "Sunscreen",
      description: "Broad-spectrum sunscreen that protects against UVA and UVB rays with lightweight formula.",
      ingredients: "Zinc Oxide, Titanium Dioxide, Vitamin E, Green Tea",
      benefits: ["SPF 50 protection", "Lightweight feel", "No white cast", "Antioxidant boost"],
    },
    {
      id: 27, name: "Mineral Sunscreen SPF 45", price: 46.0, image: productCreamDay, category: "Sunscreen",
      description: "Physical sunscreen with mineral filters for sensitive skin protection.",
      ingredients: "Zinc Oxide, Titanium Dioxide, Aloe Vera, Vitamin C",
      benefits: ["Mineral protection", "Reef-safe formula", "Gentle on skin", "Immediate protection"],
    },
    {
      id: 28, name: "Tinted Sunscreen SPF 40", price: 48.0, image: productCreamFirming, category: "Sunscreen",
      description: "Tinted sunscreen that evens skin tone while providing sun protection.",
      ingredients: "Zinc Oxide, Iron Oxides, Hyaluronic Acid, Vitamin E",
      benefits: ["Sun protection", "Evens skin tone", "Natural coverage", "Multitasking formula"],
    },
    {
      id: 29, name: "Waterproof Sunscreen SPF 50+", price: 44.0, image: productCreamMoisturizing, category: "Sunscreen",
      description: "Water-resistant sunscreen perfect for outdoor activities and swimming.",
      ingredients: "Avobenzone, Octocrylene, Vitamin E, Aloe Vera",
      benefits: ["Water-resistant 80min", "Very high protection", "Sweat-proof", "Active lifestyle"],
    },
    {
      id: 30, name: "Lightweight Sunscreen SPF 35", price: 40.0, image: productCreamNourishing, category: "Sunscreen",
      description: "Featherlight sunscreen that absorbs instantly without greasiness.",
      ingredients: "Avobenzone, Octinoxate, Vitamin C, Green Tea",
      benefits: ["Ultra-light texture", "Quick absorption", "No greasiness", "Daily protection"],
    },

    // Eye Care Category - 5 items
    {
      id: 31, name: "Eye Cream", price: 56.0, image: productCreamEye, category: "Eye Care",
      description: "Rich eye cream that targets multiple signs of aging around the delicate eye area.",
      ingredients: "Caffeine, Peptides, Vitamin K, Hyaluronic Acid",
      benefits: ["Reduces puffiness", "Diminishes circles", "Smooths lines", "Brightens eyes"],
    },
    {
      id: 32, name: "Eye Serum", price: 62.0, image: productSerumPeptide, category: "Eye Care",
      description: "Lightweight eye serum that firms and lifts for a youthful look.",
      ingredients: "Peptide Complex, Caffeine, Vitamin C, Hyaluronic Acid",
      benefits: ["Firms eye area", "Lifts lids", "Brightens", "Fast-absorbing"],
    },
    {
      id: 33, name: "Eye Gel", price: 48.0, image: productSerumCollagen, category: "Eye Care",
      description: "Cooling eye gel that instantly refreshes tired, puffy eyes.",
      ingredients: "Caffeine, Cucumber Extract, Aloe Vera, Hyaluronic Acid",
      benefits: ["Instant cooling", "Reduces puffiness", "Refreshes eyes", "Lightweight gel"],
    },
    {
      id: 34, name: "Dark Circle Treatment", price: 58.0, image: productSerumBrightening, category: "Eye Care",
      description: "Targeted treatment that visibly reduces dark circles and discoloration.",
      ingredients: "Vitamin K, Vitamin C, Caffeine, Niacinamide",
      benefits: ["Reduces dark circles", "Brightens undereye", "Improves circulation", "Visible results"],
    },
    {
      id: 35, name: "Eye Mask Patches", price: 32.0, image: productCreamSoothing, category: "Eye Care",
      description: "Hydrogel eye patches that deliver intensive care in just 15 minutes.",
      ingredients: "Hyaluronic Acid, Collagen, Vitamin E, Green Tea",
      benefits: ["Quick treatment", "Intensive hydration", "Reduces puffiness", "Convenient patches"],
    },

    // Exfoliator Category - 5 items
    {
      id: 36, name: "Gentle Scrub", price: 38.0, image: productCleanserExfoliating, category: "Exfoliator",
      description: "Physical exfoliant with fine particles that buff away dead skin gently.",
      ingredients: "Jojoba Beads, Rice Powder, Aloe Vera, Vitamin E",
      benefits: ["Gentle exfoliation", "Smooths texture", "Natural particles", "Safe for sensitive skin"],
    },
    {
      id: 37, name: "Chemical Exfoliant", price: 44.0, image: productCleanserPurifying, category: "Exfoliator",
      description: "AHA/BHA liquid exfoliant that unclogs pores and reveals brighter skin.",
      ingredients: "Glycolic Acid, Salicylic Acid, Lactic Acid, Niacinamide",
      benefits: ["Deep exfoliation", "Unclogs pores", "Brightens skin", "Smooths texture"],
    },
    {
      id: 38, name: "Enzyme Peel", price: 52.0, image: productCleanserCream, category: "Exfoliator",
      description: "Natural enzyme treatment that gently dissolves dead skin cells.",
      ingredients: "Papaya Enzyme, Pineapple Enzyme, Aloe Vera, Vitamin C",
      benefits: ["Natural exfoliation", "Gentle on skin", "Brightens complexion", "No irritation"],
    },
    {
      id: 39, name: "Peeling Gel", price: 40.0, image: productCleanserBalm, category: "Exfoliator",
      description: "Innovative gel that rolls away dead skin and impurities visibly.",
      ingredients: "Cellulose, AHA, Botanical Extracts, Aloe Vera",
      benefits: ["Visible results", "Deep cleansing", "Gentle peeling", "Satisfying texture"],
    },
    {
      id: 40, name: "AHA/BHA Toner", price: 46.0, image: productCleanserMousse, category: "Exfoliator",
      description: "Daily exfoliating toner that refines texture and minimizes pores.",
      ingredients: "Glycolic Acid, Salicylic Acid, Witch Hazel, Aloe Vera",
      benefits: ["Daily exfoliation", "Refines pores", "Smooths texture", "Brightens skin"],
    },

    // Essence Category - 5 items
    {
      id: 41, name: "Hydrating Essence", price: 58.0, image: productSerumHyaluronic, category: "Essence",
      description: "Concentrated essence that deeply hydrates and preps skin for better absorption.",
      ingredients: "Hyaluronic Acid, Glycerin, Niacinamide, Fermented Extracts",
      benefits: ["Deep hydration", "Enhances absorption", "Plumps skin", "Lightweight texture"],
    },
    {
      id: 42, name: "Brightening Essence", price: 62.0, image: productSerumBrightening, category: "Essence",
      description: "Illuminating essence that targets dullness and uneven skin tone.",
      ingredients: "Vitamin C, Niacinamide, Licorice Extract, Alpha-Arbutin",
      benefits: ["Brightens complexion", "Evens skin tone", "Adds radiance", "Fades dark spots"],
    },
    {
      id: 43, name: "Anti-Aging Essence", price: 68.0, image: productSerumAntiaging, category: "Essence",
      description: "Age-defying essence with powerful ingredients to combat wrinkles and sagging.",
      ingredients: "Retinol, Peptides, Adenosine, Hyaluronic Acid",
      benefits: ["Reduces wrinkles", "Firms skin", "Boosts elasticity", "Youthful glow"],
    },
    {
      id: 44, name: "Repair Essence", price: 64.0, image: productSerumRetinol, category: "Essence",
      description: "Reparative essence that strengthens skin barrier and improves resilience.",
      ingredients: "Ceramides, Peptides, Niacinamide, Centella Asiatica",
      benefits: ["Repairs barrier", "Strengthens skin", "Reduces sensitivity", "Improves resilience"],
    },
    {
      id: 45, name: "Soothing Essence", price: 56.0, image: productSerumVitaminE, category: "Essence",
      description: "Calming essence that reduces redness and irritation for sensitive skin.",
      ingredients: "Centella Asiatica, Chamomile, Aloe Vera, Panthenol",
      benefits: ["Calms irritation", "Reduces redness", "Hydrates gently", "Strengthens barrier"],
    },

    // Mist Category - 5 items
    {
      id: 46, name: "Refreshing Mist", price: 28.0, image: productSerum, category: "Mist",
      description: "Revitalizing facial mist that refreshes and hydrates throughout the day.",
      ingredients: "Rose Water, Aloe Vera, Green Tea, Glycerin",
      benefits: ["Instant refresh", "Hydrates skin", "Sets makeup", "Anytime use"],
    },
    {
      id: 47, name: "Hydrating Mist", price: 32.0, image: productSerumHyaluronic, category: "Mist",
      description: "Ultra-fine mist that delivers moisture boost whenever skin needs it.",
      ingredients: "Hyaluronic Acid, Glycerin, Rose Water, Vitamin B5",
      benefits: ["Intense hydration", "Fine mist", "Absorbs quickly", "Travel-friendly"],
    },
    {
      id: 48, name: "Calming Mist", price: 30.0, image: productSerumVitaminE, category: "Mist",
      description: "Soothing mist that calms stressed, irritated skin instantly.",
      ingredients: "Centella Asiatica, Chamomile, Lavender, Aloe Vera",
      benefits: ["Calms irritation", "Reduces redness", "Soothes skin", "Anti-inflammatory"],
    },
    {
      id: 49, name: "Setting Mist", price: 34.0, image: productSerumPeptide, category: "Mist",
      description: "Makeup setting mist that locks in your look while hydrating skin.",
      ingredients: "Aloe Vera, Cucumber Extract, Glycerin, Green Tea",
      benefits: ["Sets makeup", "Long-lasting hold", "Hydrates skin", "Natural finish"],
    },
    {
      id: 50, name: "Glow Mist", price: 36.0, image: productSerumBrightening, category: "Mist",
      description: "Luminizing mist that adds instant radiance and dewy glow to skin.",
      ingredients: "Vitamin C, Pearl Extract, Rose Water, Hyaluronic Acid",
      benefits: ["Instant glow", "Brightens skin", "Dewy finish", "Radiant complexion"],
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
