import { useQuery } from "@tanstack/react-query";
import { ProductCard, ProductCardSkeleton } from "../components/ProductCard";
import { Truck, HeadphonesIcon, Package } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Shop() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-shop-h1">
            Wild Kopi Luwak Coffee
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            Shop premium wild-foraged Kopi Luwak Arabica coffee beans. Available in 50g, 100g, and 250g packages. Roasted fresh to order.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {[
              { icon: Truck, text: "Free NL shipping" },
              { icon: HeadphonesIcon, text: "7-day support" },
              { icon: Package, text: "Roasted to order" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <item.icon size={16} className="text-secondary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-16 md:py-24" data-testid="shop-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {isLoading ? (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            ) : (
              products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
