import { Link } from "wouter";
import { Shield, Leaf, MapPin, Mountain } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-h1">
            The Gayo Estate
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            In the heart of North Sumatra's coffee-growing highlands lies our estate — where wild civets roam free and rare coffee is born.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
            The Gayo Estate Villages and Farms
          </h2>
          <div className="prose prose-stone dark:prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed">
            <p>
              In the heart of North Sumatra's coffee-growing highlands lies Takengon, a well-known hub for local coffee trade. Wild Gayo Luwak sources its beans from the surrounding Bener Meriah and Berewang Dewal regions — remote villages where coffee farming has been a way of life for generations.
            </p>
            <p>
              At altitudes between 1,100 and 1,500 meters above sea level, our farmers cultivate Arabica coffee in the rich volcanic soils of the Gayo Highlands. The combination of altitude, tropical climate, and pristine forest creates an ideal environment for both exceptional Arabica coffee and the wild Asian Palm Civets that call these forests home.
            </p>
            <p>
              Our relationship with local farmers is built on Direct Trade principles. We work closely with each family to ensure fair compensation that significantly exceeds commodity market prices. This investment in the community ensures the long-term sustainability of wild-foraged Kopi Luwak and protects the forest ecosystems that support both the coffee plants and the civets.
            </p>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Wild-Foraged Only", desc: "100% wild-collected from free-roaming civets. No cages, no forced feeding — ever." },
              { icon: Shield, title: "Independently Certified", desc: "Every batch is verified by third-party auditors. Full traceability from forest to cup." },
              { icon: MapPin, title: "Direct Trade", desc: "We work directly with farming families in the Gayo Highlands, ensuring fair compensation." },
              { icon: Mountain, title: "Highland Terroir", desc: "1,100–1,500m altitude, volcanic soil, tropical climate — the ideal conditions for exceptional Arabica." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <item.icon size={32} className="mx-auto text-secondary mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Our Story</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Wild Gayo Luwak was founded in 2010 by a team passionate about bringing the world's rarest coffee to market the right way — ethically, sustainably, and with uncompromising quality. By 2015, we had established the Wild Gayo Luwak brand and begun shipping directly from the EU to coffee enthusiasts worldwide.
            </p>
            <p>
              From the beginning, we committed to a simple principle: genuine wild-foraged Kopi Luwak, certified by independent auditors, with full traceability to our partner farms in the Gayo Highlands. We partner with UTZ (now Rainforest Alliance) and support the principles of World Animal Protection.
            </p>
            <p>
              Today, Wild Gayo Luwak is recognized as one of the most trusted sources of authentic Wild Kopi Luwak in Europe. Our beans are freshly roasted to order in our EU facility and shipped in premium packaging designed to preserve every nuance of this extraordinary coffee.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/shop" className="inline-flex items-center bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-6 py-3 rounded-md text-sm transition-colors" data-testid="link-about-shop">
              Shop Our Collection
            </Link>
            <Link href="/faq" className="inline-flex items-center border border-border hover:bg-muted text-foreground font-semibold px-6 py-3 rounded-md text-sm transition-colors">
              Read Our FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
