import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-80 bg-card border border-border rounded-xl shadow-xl animate-fade-in" data-testid="chat-panel">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-serif font-semibold text-sm">Ask About Our Coffee</h3>
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-muted rounded-full transition-colors" data-testid="button-close-chat">
              <X size={16} />
            </button>
          </div>
          <div className="p-5 text-sm text-muted-foreground leading-relaxed">
            <p className="mb-3">
              Our AI coffee assistant is coming soon.
            </p>
            <p>
              In the meantime, contact us at{" "}
              <a href="mailto:info@wildgayoluwak.com" className="text-secondary font-medium hover:underline">
                info@wildgayoluwak.com
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 bg-secondary hover:bg-gold-dark text-secondary-foreground p-3.5 rounded-full shadow-lg transition-all hover:scale-105"
        aria-label="Ask about our coffee"
        data-testid="button-chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
