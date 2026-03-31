import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiPlans = [
  {
    name: "Free", price: "$0", period: "forever", highlighted: false,
    features: ["Up to 5 generations/day", "Titles & descriptions", "13 SEO tags", "1 language", "BYOK (OpenAI)"],
    cta: "Install Free",
  },
  {
    name: "Pro", price: "$4.99", period: "/month", highlighted: true,
    features: ["Unlimited generations", "Titles, descriptions & tags", "13 SEO tags", "7 languages", "BYOK (OpenAI & Anthropic)", "Priority support"],
    cta: "Start 14-day Free Trial",
  },
];

const sePlans = [
  {
    name: "Free", price: "$0", period: "forever", highlighted: false,
    features: ["3 posts/day", "Instagram captions", "Pinterest descriptions", "1 language", "BYOK (OpenAI)"],
    cta: "Install Free",
  },
  {
    name: "Pro", price: "$4.99", period: "/month", highlighted: false,
    features: ["Unlimited posts", "Instagram + Pinterest", "Direct publishing", "7 languages", "BYOK (OpenAI & Anthropic)", "Brand voice"],
    cta: "Start 14-day Free Trial",
  },
  {
    name: "Pro+", price: "$9.99", period: "/month", highlighted: true,
    features: ["Everything in Pro", "Multi-account support", "Content calendar", "Advanced analytics", "Priority support", "Early access to features"],
    cta: "Start 14-day Free Trial",
  },
];

export default function PricingSection() {
  const [tab, setTab] = useState<"ai" | "se">("ai");
  const plans = tab === "ai" ? aiPlans : sePlans;

  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground mb-8">No hidden fees. Cancel anytime. BYOK keeps your AI costs under control.</p>

          <div className="inline-flex border-b-2 border-border gap-4">
            {(["ai", "se"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-2 px-4 text-sm font-medium transition-colors border-b-2 -mb-[2px] ${
                  tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "ai" ? "EtsyCraft AI" : "Social Engine"}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid gap-6 ${plans.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 max-w-3xl mx-auto"}`}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-card border-2 border-primary shadow-lg ring-1 ring-primary/10 relative"
                  : "bg-card border border-border shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={plan.highlighted ? "bg-primary hover:bg-primary-hover text-primary-foreground" : ""}
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center space-y-1 text-xs text-muted-foreground">
          <p>💳 Secure payment via Stripe • Cancel anytime • 30-day money-back guarantee</p>
          <p>🔑 BYOK: AI API costs are separate (~$0.0003/generation) • 14-day free trial on all Pro plans</p>
        </div>
      </div>
    </section>
  );
}
