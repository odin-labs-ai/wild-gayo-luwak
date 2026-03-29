import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-stone dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 29, 2026
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">1. Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Wild Gayo Luwak is operated by COFSPICO, registered at Rotiusstraat 7, 1624 GA Hoorn, Netherlands.
            We are committed to protecting your privacy and handling your personal data transparently and in compliance
            with the General Data Protection Regulation (GDPR) and applicable Dutch privacy law.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For any privacy-related questions, contact us at{" "}
            <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a>.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">2. What Data We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following personal data:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Contact information:</strong> Name, email address, and message content when you use our contact form.</li>
            <li><strong>Order information:</strong> When you place an order via our WooCommerce checkout, your name, email, shipping address, and payment details are processed by our payment provider (not stored on this website).</li>
            <li><strong>Usage data:</strong> Anonymous analytics data such as pages visited, browser type, and device type. We do not use third-party tracking cookies.</li>
            <li><strong>Communication data:</strong> Any correspondence you send us via email or the contact form.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">3. How We Use Your Data</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To process and fulfill your orders.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We will never sell, rent, or share your personal data with third parties for marketing purposes.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">4. Legal Basis for Processing (GDPR)</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Consent:</strong> When you submit a contact form or subscribe to communications.</li>
            <li><strong>Contract:</strong> When processing is necessary to fulfill an order you have placed.</li>
            <li><strong>Legitimate interest:</strong> To improve our services and ensure website security.</li>
            <li><strong>Legal obligation:</strong> To comply with tax, accounting, and other regulatory requirements.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">5. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We retain your personal data only as long as necessary for the purposes outlined above, or as required by law.
            Contact form submissions are retained for up to 12 months. Order data is retained as required by Dutch tax law (7 years).
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Under the GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Access your personal data.</li>
            <li>Rectify inaccurate data.</li>
            <li>Request erasure of your data ("right to be forgotten").</li>
            <li>Restrict or object to processing.</li>
            <li>Data portability.</li>
            <li>Withdraw consent at any time.</li>
            <li>Lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a>.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">7. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This website uses only essential cookies required for the website to function (e.g., cart state, theme preference).
            We do not use advertising or third-party tracking cookies. See our{" "}
            <Link href="/cookie-policy" className="text-secondary hover:underline">Cookie Policy</Link> for details.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">8. Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Payment processing is handled by our payment provider through WooCommerce. We do not store credit card
            or payment details on our servers. Google Fonts are loaded for typography. No other third-party analytics
            or tracking services are used.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">9. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to protect your personal data, including
            SSL/TLS encryption for all data in transit and secure server infrastructure.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">10. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We may update this privacy policy from time to time. The "last updated" date at the top of this page
            indicates when the policy was last revised.
          </p>
        </div>
      </section>
    </div>
  );
}
