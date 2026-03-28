import { Link } from "wouter";
import { Coffee, Thermometer, Timer, Scale } from "lucide-react";

const BREW_METHODS = [
  {
    name: "Pour-Over (V60 / Chemex)",
    grind: "Medium-fine (like sea salt)",
    ratio: "7g per 100ml water",
    temp: "92–96°C",
    time: "3–4 minutes",
    steps: [
      "Rinse the paper filter with hot water to remove paper taste and preheat the vessel.",
      "Add freshly ground coffee to the filter.",
      "Pour a small amount of water (about 2x the coffee weight) and let it bloom for 30 seconds.",
      "Pour the remaining water in slow, steady circles from the center outward.",
      "Let it drain completely — aim for a total brew time of 3–4 minutes.",
      "Enjoy immediately for the best flavor expression.",
    ],
  },
  {
    name: "French Press",
    grind: "Coarse (like raw sugar)",
    ratio: "8g per 100ml water",
    temp: "93–96°C",
    time: "4 minutes",
    steps: [
      "Add coarsely ground coffee to the French press.",
      "Pour hot water over the grounds, saturating them evenly.",
      "Place the lid on (without pressing) and let it steep for exactly 4 minutes.",
      "Press the plunger slowly and steadily to the bottom.",
      "Pour immediately to stop the extraction.",
      "The fuller body of French press beautifully showcases the velvety texture of Wild Kopi Luwak.",
    ],
  },
  {
    name: "AeroPress",
    grind: "Medium (between pour-over and French press)",
    ratio: "7g per 100ml water",
    temp: "92°C",
    time: "2 minutes",
    steps: [
      "Place a filter in the cap and rinse with hot water.",
      "Add coffee grounds to the AeroPress chamber (inverted method recommended).",
      "Pour hot water and stir gently for 10 seconds.",
      "Steep for 1.5 minutes.",
      "Flip, press gently for 30 seconds.",
      "Dilute with hot water to taste if desired.",
    ],
  },
  {
    name: "Espresso",
    grind: "Fine (like powdered sugar)",
    ratio: "18g for a double shot (36ml output)",
    temp: "93°C",
    time: "25–30 seconds extraction",
    steps: [
      "Grind 18g of beans very fine — slightly coarser than typical espresso for better flavor extraction.",
      "Distribute evenly in the portafilter and tamp firmly.",
      "Extract for 25–30 seconds, aiming for a 36ml double shot.",
      "The crema should be golden-brown with a tiger stripe pattern.",
      "Wild Kopi Luwak produces an exceptionally smooth espresso with a sweet, chocolatey crema.",
    ],
  },
];

export default function BrewGuide() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-brew-h1">
            Wild Kopi Luwak Brew Guide
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            How to brew the perfect cup of the world's rarest coffee. Grind settings, water temperature, and step-by-step instructions for every method.
          </p>
        </div>
      </section>

      {/* General tips */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold mb-8">Essential Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Coffee, title: "Grind Fresh", desc: "Always grind your beans immediately before brewing. Pre-ground coffee loses its aromatic complexity within minutes." },
              { icon: Thermometer, title: "Water Temperature", desc: "Use water at 92–96°C. Never use boiling water — it scorches the delicate flavor compounds." },
              { icon: Scale, title: "Measure Precisely", desc: "Use a kitchen scale for consistent results. The recommended ratio is 7g of coffee per 100ml of water." },
              { icon: Timer, title: "Timing Matters", desc: "Under-extraction produces sour coffee; over-extraction produces bitterness. Follow the timing for each method." },
            ].map((tip, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <tip.icon size={24} className="text-secondary mb-3" />
                <h3 className="font-serif font-bold text-base mb-1.5">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brew methods */}
      <section className="bg-card border-y border-border py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {BREW_METHODS.map((method, i) => (
            <div key={i}>
              <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">{method.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Grind", value: method.grind },
                  { label: "Ratio", value: method.ratio },
                  { label: "Temperature", value: method.temp },
                  { label: "Time", value: method.time },
                ].map((param, j) => (
                  <div key={j} className="bg-background rounded-md p-3 text-center border border-border">
                    <p className="text-xs text-muted-foreground mb-1">{param.label}</p>
                    <p className="text-sm font-semibold">{param.value}</p>
                  </div>
                ))}
              </div>
              <ol className="space-y-3">
                {method.steps.map((step, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary font-semibold text-xs flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Ready to Brew?</h2>
          <p className="text-muted-foreground mb-8">
            Get your Wild Kopi Luwak and start your brewing journey.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
