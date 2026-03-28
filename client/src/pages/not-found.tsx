import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="font-serif text-4xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground text-lg mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
        data-testid="link-back-home"
      >
        Back to Home
      </Link>
    </div>
  );
}
