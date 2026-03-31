import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What is BYOK and why does EtsyCraft use it?", a: "BYOK stands for 'Bring Your Own Key'. Instead of charging you for AI usage, you connect your own OpenAI or Anthropic API key. This means you pay only for what you use (~$0.0003/generation), and your data goes directly to the AI provider — never through our servers." },
  { q: "Do I need both extensions?", a: "No! EtsyCraft AI and Social Engine work independently. Use one or both depending on your needs. They share the same ecosystem, so they complement each other perfectly." },
  { q: "Is the free plan really free?", a: "Yes! The free plan includes up to 5 generations per day with no time limit. You only need to upgrade if you want unlimited generations, more languages, or advanced features." },
  { q: "What languages are supported?", a: "EtsyCraft supports 7 languages: English, German, French, Spanish, Italian, Portuguese, and Dutch. More languages are coming soon." },
  { q: "Does EtsyCraft work for non-Etsy platforms?", a: "Currently, EtsyCraft is optimized specifically for Etsy. However, the Social Engine can create social media content for any business. Support for more platforms is on our roadmap." },
];

export default function FAQMini() {
  return (
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

        <div className="text-center mt-8">
          <Link to="/faq" className="text-primary font-medium text-sm hover:underline">See all FAQ →</Link>
        </div>
      </div>
    </section>
  );
}
