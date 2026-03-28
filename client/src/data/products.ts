import type { Product } from "@shared/schema";

export const PRODUCTS: Product[] = [
  {
    id: 2018,
    name: "50 Grams Wild Kopi Luwak Arabica Coffee Beans",
    slug: "50-grams-wild-kopi-luwak-coffee-beans",
    sku: "0001",
    price: "49",
    regular_price: "49",
    weight: "50",
    stock_status: "instock",
    short_description: `<p>Wild Kopi Luwak is naturally limited and cannot be produced at scale.</p>
<ul><li>✅ Wild foraged from free-roaming civets</li><li>✅ No cages or forced feeding</li><li>✅ Limited seasonal lots</li><li>✅ Roasted fresh to order in EU</li></ul>`,
    description: "",
    images: [{ id: 1, src: "https://wildgayoluwak.com/wp-content/uploads/2021/01/wildgayoluwak-2022-package-b.jpg", alt: "50 grams wild gayo luwak product image" }],
    categories: [{ id: 18, name: "Wild Kopi Luwak Coffee Beans", slug: "wild-kopi-luwak" }],
    badge: "First Experience",
  },
  {
    id: 1840,
    name: "100 Grams Wild Kopi Luwak Arabica Coffee Beans",
    slug: "100-grams-wild-kopi-luwak-arabica-coffee-beans",
    sku: "0002",
    price: "95",
    regular_price: "95",
    weight: "100",
    stock_status: "instock",
    short_description: `<p>Wild Kopi Luwak is naturally limited and cannot be produced at scale.</p>
<ul><li>✅ Wild foraged from free-roaming civets</li><li>✅ No cages or forced feeding</li><li>✅ Limited seasonal lots</li><li>✅ Roasted fresh to order in EU</li></ul>`,
    description: "",
    images: [{ id: 2, src: "https://wildgayoluwak.com/wp-content/uploads/2021/01/100-grams.jpg", alt: "100 grams wild kopi luwak" }],
    categories: [{ id: 18, name: "Wild Kopi Luwak Coffee Beans", slug: "wild-kopi-luwak" }],
    badge: "Most Popular",
  },
  {
    id: 1841,
    name: "250 Grams Wild Kopi Luwak Arabica Coffee Beans",
    slug: "250-grams-wild-kopi-luwak-arabica-coffee-beans",
    sku: "0003",
    price: "219",
    regular_price: "219",
    weight: "250",
    stock_status: "instock",
    short_description: `<p>Wild Kopi Luwak is naturally limited and cannot be produced at scale.</p>
<ul><li>✅ Wild foraged from free-roaming civets</li><li>✅ No cages or forced feeding</li><li>✅ Limited seasonal lots</li><li>✅ Roasted fresh to order in EU</li></ul>`,
    description: "",
    images: [{ id: 3, src: "https://wildgayoluwak.com/wp-content/uploads/2021/01/250-grams-wildgayoluwak-2022-package.jpg", alt: "250 grams wildgayoluwak 2022 package" }],
    categories: [{ id: 18, name: "Wild Kopi Luwak Coffee Beans", slug: "wild-kopi-luwak" }],
    badge: "Best Value",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
