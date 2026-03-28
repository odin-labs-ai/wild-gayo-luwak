import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/brew-guide", label: "Brew Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <Logo className="h-10 md:h-12 w-auto text-foreground hover:opacity-80 transition-opacity" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                  location === link.href ? "text-secondary" : "text-foreground/80"
                }`}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-muted transition-colors"
              data-testid="link-cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center" data-testid="text-cart-count">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="px-4 py-6 space-y-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-base font-medium py-2 transition-colors ${
                  location === link.href ? "text-secondary" : "text-foreground/80"
                }`}
                data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
