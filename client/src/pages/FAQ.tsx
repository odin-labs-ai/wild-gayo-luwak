import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_SECTIONS = [
  {
    title: "Product & Authenticity",
    questions: [
      {
        q: "What is Wild Gayo Luwak coffee?",
        a: "Wild Gayo Luwak is an exceptionally rare Arabica coffee sourced from the Gayo Highlands of North Sumatra, Indonesia. It is produced through a unique natural process: wild Asian Palm Civets (Paradoxurus hermaphroditus) forage and eat the ripest coffee cherries in the forest. The beans undergo a natural fermentation during digestion, which breaks down proteins and reduces bitterness, resulting in a remarkably smooth, complex cup with notes of dark chocolate, caramel, and a clean earthy finish.",
      },
      {
        q: "Is your Kopi Luwak really wild and not farmed?",
        a: "Yes, 100%. Our Kopi Luwak is exclusively wild-foraged from free-roaming civets in the pristine forests of the Gayo Highlands. We have a zero-tolerance policy for caged or farmed luwak production. Our farmers collect naturally deposited droppings from the forest floor of their coffee plantations. Every batch is independently certified by third-party auditors to verify its wild origin.",
      },
      {
        q: "How can I verify that my Kopi Luwak is authentic?",
        a: "Every package of Wild Gayo Luwak comes with full traceability to our estate in the Gayo Highlands. We maintain third-party certification through independent auditors who verify the wild-foraged origin of our beans. You can view our certification details on our certificate page. If you have any questions about a specific batch, contact us with your order number.",
      },
      {
        q: "Why is most Kopi Luwak on the market considered unethical?",
        a: "Unfortunately, the high demand for Kopi Luwak has led to widespread exploitation. Many producers cage civets in small enclosures and force-feed them coffee cherries — causing extreme stress and suffering. Farmed luwak coffee is also inferior in quality because stressed animals produce beans with inconsistent fermentation. Wild Gayo Luwak exists specifically to offer a genuinely ethical, wild-foraged alternative that respects both the animal and the craft.",
      },
      {
        q: 'I am looking for the coffee from the movie "The Bucket List" starring Jack Nicholson and Morgan Freeman',
        a: 'Yes! Kopi Luwak is the famous "cat poop coffee" featured in The Bucket List. In the movie, Jack Nicholson\'s character enjoys it as the world\'s most expensive coffee. Wild Gayo Luwak is the genuine article — 100% wild-foraged Kopi Luwak from Sumatra, ethically sourced and freshly roasted to order. Unlike most Kopi Luwak on the market, ours is certified wild and never from caged animals.',
      },
    ],
  },
  {
    title: "Ethics & Animal Welfare",
    questions: [
      {
        q: "Are the civets harmed or disturbed during collection?",
        a: "Absolutely not. The civets roam freely and naturally in the forests surrounding our coffee plantations. Our farmers simply collect the droppings that the civets leave behind on the forest floor. The civets are never captured, caged, handled, or disturbed in any way. Their natural foraging behavior is what makes Wild Kopi Luwak so special — they instinctively select only the ripest, highest-quality cherries.",
      },
      {
        q: "Do you support animal welfare initiatives?",
        a: "Yes. We actively partner with organizations including UTZ (now part of Rainforest Alliance) and support the principles of World Animal Protection. We believe that the only ethical way to produce Kopi Luwak is through 100% wild foraging. Our practices are regularly audited, and we advocate for industry-wide standards against caged civet production.",
      },
    ],
  },
  {
    title: "Processing, Safety & Quality",
    questions: [
      {
        q: "Is Kopi Luwak safe to drink?",
        a: "Yes, completely. After collection, our beans go through a thorough multi-step cleaning and processing procedure: washing, sun-drying, hulling, and careful sorting. The roasting process (at temperatures above 200°C) further sterilizes the beans. The result is a clean, safe, premium coffee that meets all EU food safety standards. We roast in the EU under strict European food safety regulations.",
      },
      {
        q: "Does digestion affect the taste of the coffee?",
        a: "Yes — that's what makes it extraordinary. During the civet's digestive process, natural enzymes break down proteins in the coffee beans. This reduces bitterness and astringency while enhancing complexity and smoothness. Research has shown that this process creates a unique amino acid and volatile compound profile that cannot be replicated artificially. The result is an exceptionally smooth, full-bodied coffee with low acidity.",
      },
      {
        q: "What does Wild Kopi Luwak coffee by Wild Gayo Luwak taste like?",
        a: "Our Wild Kopi Luwak has a remarkably smooth and velvety body with exceptionally low bitterness and acidity. Expect complex tasting notes of dark chocolate, toasted almond, caramel sweetness, and subtle tropical fruit, followed by a clean, lingering earthy finish. The Gayo Highland terroir — volcanic soil at 1,100–1,500 meters altitude — adds distinctive character that sets it apart from Kopi Luwak from other regions.",
      },
    ],
  },
  {
    title: "Ordering, Storage & Brewing",
    questions: [
      {
        q: "Why is Wild Gayo Luwak so rare?",
        a: "Wild Kopi Luwak is naturally limited because it depends entirely on wild civets choosing to eat coffee cherries of their own free will. The civets are selective eaters who only forage the ripest cherries, and they roam freely across a vast highland area. Our annual yield is a tiny fraction of what a conventional coffee farm produces — making each batch genuinely rare and precious.",
      },
      {
        q: "Why is Wild Gayo Luwak more expensive than regular coffee?",
        a: "The price reflects the extraordinary rarity and labor involved. Wild-foraged beans must be individually collected from forest floors, meticulously cleaned, and processed in small batches. The yield per hectare is minuscule compared to conventional coffee. Add to that the costs of third-party certification, ethical sourcing practices, premium packaging, and fresh roasting to order — and you have a product that justifies its premium price through genuine scarcity and quality.",
      },
      {
        q: "Where do you ship from?",
        a: "We ship from our facility in Hoorn, Netherlands (EU). Your beans are freshly roasted to order and shipped in premium packaging with a one-way degassing valve for maximum freshness. Netherlands orders enjoy free shipping. We ship to Belgium, Luxembourg, Germany, and France for €15, across Europe for €19.90, and worldwide for €35.",
      },
      {
        q: "How should I store Wild Gayo Luwak coffee?",
        a: "Keep your beans in the original bag (it has a zip-lock seal and one-way degassing valve) in a cool, dry, dark place. Avoid direct sunlight, moisture, and strong odors. Do not refrigerate or freeze. For the best flavor experience, consume within 30 days of the roast date. Only grind what you need immediately before brewing.",
      },
      {
        q: "What is the best way to brew Wild Gayo Luwak?",
        a: "We recommend pour-over (V60 or Chemex) for the clearest expression of flavor, or French press for a fuller body. Use freshly ground beans (medium-fine for pour-over, coarse for French press), water at 92–96°C, and a ratio of about 7g per 100ml. Avoid boiling water — it will scorch the delicate flavor compounds that make this coffee special. See our full brew guide for detailed instructions.",
      },
      {
        q: "Is each batch limited?",
        a: "Yes. Because our Kopi Luwak is genuinely wild-foraged, production depends on natural seasonal cycles. Peak collection periods are March to May and September to January. Each seasonal lot is unique, and when a batch sells out, it may be weeks or months before the next lot is available. We recommend ordering when in stock.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-h1">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            Everything you need to know about Wild Gayo Luwak coffee — authenticity, ethics, brewing, and ordering.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {FAQ_SECTIONS.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="font-serif text-xl md:text-2xl font-bold mb-6">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {section.questions.map((faq, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`s${sIdx}-q${qIdx}`}
                    className="bg-card border border-border rounded-lg px-5"
                  >
                    <AccordionTrigger className="text-left font-medium text-sm py-4 hover:no-underline" data-testid={`faq-trigger-${sIdx}-${qIdx}`}>
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
