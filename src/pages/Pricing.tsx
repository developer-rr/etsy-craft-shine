import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const aiPlans = [
  {
    name: "Free", price: "$0", period: "forever", highlighted: false,
    features: ["Up to 5 generations/day", "Titles & descriptions", "13 SEO tags per listing", "1 language (English)", "BYOK (OpenAI)", "Works inside Etsy editor", "100% local processing"],
    cta: "Install Free",
  },
  {
    name: "Pro", price: "$4.99", period: "/month", highlighted: true,
    features: ["Unlimited generations", "Titles, descriptions & tags", "13 SEO tags per listing", "7 languages", "BYOK (OpenAI & Anthropic)", "Tone control (5 options)", "Category-specific AI", "Priority support", "14-day free trial"],
    cta: "Start 14-day Free Trial",
  },
];

const sePlans = [
  {
    name: "Free", price: "$0", period: "forever", highlighted: false,
    features: ["3 posts/day", "Instagram captions", "Pinterest descriptions", "1 language (English)", "BYOK (OpenAI)", "Hashtag generation", "Image download"],
    cta: "Install Free",
  },
  {
    name: "Pro", price: "$4.99", period: "/month", highlighted: false,
    features: ["Unlimited posts", "Instagram + Pinterest", "Direct publishing", "7 languages", "BYOK (OpenAI & Anthropic)", "Brand voice profiles", "Advanced hashtag research", "Priority support", "14-day free trial"],
    cta: "Start 14-day Free Trial",
  },
  {
    name: "Pro+", price: "$9.99", period: "/month", highlighted: true,
    features: ["Everything in Pro", "Multi-account support", "Content calendar", "Advanced analytics", "Scheduling (coming soon)", "Carousel support (coming soon)", "Priority support", "Early access to features", "14-day free trial"],
    cta: "Start 14-day Free Trial",
  },
];

const billingFaqs = [
  { q: "Can I switch between plans?", a: "Yes! You can upgrade or downgrade anytime. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at the end of your billing cycle." },
  { q: "How does the 14-day free trial work?", a: "All Pro plans come with a 14-day free trial. You won't be charged until the trial ends. Cancel anytime during the trial and you won't be billed at all." },
  { q: "What happens when my trial expires?", a: "After the trial, you'll be automatically charged for the plan you selected. If you cancel before the trial ends, you'll revert to the free plan with no charges." },
  { q: "How do I cancel my subscription?", a: "You can cancel anytime from the extension settings. Your Pro features will remain active until the end of your current billing period." },
  { q: "What's your refund policy?", a: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days of your purchase for a full refund — no questions asked." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards (Visa, Mastercard, Amex) via Stripe. All payments are processed securely." },
];

export default function Pricing() {
  const [tab, setTab] = useState<"ai" | "se">("ai");
  const plans = tab === "ai" ? aiPlans : sePlans;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">Choose your plan</h1>
          <p className="text-lg text-muted-foreground">Simple, transparent pricing. No hidden fees. Start free, upgrade when you're ready.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-card">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
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
                key={`${tab}-${i}`}
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

      {/* Billing FAQ */}
      <section className="py-20 bg-surface-warm">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Billing FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {billingFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-card">
        <div className="container text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to grow your Etsy shop?</h2>
          <p className="text-muted-foreground mb-8">Start free. Upgrade when you need more power.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              🚀 Get EtsyCraft AI
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/5">
              📱 Get Social Engine
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
