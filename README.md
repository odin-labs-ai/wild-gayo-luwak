# Wild Gayo Luwak — Premium Wild Kopi Luwak Coffee

E-commerce site for [Wild Gayo Luwak](https://wildgayoluwak.com) — 100% wild-foraged Kopi Luwak Arabica from the Gayo Highlands, Sumatra.

## Stack

- **Frontend:** React + Vite + Tailwind CSS + shadcn/ui
- **Backend:** Express.js + SQLite (Drizzle ORM)
- **Data:** WooCommerce REST API (live product data with offline fallback)
- **Features:** Dark mode, responsive, cart, contact form, AI chat button stub

## Quick Start

### Prerequisites

- Node.js 20+
- npm

### Development

```bash
# Install dependencies
npm install

# Copy env and add your WooCommerce API keys
cp .env.example .env
# Edit .env with your WC_KEY and WC_SECRET

# Start dev server (frontend + backend on same port)
npm run dev
```

The site runs at `http://localhost:5000`.

### Production (Node)

```bash
npm run build
NODE_ENV=production node dist/index.cjs
```

### Production (Docker)

```bash
# Copy and configure env
cp .env.example .env
# Edit .env with your credentials

# Build and run
docker compose up -d

# Or build manually
docker build -t wild-gayo-luwak .
docker run -p 5000:5000 --env-file .env wild-gayo-luwak
```

The site serves at `http://localhost:5000`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `WC_BASE` | No | WooCommerce API base URL (defaults to wildgayoluwak.com) |
| `WC_KEY` | Yes | WooCommerce consumer key |
| `WC_SECRET` | Yes | WooCommerce consumer secret |
| `PORT` | No | Server port (default: 5000) |

> **Note:** If the WooCommerce API is unreachable, the site automatically falls back to built-in product data so it never shows an empty store.

## Pages

| Route | Page |
|-------|------|
| `/#/` | Home — hero, products, origin details, certifications |
| `/#/shop` | Shop — all products grid |
| `/#/product/:slug` | Product detail — image, pricing, shipping, tasting notes |
| `/#/about` | Our Story — The Gayo Estate, farming, ethics |
| `/#/brew-guide` | Brew Guide — preparation methods |
| `/#/faq` | FAQ — product, ethics, shipping, ordering |
| `/#/contact` | Contact — form + business details |
| `/#/cart` | Cart — line items, quantities, checkout |

## Deployment to Your Server

### Option A: Reverse Proxy (recommended)

1. Build and run on port 5000
2. Configure Nginx/Caddy to proxy `wildgayoluwak.com` → `localhost:5000`
3. Set up SSL with Let's Encrypt

**Nginx example:**

```nginx
server {
    listen 443 ssl http2;
    server_name wildgayoluwak.com www.wildgayoluwak.com;

    ssl_certificate /etc/letsencrypt/live/wildgayoluwak.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/wildgayoluwak.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name wildgayoluwak.com www.wildgayoluwak.com;
    return 301 https://$server_name$request_uri;
}
```

### Option B: Docker Compose with Caddy

```yaml
# docker-compose.prod.yml
version: "3.8"
services:
  web:
    build: .
    env_file: .env
    restart: unless-stopped

  caddy:
    image: caddy:2-alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy-data:/data
    restart: unless-stopped

volumes:
  caddy-data:
```

```
# Caddyfile
wildgayoluwak.com {
    reverse_proxy web:5000
}
```

## SEO Migration Checklist

When switching from WordPress to this site:

- [ ] Set up 301 redirects from old WordPress URLs to new hash routes
- [ ] Submit updated sitemap to Google Search Console
- [ ] Keep `wildgayoluwak.com` domain — do not change it
- [ ] Verify structured data (JSON-LD) is present
- [ ] Test with Google's Mobile-Friendly Test
- [ ] Monitor Search Console for crawl errors after switch

## Team

- **COFSPICO / Wild Gayo Luwak**
- Rotiusstraat 7, 1624 GA Hoorn, Netherlands
- info@wildgayoluwak.com
