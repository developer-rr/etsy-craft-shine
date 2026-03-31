import { useState } from "react";
import { Button } from "@/components/ui/button";

const items = [
  { status: "live", emoji: "✅", title: "EtsyCraft AI", description: "SEO listing generator for Etsy — titles, descriptions, 13 tags." },
  { status: "live", emoji: "✅", title: "Social Engine", description: "Social media content generator with direct publishing to Instagram & Pinterest." },
  { status: "coming", emoji: "🔜", title: "Profit Lens", description: "Etsy fee calculator, profit margins, and pricing optimizer." },
  { status: "coming", emoji: "🔜", title: "Search Radar", description: "Etsy keyword research and competitor analysis dashboard." },
];

export default function Roadmap() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The EtsyCraft ecosystem is growing</h2>
          <p className="text-muted-foreground">We're building more tools to help Etsy sellers succeed.</p>
        </div>

        <div className="relative space-y-6 mb-14">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 md:pl-14 relative">
              <div className="hidden md:flex absolute left-4 w-5 h-5 rounded-full bg-card border-2 border-primary items-center justify-center z-10">
                <div className={`w-2 h-2 rounded-full ${item.status === "live" ? "bg-primary" : "bg-muted-foreground"}`} />
              </div>
              <span className="text-xl md:hidden">{item.emoji}</span>
              <div className="bg-card rounded-xl p-5 shadow-sm border border-border flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="hidden md:inline text-lg">{item.emoji}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    item.status === "live" ? "bg-green-100 text-green-700" : "bg-primary/10 text-primary"
                  }`}>
                    {item.status === "live" ? "LIVE" : "COMING SOON"}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-card rounded-2xl p-8 shadow-sm border border-border">
          <h3 className="font-semibold mb-2">Be the first to know</h3>
          <p className="text-sm text-muted-foreground mb-4">Get notified when new tools launch.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">Notify Me</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
