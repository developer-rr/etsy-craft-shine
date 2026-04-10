import { Check } from "lucide-react";

const AI_LINK = "https://chromewebstore.google.com/detail/etsycraft-ai-%E2%80%94-seo-listin/dgjjnmnipjdcacgjdmifhiglkhpdcgkd";
const SE_LINK = "https://chromewebstore.google.com/detail/etsycraft-social-engine/onnbcnlbbmcjhnlhciefmpcldfjbojnc";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-card to-background py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-sm font-semibold text-primary mb-4">
            AI-Powered Chrome Extensions for Etsy Sellers
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Spend less time writing. Sell more on Etsy.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Generate SEO-optimized listings and social media posts with AI — right inside your browser. Free to start.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={AI_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
            >
              🚀 Get EtsyCraft AI — Free
            </a>
            <a
              href={SE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-secondary text-secondary font-semibold hover:bg-accent transition-colors"
            >
              📱 Try Social Engine — Free
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required • Install in 30 seconds • BYOK — use your own AI key
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {["7 languages", "100% local processing", "Works with OpenAI & Anthropic"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-foreground">
                <Check size={16} className="text-primary" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent flex items-center justify-center">
            <span className="text-6xl">🛍️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
