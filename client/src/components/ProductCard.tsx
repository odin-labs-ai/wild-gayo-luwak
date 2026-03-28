import { Link } from "wouter";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const price = parseFloat(product.price);
  const imageUrl = product.images?.[0]?.src || "";
  const imageAlt = product.images?.[0]?.alt || product.name;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price,
      image: imageUrl,
      weight: product.weight || "",
    });
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300" data-testid={`card-product-${product.id}`}>
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full tracking-wide" data-testid={`badge-${product.id}`}>
          {product.badge}
        </span>
      )}

      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square overflow-hidden bg-muted/30">
          <img
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-5">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-serif font-semibold text-lg leading-snug text-foreground group-hover:text-secondary transition-colors" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <p className="text-xl font-bold text-foreground" data-testid={`text-price-${product.id}`}>
            € {price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-gold-dark text-secondary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            data-testid={`button-add-cart-${product.id}`}
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border animate-pulse">
      <div className="aspect-square bg-muted" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-muted rounded w-3/4" />
        <div className="flex justify-between">
          <div className="h-6 bg-muted rounded w-20" />
          <div className="h-9 bg-muted rounded w-28" />
        </div>
      </div>
    </div>
  );
}
