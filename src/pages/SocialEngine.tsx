import Layout from "@/components/Layout";
import { Check, Instagram, Image, Hash, Search, Mic2, Send, Download, MousePointerClick, PanelRight, LayoutGrid, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const platforms = [
  {
    name: "Instagram",
    color: "primary",
    icon: Instagram,
    features: ["AI captions up to 2,200 characters", "20–30 researched hashtags", "Engagement-optimized formatting", "Brand voice consistency", "Image download for Stories & Reels"],
  },
  {
    name: "Pinterest",
    color: "secondary",
    icon: Image,
    features: ["SEO titles up to 100 characters", "Rich descriptions up to 800 characters", "Auto-generated product links", "Board suggestions", "Pin-ready formatting"],
  },
];

const features = [
  { icon: Mic2, title: "AI Captions", desc: "Generate engaging captions tailored for each platform's algorithm and audience expectations." },
  { icon: Hash, title: "Hashtag Research", desc: "AI-powered hashtag suggestions based on your product category, trending tags, and competition analysis." },
  { icon: Search, title: "Pinterest SEO", desc: "Keyword-rich descriptions and titles optimized for Pinterest's search engine to drive organic traffic." },
  { icon: LayoutGrid, title: "Brand Voice", desc: "Save your brand tone and style. Every post sounds like you, whether playful, professional, or luxurious." },
  { icon: Send, title: "Direct Publishing", desc: "Post directly to Instagram and Pinterest without leaving the Etsy editor. No copy-paste, no app switching." },
  { icon: Download, title: "Image Download", desc: "Download your Etsy product images in the right format and size for each social platform." },
];

const steps = [
  { icon: MousePointerClick, title: "Open your Etsy listing", desc: "Navigate to any live listing on Etsy." },
  { icon: PanelRight, title: "Click Social Engine", desc: "Open the Social Engine panel from the extension toolbar." },
  { icon: LayoutGrid, title: "Choose your platform", desc: "Select Instagram, Pinterest, or both. Customize tone and language." },
  { icon: Share2, title: "Publish or download", desc: "Post directly to your accounts or download content for later." },
];

const plans = [
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

const faqs = [
  { q: "Do I need a business account for Instagram?", a: "For direct publishing, yes — Instagram requires a Business or Creator account connected via Facebook. For generating captions and hashtags only, any account works." },
  { q: "How does Pinterest direct posting work?", a: "Social Engine connects to your Pinterest account via the official API. You authorize the connection once, then publish pins directly from the Etsy editor with auto-generated titles, descriptions, and product links." },
  { q: "Can I schedule posts for later?", a: "Scheduling is coming in the Pro+ plan. Currently, you can publish immediately or download your content to use with any scheduling tool you prefer." },
  { q: "Does it support carousel posts?", a: "Carousel support for Instagram is on our roadmap. Currently, Social Engine creates single-image posts with optimized captions and hashtags." },
];

export default function SocialEngine() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-card to-background py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-secondary mb-4">EtsyCraft Social Engine — Chrome Extension</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              From Etsy Listing to Social Post — In One Click
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Turn every Etsy product into scroll-stopping Instagram captions and Pinterest pins. Generate, customize, and publish — without leaving Etsy.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-base px-8">
                📱 Install Social Engine — Free
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">No credit card required • BYOK • Direct publishing included</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-primary/10 flex items-center justify-center">
              <span className="text-6xl">📱</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-surface-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Two platforms. Perfectly optimized.</h2>
            <p className="text-muted-foreground">Content tailored to each platform's requirements and algorithm.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((p, i) => (
              <div key={i} className={`bg-card rounded-2xl p-8 border-t-4 shadow-sm ${i === 0 ? "border-t-primary" : "border-t-secondary"}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 0 ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <p.icon className={`w-5 h-5 ${i === 0 ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                </div>
                <ul className="space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${i === 0 ? "text-primary" : "text-secondary"}`} /><span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful features for social growth</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-surface-warm rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-surface-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          </div>
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-border" />
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-lg font-bold mb-3">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-sm font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-card">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 flex flex-col ${plan.highlighted ? "bg-card border-2 border-secondary shadow-lg relative" : "bg-card border border-border shadow-sm"}`}>
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">Best Value</span>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-secondary">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={plan.highlighted ? "bg-secondary hover:bg-secondary/90 text-white" : ""} variant={plan.highlighted ? "default" : "outline"} size="lg">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-warm">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to grow your social presence?</h2>
          <p className="text-muted-foreground mb-8">Turn every Etsy listing into engaging social media content.</p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-base px-8">
            📱 Install Social Engine — Free for Chrome
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">Free forever plan available • No credit card required</p>
        </div>
      </section>
    </Layout>
  );
}
