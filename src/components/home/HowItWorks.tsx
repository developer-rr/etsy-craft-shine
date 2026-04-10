import { Key, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AI_LINK = "https://chromewebstore.google.com/detail/etsycraft-ai-%E2%80%94-seo-listin/dgjjnmnipjdcacgjdmifhiglkhpdcgkd";

const steps = [
  { icon: Key, title: "Connect your AI key", description: "Bring your own OpenAI or Anthropic API key. You pay only for what you use — typically ~$0.0003 per generation." },
  { icon: Sparkles, title: "Generate with one click", description: "Open any Etsy listing and click Generate. EtsyCraft creates SEO-optimized titles, descriptions, and tags instantly." },
  { icon: CheckCircle, title: "Apply or publish", description: "Apply content directly in the Etsy editor or publish social media posts to Instagram and Pinterest." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works — in 3 simple steps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            EtsyCraft uses a BYOK (Bring Your Own Key) model. Connect your AI provider, and you're in full control of costs and data.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-2">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href={AI_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              🚀 Get Started — It's Free
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
