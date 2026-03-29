import { Link } from "wouter";
import { Logo } from "./Logo";
import { SiInstagram, SiFacebook } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="h-10 w-auto text-primary-foreground mb-4" />
            <p className="text-sm opacity-70 leading-relaxed mt-3 max-w-xs">
              Premium wild-foraged Kopi Luwak Arabica coffee from the Gayo Highlands of Sumatra, Indonesia.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/wildgayoluwak/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/wildgayoluwak"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <SiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase mb-4 opacity-90">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "Our Story" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/brew-guide", label: "Brew Guide" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity" data-testid={`footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — About */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase mb-4 opacity-90">
              About
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "The Gayo Estate" },
                { href: "/about", label: "Certificate" },
                { href: "/about", label: "Our Process" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase mb-4 opacity-90">
              Contact
            </h3>
            <address className="not-italic text-sm opacity-70 space-y-1.5 leading-relaxed">
              <p className="font-medium opacity-90">COFSPICO / Wild Gayo Luwak</p>
              <p>Rotiusstraat 7</p>
              <p>1624 GA Hoorn, Netherlands</p>
              <p className="mt-3">
                <a href="mailto:info@wildgayoluwak.com" className="hover:opacity-100 transition-opacity">
                  info@wildgayoluwak.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Legal links + copyright */}
        <div className="mt-14 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-xs opacity-50">
              <Link href="/privacy-policy" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:opacity-80 transition-opacity">Terms &amp; Conditions</Link>
              <Link href="/return-policy" className="hover:opacity-80 transition-opacity">Return Policy</Link>
              <Link href="/cookie-policy" className="hover:opacity-80 transition-opacity">Cookie Policy</Link>
            </div>
            <p className="text-xs opacity-50">
              © 2015–{new Date().getFullYear()} Wild Gayo Luwak. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
