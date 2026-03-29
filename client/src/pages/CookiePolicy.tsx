export default function CookiePolicy() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Cookie Policy
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            How we use cookies and similar technologies on our website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-stone dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 29, 2026
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Cookies are small text files stored on your device when you visit a website. They help the website
            remember your preferences and improve your browsing experience.
          </p>

          <h2 className="font-serif text-xl font-bold mb-4">Cookies We Use</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wild Gayo Luwak uses only <strong>essential cookies</strong> that are strictly necessary for
            the website to function. We do not use advertising, marketing, or third-party tracking cookies.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-muted-foreground border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted/30">
                  <th className="text-left px-4 py-3 font-semibold">Cookie</th>
                  <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                  <th className="text-left px-4 py-3 font-semibold">Duration</th>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3">Theme preference</td>
                  <td className="px-4 py-3">Remembers your light/dark mode choice</td>
                  <td className="px-4 py-3">Session</td>
                  <td className="px-4 py-3">Essential</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3">Cart state</td>
                  <td className="px-4 py-3">Preserves items in your shopping cart</td>
                  <td className="px-4 py-3">Session</td>
                  <td className="px-4 py-3">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-xl font-bold mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our website loads the following external resources:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Google Fonts:</strong> Used for typography (Playfair Display and Inter). Google may set cookies or collect usage data as described in their privacy policy.</li>
            <li><strong>WooCommerce Checkout:</strong> When you proceed to checkout, you are redirected to our WooCommerce store which has its own cookie policy.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You can control and delete cookies through your browser settings. Please note that disabling
            essential cookies may affect the functionality of this website. Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>View what cookies are stored and delete them individually.</li>
            <li>Block third-party cookies.</li>
            <li>Block cookies from specific sites.</li>
            <li>Block all cookies.</li>
            <li>Delete all cookies when you close the browser.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have questions about our use of cookies, contact us at{" "}
            <a href="mailto:info@wildgayoluwak.com" className="text-secondary hover:underline">info@wildgayoluwak.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
