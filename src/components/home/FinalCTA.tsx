import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-surface-warm">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to grow your Etsy shop?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Join thousands of Etsy sellers who save hours every week with AI-powered listings and social media content.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            🚀 Get EtsyCraft AI — Free
          </Button>
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
            📱 Try Social Engine — Free
          </Button>
        </div>

        <div className="w-16 h-px bg-border mx-auto mb-12" />

        <div>
          <h3 className="font-semibold mb-2">Stay in the loop</h3>
          <p className="text-sm text-muted-foreground mb-4">Get product updates, tips, and Etsy seller resources.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">Subscribe</Button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
