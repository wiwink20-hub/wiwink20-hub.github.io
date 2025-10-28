import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Leaf, Sparkles } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          >
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Crafting natural beauty with purpose and passion
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Beauty Inspired by Nature
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2020, Lumière was born from a simple belief: that skincare should be
                as pure as nature intended. Our founder, inspired by generations of botanical
                wisdom, set out to create a line of products that honor both your skin and our
                planet.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every Lumière formula is crafted with carefully sourced botanical ingredients,
                free from harsh chemicals, and never tested on animals. We believe in
                transparency, sustainability, and the transformative power of nature's finest
                ingredients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve thousands of customers worldwide, helping them
                discover their skin's natural radiance through our thoughtfully crafted products.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-background/50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to eco-friendly practices, from sourcing to packaging, to
                  protect our planet for future generations.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-background/50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in full ingredient disclosure and honest communication about what
                  goes into every bottle.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-background/50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                <p className="text-muted-foreground">
                  All our products are cruelty-free, and we donate a portion of profits to
                  environmental causes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower everyone to embrace their natural beauty through clean, effective
              skincare that's kind to both skin and planet. We're not just creating
              products—we're fostering a community that celebrates authenticity, sustainability,
              and the radiant confidence that comes from healthy skin.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
