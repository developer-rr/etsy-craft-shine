import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[1000] bg-card border-b border-border shadow-md animate-in slide-in-from-top-2">
      <div className="container max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <p className="text-sm font-medium hidden sm:block">Supercharge your Etsy listings with AI — Free</p>
        <div className="flex items-center gap-2 flex-1 sm:flex-none justify-center sm:justify-end">
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground text-xs h-8">
            🚀 EtsyCraft AI
          </Button>
          <Button size="sm" variant="outline" className="border-secondary text-secondary text-xs h-8">
            📱 Social Engine
          </Button>
          <button onClick={() => setDismissed(true)} className="ml-2 p-1 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
