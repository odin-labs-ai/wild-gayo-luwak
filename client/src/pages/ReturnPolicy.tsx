export default function ReturnPolicy() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Return &amp; Refund Policy
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            Your satisfaction is important to us. Here's how returns and refunds work.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-stone dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 29, 2026
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">Right of Withdrawal (EU Consumers)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Under the EU Consumer Rights Directive, you have the right to withdraw from your purchase within
            14 calendar days of receiving your order, without giving any reason. The withdrawal period expires
            14 days after the day on which you acquire physical possession of the goods.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">Exceptions</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The right of withdrawal does not apply to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Sealed goods which have been opened after delivery, for food safety and hygiene reasons.</li>
            <li>Products that have been used, altered, or damaged by the customer.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Since Wild Kopi Luwak is a food product, once the package seal has been broken, we cannot accept
            returns for food safety reasons. Unopened, sealed packages may be returned within the 14-day withdrawal period.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">How to Initiate a Return</h2>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-2 mb-6">
            <li>
              Contact us at{" "}
              <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a>{" "}
              within 14 days of receiving your order, stating your order number and reason for return.
            </li>
            <li>We will confirm your return request and provide return shipping instructions.</li>
            <li>Ship the unopened product back to us in its original packaging.</li>
            <li>Return shipping costs are the responsibility of the customer, unless the product was defective or incorrect.</li>
          </ol>

          <h2 className="font-serif text-xl font-bold mb-4">Refunds</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Once we receive and inspect the returned product, we will process your refund within 14 days.</li>
            <li>Refunds are issued to the original payment method.</li>
            <li>Original shipping costs are refunded only if the return is due to our error (wrong product, defective item).</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">Damaged or Defective Products</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If your order arrives damaged, defective, or incorrect, please contact us within 48 hours of delivery
            at <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a> with
            photos of the issue and your order number. We will arrange a replacement or full refund at no additional cost.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">Lost Shipments</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If your order has not arrived within the expected delivery timeframe, contact us and we will investigate
            with the carrier. If the shipment is confirmed lost, we will send a replacement or issue a full refund.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For all return and refund inquiries, contact us at{" "}
            <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a>.
            We aim to respond within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
}
