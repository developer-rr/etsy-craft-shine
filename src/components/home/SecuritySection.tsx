import { Lock, Key, Shield } from "lucide-react";

const cards = [
  { icon: Lock, title: "100% Local Processing", description: "Your data never touches our servers. Everything runs locally in your browser for maximum privacy." },
  { icon: Key, title: "BYOK — Your Key, Your Rules", description: "Bring your own AI key. You connect directly to OpenAI or Anthropic — we never see your API key." },
  { icon: Shield, title: "GDPR Compliant", description: "Built by a European company with GDPR compliance baked in from day one. Your data stays yours." },
];

const badges = [
  "🔐 Local Processing", "🔑 BYOK Model", "🇪🇺 EU Company", "🛡️ GDPR Compliant", "🔒 No Data Collection",
];

export default function SecuritySection() {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your data stays yours</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We built EtsyCraft with a privacy-first architecture. No tracking, no data collection, no middleman.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((c, i) => (
            <div key={i} className="bg-surface-warm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b, i) => (
            <span key={i} className="text-xs font-medium bg-muted px-3 py-1.5 rounded-full text-muted-foreground">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
