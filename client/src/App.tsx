import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatButton } from "./components/ChatButton";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import BrewGuide from "./pages/BrewGuide";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/not-found";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product/:slug" component={ProductDetail} />
      <Route path="/faq" component={FAQ} />
      <Route path="/about" component={About} />
      <Route path="/brew-guide" component={BrewGuide} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Router hook={useHashLocation}>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <AppRouter />
                </main>
                <Footer />
                <ChatButton />
              </div>
            </Router>
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
