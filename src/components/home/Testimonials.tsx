import { Star } from "lucide-react";

const testimonials = [
  {
    flag: "🇺🇸", name: "Sarah M.", location: "Austin, TX",
    quote: "EtsyCraft cut my listing time from 45 minutes to under 5. My search impressions went up 40% in the first month.",
    description: "Handmade jewelry seller • 2,500+ sales",
  },
  {
    flag: "🇩🇪", name: "Lena K.", location: "Berlin, Germany",
    quote: "The Social Engine is a game-changer. I post to Instagram and Pinterest in seconds, and my traffic from social doubled.",
    description: "Vintage clothing shop • 1,200+ sales",
  },
  {
    flag: "🇷🇺", name: "Dmitry P.", location: "Moscow, Russia",
    quote: "Finally a tool that supports multiple languages! I sell to US and EU customers, and EtsyCraft handles both perfectly.",
    description: "Digital prints & templates • 800+ sales",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface-warm">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Etsy sellers worldwide</h2>
          <p className="text-muted-foreground">Real results from real sellers using EtsyCraft every day.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed mb-6 italic text-foreground/80">"{t.quote}"</blockquote>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.flag}</span>
                <div>
                  <p className="font-semibold text-sm">{t.name} <span className="text-muted-foreground font-normal">• {t.location}</span></p>
                  <p className="text-xs text-muted-foreground">{t.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
