import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { apiRequest } from "../lib/queryClient";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", orderNumber: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await apiRequest("POST", "/api/contact", form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", orderNumber: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-h1">
            Contact Wild Gayo Luwak
          </h1>
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            Can we help you? We're here for order inquiries, shipping questions, or general information.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-xl font-bold mb-6">Send Us a Message</h2>
              {status === "sent" ? (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center" data-testid="contact-success">
                  <p className="font-semibold text-accent mb-2">Message sent!</p>
                  <p className="text-sm text-muted-foreground">We aim to respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Subject *</label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        data-testid="input-subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="orderNumber" className="block text-sm font-medium mb-1.5">Order Number</label>
                      <input
                        id="orderNumber"
                        type="text"
                        value={form.orderNumber}
                        onChange={(e) => setForm({ ...form, orderNumber: e.target.value })}
                        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        data-testid="input-order-number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-vertical"
                      data-testid="input-message"
                    />
                  </div>
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-destructive">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3 rounded-md text-sm transition-colors disabled:opacity-50"
                    data-testid="button-submit-contact"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-base mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">COFSPICO / Wild Gayo Luwak</p>
                      <p>Rotiusstraat 7</p>
                      <p>1624 GA Hoorn, Netherlands</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                    <a href="mailto:info@wildgayoluwak.com" className="text-sm text-secondary hover:underline">
                      info@wildgayoluwak.com
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
