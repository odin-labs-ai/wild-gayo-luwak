import { Link } from "wouter";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag size={48} className="mx-auto text-muted-foreground/30 mb-6" />
        <h1 className="font-serif text-2xl md:text-3xl font-bold mb-4" data-testid="text-cart-empty">
          Your Cart is Empty
        </h1>
        <p className="text-muted-foreground mb-8">
          Discover the world's rarest coffee and add something special to your cart.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
          data-testid="link-continue-shopping"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-2xl md:text-3xl font-bold mb-8" data-testid="text-cart-h1">
        Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
      </h1>

      <div className="space-y-4 mb-10">
        {items.map((item) => (
          <div
            key={item.productId}
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-4"
            data-testid={`cart-item-${item.productId}`}
          >
            {/* Image */}
            <Link href={`/product/${item.slug}`}>
              <img
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
              />
            </Link>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <Link href={`/product/${item.slug}`}>
                <h3 className="font-serif font-semibold text-sm sm:text-base truncate hover:text-secondary transition-colors">
                  {item.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mt-0.5">€ {item.price.toFixed(2)}</p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center border border-border rounded-md">
              <button
                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                className="p-1.5 hover:bg-muted transition-colors"
                data-testid={`button-qty-minus-${item.productId}`}
              >
                <Minus size={14} />
              </button>
              <span className="px-3 text-sm font-semibold" data-testid={`text-qty-${item.productId}`}>
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                className="p-1.5 hover:bg-muted transition-colors"
                data-testid={`button-qty-plus-${item.productId}`}
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Line total */}
            <p className="text-sm font-bold w-20 text-right" data-testid={`text-line-total-${item.productId}`}>
              € {(item.price * item.quantity).toFixed(2)}
            </p>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.productId)}
              className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
              aria-label="Remove item"
              data-testid={`button-remove-${item.productId}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Cart totals */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-lg font-bold" data-testid="text-subtotal">€ {subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-muted-foreground mb-6">
          Shipping calculated at checkout. Free shipping within the Netherlands.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/shop"
            className="flex-1 inline-flex items-center justify-center border border-border hover:bg-muted text-foreground font-semibold px-6 py-3 rounded-md text-sm transition-colors"
          >
            Continue Shopping
          </Link>
          <a
            href="https://wildgayoluwak.com/checkout/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-6 py-3 rounded-md text-sm transition-colors"
            data-testid="link-checkout"
          >
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
