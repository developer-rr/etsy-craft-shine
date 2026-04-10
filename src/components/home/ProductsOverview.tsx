import { Check } from "lucide-react";

const AI_LINK = "https://chromewebstore.google.com/detail/etsycraft-ai-%E2%80%94-seo-listin/dgjjnmnipjdcacgjdmifhiglkhpdcgkd";
const SE_LINK = "https://chromewebstore.google.com/detail/etsycraft-social-engine/onnbcnlbbmcjhnlhciefmpcldfjbojnc";

const products = [
  {
    title: "EtsyCraft AI",
    subtitle: "SEO Listing Generator",
    color: "border-primary",
    cta: "Get EtsyCraft AI",
    ctaClass: "bg-primary hover:bg-primary-hover text-primary-foreground",
    href: AI_LINK,
    features: [
      "SEO-optimized titles, descriptions & tags",
      "13 tags generated per listing",
      "7 languages supported",
      "Works with OpenAI & Anthropic",
      "100% local browser processing",
    ],
  },
  {
    title: "EtsyCraft Social Engine",
    subtitle: "Social Media Content & Publishing",
    color: "border-secondary",
    cta: "Try Social Engine",
    ctaClass: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
    href: SE_LINK,
    features: [
      "AI-generated social posts from listings",
      "Multi-platform scheduling",
      "Hashtag optimization",
      "Image suggestions & templates",
      "Analytics & performance tracking",
    ],
  },
];

export default function ProductsOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Two tools. One ecosystem. Zero headaches.</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Everything you need to list and promote your Etsy products — powered by AI.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border-t-4 ${p.color} bg-card shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col`}
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{p.subtitle}</p>
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${p.ctaClass}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
