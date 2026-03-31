import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  {
    title: "General",
    faqs: [
      { q: "What is EtsyCraft?", a: "EtsyCraft is an ecosystem of AI-powered Chrome extensions for Etsy sellers. It includes EtsyCraft AI (SEO listing generator) and Social Engine (social media content creator). Both extensions work directly inside the Etsy editor." },
      { q: "What is BYOK (Bring Your Own Key)?", a: "BYOK means you connect your own OpenAI or Anthropic API key. Instead of paying us for AI usage, you pay the AI provider directly — typically ~$0.0003 per generation. This keeps costs transparent and gives you full control over your data." },
      { q: "How much does EtsyCraft cost?", a: "Both extensions have free plans. EtsyCraft AI Pro is $4.99/month, Social Engine Pro is $4.99/month, and Social Engine Pro+ is $9.99/month. All Pro plans include a 14-day free trial. AI API costs (via BYOK) are separate and typically negligible." },
      { q: "Which AI models does EtsyCraft support?", a: "EtsyCraft works with OpenAI (GPT-4o, GPT-4o-mini) and Anthropic (Claude 3.5 Sonnet, Claude 3 Haiku). Free plans support OpenAI only; Pro plans support both providers." },
      { q: "Is my data safe?", a: "Yes. EtsyCraft processes everything locally in your browser. Your data goes directly from your browser to the AI provider — it never passes through our servers. We don't store your listings, API keys, or any personal data on our infrastructure." },
      { q: "What languages are supported?", a: "EtsyCraft supports 7 languages: English, German, French, Spanish, Italian, Portuguese, and Dutch. Free plans include English only; Pro plans unlock all 7 languages." },
    ],
  },
  {
    title: "EtsyCraft AI",
    faqs: [
      { q: "How does EtsyCraft AI work?", a: "EtsyCraft AI is a Chrome extension that adds a side panel to the Etsy listing editor. You enter your product keywords, select your preferences (language, tone, category), and click Generate. The AI creates an SEO-optimized title, description, and 13 tags in seconds." },
      { q: "Does it work inside the Etsy editor?", a: "Yes! Unlike other tools that require you to generate content elsewhere and copy-paste, EtsyCraft AI works directly inside the Etsy listing editor. You can generate and apply content without leaving the page." },
      { q: "Can I edit the generated content before applying?", a: "Absolutely. All generated content is fully editable. You can modify titles, descriptions, and individual tags before applying them to your listing. EtsyCraft is a writing assistant, not an autopilot." },
      { q: "Does it work for all Etsy categories?", a: "Yes. The AI adapts its output based on your product category — jewelry, digital downloads, vintage items, art prints, craft supplies, and more. Category-specific optimization ensures relevant keywords and descriptions." },
      { q: "Does AI-generated content comply with Etsy's policies?", a: "EtsyCraft generates content that follows Etsy's listing guidelines, including the 140-character title limit and 13-tag maximum with 20 characters per tag. However, you should always review generated content to ensure accuracy and compliance with your specific product." },
    ],
  },
  {
    title: "Social Engine",
    faqs: [
      { q: "Which social platforms are supported?", a: "Social Engine currently supports Instagram and Pinterest. Instagram features include captions (up to 2,200 characters) and 20-30 hashtags. Pinterest features include SEO titles (100 chars), descriptions (800 chars), and auto-generated product links." },
      { q: "Do I need a business Instagram account?", a: "For direct publishing, yes — Instagram requires a Business or Creator account connected via Facebook. For generating captions and hashtags only (without direct posting), any account works." },
      { q: "How does Pinterest direct posting work?", a: "You authorize Social Engine to connect to your Pinterest account via the official API. After that, you can publish pins directly from the Etsy editor with auto-generated titles, descriptions, and product links." },
      { q: "What is Brand Voice?", a: "Brand Voice lets you save your preferred writing tone and style (Pro plan). Every generated post will match your brand personality — whether professional, playful, luxurious, casual, or minimalist. This ensures consistency across all your social content." },
      { q: "Does it support carousel posts?", a: "Carousel support for Instagram is on our roadmap and will be available in a future update. Currently, Social Engine creates single-image posts with optimized captions and hashtags." },
    ],
  },
  {
    title: "Pricing & Billing",
    faqs: [
      { q: "Is the free plan really free forever?", a: "Yes. The free plans for both extensions have no time limit. EtsyCraft AI Free includes 5 generations/day, and Social Engine Free includes 3 posts/day. No credit card required." },
      { q: "How does the 14-day free trial work?", a: "All Pro plans come with a 14-day free trial. You won't be charged until the trial ends. Cancel anytime during the trial period and you won't be billed." },
      { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan anytime from the extension settings. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of your current billing cycle." },
      { q: "How do I cancel my subscription?", a: "You can cancel anytime from the extension settings. Your Pro features remain active until the end of your current billing period. After that, you'll revert to the free plan." },
      { q: "What's your refund policy?", a: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 30 days of your purchase for a full refund — no questions asked." },
    ],
  },
  {
    title: "Technical",
    faqs: [
      { q: "How do I get an OpenAI API key?", a: "Visit platform.openai.com, create an account, go to API Keys, and generate a new key. Add billing information (minimum $5 credit). Then paste the key into EtsyCraft's settings. Detailed instructions are in our setup guide." },
      { q: "How do I get an Anthropic API key?", a: "Visit console.anthropic.com, create an account, navigate to API Keys, and create a new key. Add billing information. Then paste the key into EtsyCraft's settings. Anthropic keys are available on Pro plans only." },
      { q: "How much does AI API usage cost?", a: "AI API costs are very low — typically around $0.0003 per generation (less than a tenth of a cent). Even heavy users rarely spend more than $1-2 per month on API costs." },
      { q: "Which Chrome versions are supported?", a: "EtsyCraft requires Chrome version 88 or later (released January 2021). We recommend using the latest version of Chrome for the best experience. The extension also works on Chromium-based browsers like Brave and Edge." },
      { q: "Does it work on Firefox or Safari?", a: "Currently, EtsyCraft is available for Chrome and Chromium-based browsers only (Chrome, Brave, Edge, Opera). Firefox and Safari support is being considered for future development." },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      <section className="py-16 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Everything you need to know about EtsyCraft. Can't find your answer? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-3xl mx-auto px-4 space-y-12">
          {sections.map((section, si) => (
            <div key={si}>
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.faqs.map((faq, fi) => (
                  <AccordionItem key={fi} value={`${si}-${fi}`} className="border border-border rounded-xl px-5 data-[state=open]:shadow-sm">
                    <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
