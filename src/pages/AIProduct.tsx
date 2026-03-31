import Layout from "@/components/Layout";
import { Check, Sparkles, Type, FileText, Tags, Layers, Sliders, Globe, MousePointerClick, PanelRight, Wand2, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: Type, title: "Smart Title Generation", desc: "AI creates SEO-optimized titles up to 140 characters, maximizing visibility while staying within Etsy's limits." },
  { icon: FileText, title: "Compelling Descriptions", desc: "Generate engaging 150–300 word descriptions that convert browsers into buyers with natural keyword integration." },
  { icon: Tags, title: "13 Perfect Tags", desc: "Every listing gets exactly 13 SEO tags, each under 20 characters — Etsy's maximum. No wasted tag slots." },
  { icon: Layers, title: "Category-Specific AI", desc: "The AI adapts its output based on your product category — jewelry, art prints, digital downloads, and more." },
  { icon: Sliders, title: "Tone Control", desc: "Choose from 5 writing tones: Professional, Casual, Luxury, Playful, or Minimalist to match your brand voice." },
  { icon: Globe, title: "Multi-Language Support", desc: "Generate listings in 7 languages: English, German, French, Spanish, Italian, Portuguese, and Dutch." },
];

const steps = [
  { icon: MousePointerClick, title: "Open the Etsy editor", desc: "Navigate to any listing on Etsy — new or existing." },
  { icon: PanelRight, title: "Click the EtsyCraft panel", desc: "The extension adds a sleek side panel right inside the Etsy editor." },
  { icon: Wand2, title: "Generate with one click", desc: "Choose your language, tone, and hit Generate. AI does the rest in under 5 seconds." },
  { icon: ClipboardCheck, title: "Apply to your listing", desc: "Review the output and apply titles, descriptions, and tags directly — no copy-paste needed." },
];

const plans = [
  {
    name: "Free", price: "$0", period: "forever", highlighted: false,
    features: ["Up to 5 generations/day", "Titles & descriptions", "13 SEO tags", "1 language (English)", "BYOK (OpenAI)"],
    cta: "Install Free",
  },
  {
    name: "Pro", price: "$4.99", period: "/month", highlighted: true,
    features: ["Unlimited generations", "Titles, descriptions & tags", "13 SEO tags", "7 languages", "BYOK (OpenAI & Anthropic)", "Tone control (5 options)", "Priority support"],
    cta: "Start 14-day Free Trial",
  },
];

const faqs = [
  { q: "How does EtsyCraft AI integrate with Etsy?", a: "EtsyCraft AI is a Chrome extension that adds a side panel directly inside the Etsy listing editor. There's no separate app to open — everything happens in-context while you edit your listings." },
  { q: "Which AI models does it support?", a: "EtsyCraft AI works with OpenAI (GPT-4o, GPT-4o-mini) and Anthropic (Claude 3.5 Sonnet, Claude 3 Haiku). You bring your own API key, so you always use the latest models." },
  { q: "Can I edit the generated content?", a: "Absolutely! All generated content is fully editable. You can tweak titles, descriptions, and tags before applying them to your listing. Think of EtsyCraft as your AI writing assistant, not a replacement." },
  { q: "Does it work for all Etsy categories?", a: "Yes. EtsyCraft AI adapts its output based on your product category. Whether you sell handmade jewelry, digital downloads, vintage items, or art prints, the AI understands the context and generates relevant content." },
];

export default function AIProduct() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-card to-background py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-primary mb-4">EtsyCraft AI — Chrome Extension</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              AI-Powered SEO for Every Etsy Listing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Generate optimized titles (140 chars), compelling descriptions (150–300 words), and 13 perfect SEO tags — all inside the Etsy editor.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8">
                🚀 Install EtsyCraft AI — Free
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">No credit card required • BYOK • Works with OpenAI & Anthropic</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 flex items-center justify-center">
              <span className="text-6xl">✍️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface-warm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need for perfect Etsy listings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Six powerful features that turn listing creation from hours to seconds.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-card">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          </div>
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-border" />
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-3">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing mini */}
      <section className="py-20 bg-surface-warm">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 flex flex-col ${plan.highlighted ? "bg-card border-2 border-primary shadow-lg relative" : "bg-card border border-border shadow-sm"}`}>
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={plan.highlighted ? "bg-primary hover:bg-primary-hover text-primary-foreground" : ""} variant={plan.highlighted ? "default" : "outline"} size="lg">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-surface-warm">
        <div className="container text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to optimize your Etsy listings?</h2>
          <p className="text-muted-foreground mb-8">Install EtsyCraft AI and start generating SEO-optimized listings in seconds.</p>
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8">
            🚀 Install EtsyCraft AI — Free for Chrome
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">Free forever plan available • No credit card required</p>
        </div>
      </section>
    </Layout>
  );
}
