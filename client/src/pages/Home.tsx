import { Link } from "wouter";
import { ProductCard } from "../components/ProductCard";
import { Shield, Leaf, Package, Globe, Truck, HeadphonesIcon, Coffee } from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function Home() {
  const products = PRODUCTS;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden" data-testid="hero-section">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://wildgayoluwak.com/wp-content/uploads/2021/01/wildgayoluwak-2022-package-b.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 via-coffee-900/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20 md:py-28">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-h1">
            Wild Kopi Luwak, Authentic and Ethically Sourced Coffee
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            100% wild-foraged Arabica from the Gayo Highlands of Sumatra. Independently verified. Direct Trade. Freshly roasted to order.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {[
              { icon: Leaf, text: "Wild-foraged (not farmed)" },
              { icon: Shield, text: "No caged animals" },
              { icon: Coffee, text: "Established in 2015" },
              { icon: Globe, text: "Shipped fresh from the EU" },
            ].map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/10">
                <badge.icon size={14} className="text-gold" />
                {badge.text}
              </span>
            ))}
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-coffee-900 font-semibold px-8 py-3.5 rounded-md text-base transition-all hover:scale-105 shadow-lg"
            data-testid="link-shop-cta"
          >
            Shop Wild Kopi Luwak
          </Link>
        </div>
      </section>

      {/* Shipping Info Bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: Truck, text: "Free express shipping within the Netherlands" },
              { icon: HeadphonesIcon, text: "Customer support available 7 days a week" },
              { icon: Package, text: "Freshly roasted to order and shipped worldwide" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 text-sm text-muted-foreground">
                <item.icon size={18} className="text-secondary flex-shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 md:py-24" data-testid="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Wild Kopi Luwak Collection
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Medium roasted Wild Kopi Luwak Gayo Arabica coffee from Sumatra, Indonesia. Certified and foraged by our farmers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-card" data-testid="story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Wild Gayo Luwak Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010 and established as Wild Gayo Luwak in 2015, our journey began with a simple mission: to bring the world's rarest and most extraordinary coffee from the remote Gayo Highlands of Sumatra directly to discerning coffee lovers.
                </p>
                <p>
                  Our Wild Kopi Luwak is 100% wild-foraged from free-roaming Asian Palm Civets in the pristine forests surrounding our estate. No cages, no forced feeding — just nature's own remarkable process that transforms already exceptional Gayo Arabica beans into something truly extraordinary.
                </p>
                <p>
                  We partner with UTZ and World Animal Protection to ensure our practices meet the highest ethical and sustainability standards. Every batch is independently certified by third-party auditors.
                </p>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-6 py-3 rounded-md text-sm mt-8 transition-colors"
                data-testid="link-try-now"
              >
                Try Now
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://wildgayoluwak.com/wp-content/uploads/2021/01/100-grams.jpg"
                  alt="Wild Gayo Luwak coffee package"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Origin Details */}
      <section className="py-16 md:py-24" data-testid="origin-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              Origin Details
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traceable from farm to cup. Every detail of our Wild Kopi Luwak's journey.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              {[
                { label: "Country", value: "Indonesia" },
                { label: "Region", value: "Sumatra" },
                { label: "Sub-region", value: "Gayo Highlands; Bener Meriah, Berewang Dewal" },
                { label: "Varietal", value: "Arabica, Central Aceh, Gayo 1 — Typica" },
                { label: "Altitude", value: "1,100–1,500 meters above sea level" },
                { label: "Method", value: "Wild Kopi Luwak Gayo Arabica, certified farms only" },
                { label: "Harvest", value: "March–May and September–January" },
                { label: "Certification", value: "100% Certified Wild Kopi Luwak" },
              ].map((row, i) => (
                <div key={i} className={`flex ${i > 0 ? "border-t border-border" : ""}`}>
                  <div className="w-1/3 px-5 py-3.5 font-semibold text-sm bg-muted/30">{row.label}</div>
                  <div className="w-2/3 px-5 py-3.5 text-sm text-muted-foreground">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="py-16 md:py-24 bg-card" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Premium Packaging */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Premium Packed Wild Kopi Luwak Coffee
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each batch is freshly roasted to order and sealed in premium coffee bags with a ziplock and one-way degassing valve, ensuring maximum freshness from our roaster in the EU to your cup.
            </p>
          </div>

          {/* Gayo Mountain */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Gayo Mountain Arabica Coffee Beans
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Grown at 1,100–1,500 meters above sea level in the volcanic soils of the Gayo Highlands, our Arabica beans develop a remarkably smooth, earthy, and sweet flavor profile with caramel and chocolate hints — even before the luwak's unique enhancement.
            </p>
          </div>

          {/* Foraged & Wild Processed */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Foraged, Wild Collected and Processed
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our farmers carefully collect wild civet coffee droppings from the forest floor of their coffee plantations. Each cherry is meticulously cleaned, dried under the Sumatran sun, and hand-sorted to ensure only the finest beans make it into your cup.
            </p>
          </div>

          {/* Hand Roasted */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Hand Roasted to Perfection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our beans are medium roasted in small batches using precision IKAWA roasting technology to preserve the complex flavor compounds unique to Wild Kopi Luwak. Every roast is carefully profiled to bring out the best in each seasonal lot.
            </p>
          </div>
        </div>
      </section>

      {/* Trust / Certification */}
      <section className="py-16 md:py-24" data-testid="trust-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Certified &amp; Trusted
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: "100% Certified Wild Kopi Luwak" },
              { icon: Leaf, label: "Ethically Wild-Foraged" },
              { icon: Globe, label: "Shipped Fresh from the EU" },
              { icon: Coffee, label: "Roasted to Order" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border">
                <item.icon size={28} className="text-secondary" />
                <p className="text-sm font-medium text-center">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://www.instagram.com/wildgayoluwak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-secondary transition-colors"
            >
              Follow @wildgayoluwak on Instagram →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
