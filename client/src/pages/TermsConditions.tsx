export default function TermsConditions() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            Please read these terms carefully before using our website or placing an order.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-stone dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 29, 2026
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">1. General</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These General Terms and Conditions apply to all offers, orders, and agreements of Wild Gayo Luwak,
            operated by COFSPICO, registered at Rotiusstraat 7, 1624 GA Hoorn, Netherlands. By placing an order
            or using this website, you agree to be bound by these terms. Dutch law applies to all transactions.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">2. Products &amp; Pricing</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>All prices are listed in Euros and include VAT where applicable.</li>
            <li>We reserve the right to change prices at any time. Orders placed before a price change will be honored at the original price.</li>
            <li>Product images are representative. Natural products may vary slightly in appearance.</li>
            <li>Wild Kopi Luwak is a seasonal product with limited availability. We reserve the right to limit quantities per order.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">3. Orders &amp; Payment</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>An order is confirmed once you receive an order confirmation email from us.</li>
            <li>Payment is processed securely through our payment provider at checkout.</li>
            <li>We accept major credit cards, iDEAL, Bancontact, and other payment methods as displayed at checkout.</li>
            <li>Orders are freshly roasted and typically shipped within 2-5 business days.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">4. Shipping</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Netherlands:</strong> Free express shipping on all orders.</li>
            <li><strong>Belgium, Luxembourg, Germany, France:</strong> Flat rate of EUR 15.00.</li>
            <li><strong>Rest of Europe:</strong> EUR 19.90.</li>
            <li><strong>Worldwide:</strong> EUR 35.00.</li>
            <li>Delivery times vary by destination. We ship from Hoorn, Netherlands (EU).</li>
            <li>Risk of loss transfers to you upon delivery to the carrier.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">5. Right of Withdrawal (EU Consumers)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Under the EU Consumer Rights Directive, you have the right to withdraw from your purchase within
            14 days of receiving your order, without giving any reason. To exercise this right, contact us at{" "}
            <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a>{" "}
            with your order number. Please note that the right of withdrawal does not apply to sealed goods
            that have been opened after delivery (food safety regulation).
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">6. Product Quality &amp; Certification</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            All Wild Gayo Luwak coffee is 100% certified wild-foraged Kopi Luwak from the Gayo Highlands,
            Sumatra, Indonesia. Each batch is independently verified by third-party auditors. Our products
            comply with all applicable EU food safety regulations. We roast in the EU under Dutch food safety standards.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To the maximum extent permitted by law, Wild Gayo Luwak shall not be liable for any indirect,
            incidental, or consequential damages arising from the use of our products or website. Our total
            liability shall not exceed the amount paid for the specific product giving rise to the claim.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">8. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            All content on this website, including text, images, logos, and design, is the property of
            Wild Gayo Luwak / COFSPICO and is protected by copyright and trademark law. You may not
            reproduce, distribute, or use any content without our prior written consent.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">9. Governing Law &amp; Disputes</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These terms are governed by the laws of the Netherlands. Any disputes shall be submitted to
            the competent court in the Netherlands. For EU consumers, the European Online Dispute Resolution
            platform is available at{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              ec.europa.eu/consumers/odr
            </a>.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">10. Contact</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For questions about these terms, contact us at{" "}
            <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a>{" "}
            or by mail at: COFSPICO / Wild Gayo Luwak, Rotiusstraat 7, 1624 GA Hoorn, Netherlands.
          </p>
        </div>
      </section>
    </div>
  );
}
