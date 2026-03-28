import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { ShoppingBag, Check, Minus, Plus, ChevronRight } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { ProductCard, ProductCardSkeleton } from "../components/ProductCard";
import type { Product } from "@shared/schema";

const PRODUCT_DESCRIPTIONS: Record<string, { description: string; tasting: string; brewing: string }> = {
  "50-grams-wild-kopi-luwak-coffee-beans": {
    description: "Our 50g package is the perfect introduction to Wild Kopi Luwak. Ideal for first-time tasters who want to experience the world's rarest coffee. Each bag contains freshly roasted, 100% certified wild-foraged Kopi Luwak Arabica beans from the Gayo Highlands.",
    tasting: "Expect a remarkably smooth cup with a velvety body, low acidity, and complex notes of dark chocolate, caramel, and a hint of tropical fruit. The finish is clean and lingering with subtle earthy undertones.",
    brewing: "For the best experience, use a pour-over or French press. Grind medium-fine, use water at 92–96°C, and brew for 3–4 minutes. Use 7g per 100ml of water.",
  },
  "100-grams-wild-kopi-luwak-arabica-coffee-beans": {
    description: "Our most popular size — the 100g package gives you enough Wild Kopi Luwak to truly explore and appreciate its extraordinary complexity over multiple brewing sessions. Perfect for coffee enthusiasts and a thoughtful luxury gift.",
    tasting: "Rich, velvety body with exceptionally low bitterness. Tasting notes include dark chocolate, toasted almond, caramel sweetness, and a clean earthy finish characteristic of the Gayo terroir.",
    brewing: "We recommend trying multiple brewing methods with this size. Start with pour-over to appreciate the clarity of flavors, then try French press for a fuller body. Grind fresh before each brew.",
  },
  "250-grams-wild-kopi-luwak-arabica-coffee-beans": {
    description: "Our best value — the 250g package is for the true connoisseur. Enough to brew daily and share with others. This is wild-foraged, certified Kopi Luwak Arabica at its finest, roasted fresh for you in the EU and sealed for maximum freshness.",
    tasting: "Each cup reveals new layers: opening with bright chocolate and caramel, developing into complex earthy and nutty notes, and finishing with a remarkably clean and sweet aftertaste. The large format lets you explore the bean's full potential.",
    brewing: "With 250g you can perfect your technique. We recommend starting at a 1:15 coffee-to-water ratio and adjusting to taste. Store in the sealed bag with the degassing valve — consume within 30 days for peak freshness.",
  },
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", slug],
  });

  const { data: allProducts } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-lg animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 bg-muted rounded w-3/4 animate-pulse" />
            <div className="h-10 bg-muted rounded w-1/4 animate-pulse" />
            <div className="h-20 bg-muted rounded animate-pulse" />
            <div className="h-12 bg-muted rounded w-1/2 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-secondary hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const price = parseFloat(product.price);
  const imageUrl = product.images?.[0]?.src || "";
  const imageAlt = product.images?.[0]?.alt || product.name;
  const details = PRODUCT_DESCRIPTIONS[product.slug] || PRODUCT_DESCRIPTIONS["50-grams-wild-kopi-luwak-coffee-beans"];
  const relatedProducts = allProducts?.filter((p) => p.id !== product.id) || [];

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price,
      image: imageUrl,
      weight: product.weight || "",
    }, quantity);
    setQuantity(1);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><ChevronRight size={14} /></li>
          <li><Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link></li>
          <li><ChevronRight size={14} /></li>
          <li className="text-foreground font-medium truncate">{product.name}</li>
        </ol>
      </nav>

      {/* Product main */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                {product.badge}
              </span>
            )}
            <div className="aspect-square rounded-lg overflow-hidden bg-muted/30 border border-border">
              <img
                src={imageUrl}
                alt={imageAlt}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3" data-testid="text-product-title">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-foreground mb-6" data-testid="text-product-price">
              € {price.toFixed(2)}
            </p>

            {/* Short description */}
            <div className="space-y-2 mb-6">
              {["Wild foraged from free-roaming civets", "No cages or forced feeding", "Limited seasonal lots", "Roasted fresh to order in EU"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-accent">In Stock</span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-muted transition-colors"
                  data-testid="button-qty-minus"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 text-sm font-semibold min-w-[3rem] text-center" data-testid="text-quantity">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="p-2.5 hover:bg-muted transition-colors"
                  data-testid="button-qty-plus"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold py-3 px-6 rounded-md transition-colors"
                data-testid="button-add-to-cart"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>

            {/* Shipping */}
            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-serif font-semibold text-sm mb-3">Shipping</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>🇳🇱 Netherlands</span><span className="font-medium text-accent">Free</span></div>
                <div className="flex justify-between"><span>🇧🇪🇱🇺🇩🇪🇫🇷 BeNeLux + DE + FR</span><span>€ 15.00</span></div>
                <div className="flex justify-between"><span>🇪🇺 Europe</span><span>€ 19.90</span></div>
                <div className="flex justify-between"><span>🌍 Worldwide</span><span>€ 35.00</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product description */}
      <section className="bg-card border-y border-border py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">About This Coffee</h2>
            <p className="text-muted-foreground leading-relaxed">{details.description}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">Tasting Notes</h2>
            <p className="text-muted-foreground leading-relaxed">{details.tasting}</p>
          </div>
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">Brewing Tips</h2>
            <p className="text-muted-foreground leading-relaxed">{details.brewing}</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/brew-guide" className="text-sm text-secondary hover:underline font-medium">Learn how to brew →</Link>
            <Link href="/about" className="text-sm text-secondary hover:underline font-medium">View our certification →</Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
