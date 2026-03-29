import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

const WC_BASE = process.env.WC_BASE || "https://wildgayoluwak.com/wp-json/wc/v3";
const WC_KEY = process.env.WC_KEY || "";
const WC_SECRET = process.env.WC_SECRET || "";

// Fallback products if WooCommerce API is slow/unavailable
const FALLBACK_PRODUCTS = [
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

const BADGE_MAP: Record<number, string> = {
  2018: "First Experience",
  1840: "Most Popular",
  1841: "Best Value",
};

async function fetchWC(endpoint: string) {
  const url = `${WC_BASE}/${endpoint}`;
  const auth = Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString("base64");
  
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`WC API ${res.status}`);
    return await res.json();
  } catch (e) {
    clearTimeout(timeout);
    throw e;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // GET /api/products — list published products
  app.get("/api/products", async (_req, res) => {
    try {
      const data = await fetchWC("products?status=publish&per_page=10");
      const products = (data as any[])
        .filter((p: any) => p.status === "publish" && p.catalog_visibility === "visible")
        .map((p: any) => ({
          ...p,
          badge: BADGE_MAP[p.id] || undefined,
        }));
      res.json(products);
    } catch (e) {
      // Return fallback products
      res.json(FALLBACK_PRODUCTS);
    }
  });

  // GET /api/products/:slug — single product by slug
  app.get("/api/products/:slug", async (req, res) => {
    try {
      const data = await fetchWC(`products?slug=${req.params.slug}`);
      if (Array.isArray(data) && data.length > 0) {
        res.json({ ...data[0], badge: BADGE_MAP[data[0].id] || undefined });
      } else {
        // Try fallback
        const fb = FALLBACK_PRODUCTS.find(p => p.slug === req.params.slug);
        if (fb) res.json(fb);
        else res.status(404).json({ error: "Product not found" });
      }
    } catch (e) {
      const fb = FALLBACK_PRODUCTS.find(p => p.slug === req.params.slug);
      if (fb) res.json(fb);
      else res.status(404).json({ error: "Product not found" });
    }
  });

  // POST /api/contact — save contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      const msg = storage.createContactMessage(parsed);
      res.json({ success: true, id: msg.id });
    } catch (e: any) {
      res.status(400).json({ error: e.message || "Invalid data" });
    }
  });

  return httpServer;
}
