import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tags, FileText, Type, Package, ArrowRight } from "lucide-react";

interface ToolPageProps {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  mockResult: React.ReactNode;
  steps: string[];
  seoTitle: string;
  seoContent: string[];
  relatedTools: { path: string; label: string; icon: React.ElementType }[];
}

function ToolPageTemplate({ title, subtitle, inputPlaceholder, mockResult, steps, seoTitle, seoContent, relatedTools }: ToolPageProps) {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Demo */}
      <section className="py-12 bg-card">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                placeholder={inputPlaceholder}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                readOnly
              />
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground whitespace-nowrap">
                Generate Sample
              </Button>
            </div>
            <div className="rounded-xl bg-surface-warm border border-border p-5">
              <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Sample Output</p>
              {mockResult}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-surface-warm">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">{i + 1}</div>
                <p className="text-sm text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="py-16 bg-card">
        <div className="container max-w-3xl mx-auto px-4 prose prose-sm max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{seoTitle}</h2>
          {seoContent.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-warm">
        <div className="container text-center max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get unlimited generations with EtsyCraft AI</h2>
          <p className="text-muted-foreground mb-8">Install the Chrome extension and generate optimized listings directly inside the Etsy editor.</p>
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8">
            🚀 Install EtsyCraft AI — Free
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">No credit card required • BYOK • Works with OpenAI & Anthropic</p>
        </div>
      </section>

      {/* Related tools */}
      <section className="py-16 bg-card">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Related tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedTools.map((tool, i) => (
              <Link key={i} to={tool.path} className="flex items-center gap-3 rounded-xl border border-border bg-surface-warm p-4 hover:shadow-sm hover:border-primary/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <tool.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{tool.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const allTools = [
  { path: "/tools/etsy-tag-generator", label: "Tag Generator", icon: Tags },
  { path: "/tools/etsy-description-generator", label: "Description Generator", icon: FileText },
  { path: "/tools/etsy-title-generator", label: "Title Generator", icon: Type },
  { path: "/tools/etsy-listing-generator", label: "Listing Generator", icon: Package },
];

const getRelated = (current: string) => allTools.filter((t) => t.path !== current);

// ─── Tag Generator ───
export function TagGenerator() {
  const mockTags = ["handmade jewelry", "silver necklace", "minimalist pendant", "gift for her", "dainty chain", "layering necklace", "sterling silver", "everyday jewelry", "boho necklace", "birthday gift", "artisan made", "delicate jewelry", "women accessories"];
  return (
    <ToolPageTemplate
      title="Free Etsy Tag Generator"
      subtitle="Generate 13 SEO-optimized tags for your Etsy listings. Each tag is under 20 characters and designed to maximize your search visibility."
      inputPlaceholder="e.g. handmade silver necklace minimalist"
      mockResult={
        <div className="flex flex-wrap gap-2">
          {mockTags.map((tag, i) => (
            <span key={i} className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
          ))}
        </div>
      }
      steps={["Enter your product keywords or paste your listing title", "Click Generate to create 13 SEO-optimized tags", "Copy the tags and paste them into your Etsy listing"]}
      seoTitle="Why tags matter for Etsy SEO"
      seoContent={[
        "Etsy allows exactly 13 tags per listing, and each tag can be up to 20 characters long. These tags are one of the most important factors in Etsy's search algorithm. When a buyer searches for a product, Etsy matches their query against your tags, title, categories, and attributes. Using all 13 tag slots effectively can significantly increase your listing's visibility.",
        "The key to effective Etsy tags is using long-tail keywords — specific, multi-word phrases that match how real buyers search. Instead of generic tags like 'necklace' or 'gift', use descriptive phrases like 'silver layering necklace' or 'minimalist birthday gift'. Long-tail keywords face less competition and attract more qualified buyers who are closer to making a purchase.",
        "Tag relevance is crucial. Every tag should accurately describe your product or how a buyer might search for it. Etsy penalizes listings with irrelevant tags, so avoid stuffing tags with trending but unrelated keywords. Focus on a mix of descriptive tags (what the item is), occasion tags (when someone would buy it), and recipient tags (who it's for).",
        "Our AI tag generator analyzes your product keywords and creates 13 perfectly optimized tags, each within the 20-character limit. The tags are designed to cover different search intents — from broad category terms to specific long-tail phrases — giving your listing the best possible chance of appearing in relevant searches."
      ]}
      relatedTools={getRelated("/tools/etsy-tag-generator")}
    />
  );
}

// ─── Description Generator ───
export function DescriptionGenerator() {
  return (
    <ToolPageTemplate
      title="Free Etsy Description Generator"
      subtitle="Create compelling, SEO-optimized product descriptions that convert browsers into buyers."
      inputPlaceholder="e.g. handmade ceramic mug with speckled glaze"
      mockResult={
        <div className="text-sm text-foreground leading-relaxed space-y-3">
          <p>☕ <strong>Handcrafted Speckled Ceramic Mug — Your New Morning Essential</strong></p>
          <p>Start your day with something beautiful. This handmade ceramic mug features a unique speckled glaze that makes every piece one-of-a-kind. Crafted with care on the potter's wheel, each mug is fired at high temperatures for lasting durability.</p>
          <p>Perfect for your morning coffee, afternoon tea, or as a thoughtful handmade gift. The generous 12oz capacity and comfortable handle make it ideal for everyday use. Microwave and dishwasher safe.</p>
          <p><strong>Details:</strong> • Capacity: 12oz • Material: Stoneware ceramic • Finish: Speckled matte glaze • Dimensions: 4" tall × 3.5" diameter</p>
          <p>Each mug is handmade, so slight variations in the glaze pattern are normal and add to its artisan charm. Ships carefully wrapped in eco-friendly packaging.</p>
        </div>
      }
      steps={["Describe your product with a few keywords or a short phrase", "Click Generate to create an SEO-optimized description", "Review, customize, and paste into your Etsy listing"]}
      seoTitle="Why descriptions matter for Etsy SEO"
      seoContent={[
        "Your Etsy product description serves two critical purposes: it helps Etsy's search algorithm understand and rank your listing, and it persuades potential buyers to make a purchase. A well-written description can be the difference between a listing that sits unseen and one that consistently generates sales.",
        "Etsy's search algorithm scans your description for relevant keywords, especially in the first few sentences. Front-loading your description with important search terms — naturally woven into readable sentences — signals to Etsy what your product is and who it's for. Avoid keyword stuffing; instead, write naturally while incorporating the terms buyers actually search for.",
        "Structure matters. Break your description into clear sections: a compelling opening hook, detailed product information, dimensions and materials, care instructions, and shipping details. Use line breaks and formatting to make it scannable. Buyers on Etsy often skim descriptions, so make key information easy to find at a glance.",
        "Storytelling sells on Etsy. Unlike mass-market platforms, Etsy buyers value the human story behind a product. Share your creative process, the inspiration behind the piece, or what makes your materials special. This emotional connection builds trust and justifies premium pricing. Our AI description generator balances SEO optimization with authentic storytelling to create descriptions that both rank well and convert."
      ]}
      relatedTools={getRelated("/tools/etsy-description-generator")}
    />
  );
}

// ─── Title Generator ───
export function TitleGenerator() {
  return (
    <ToolPageTemplate
      title="Free Etsy Title Generator"
      subtitle="Generate SEO-optimized titles up to 140 characters that maximize your listing's search visibility."
      inputPlaceholder="e.g. gold hoop earrings minimalist everyday"
      mockResult={
        <div className="text-sm">
          <p className="font-semibold text-foreground mb-2">Generated Title (138 characters):</p>
          <p className="text-foreground bg-card border border-border rounded-lg px-4 py-3 font-medium">
            Gold Hoop Earrings, Minimalist Everyday Hoops, Dainty Gold Earrings for Women, Simple Huggie Hoops, Gift for Her, 14K Gold Filled
          </p>
        </div>
      }
      steps={["Enter your main product keywords or a rough title idea", "Click Generate to create an optimized 140-character title", "Copy the title and use it in your Etsy listing"]}
      seoTitle="Why titles matter for Etsy SEO"
      seoContent={[
        "Your Etsy title is the single most important SEO element of your listing. It's the first thing both Etsy's search algorithm and potential buyers see. Etsy allows up to 140 characters for titles, and using this space strategically can dramatically improve your search rankings and click-through rates.",
        "Front-loading is essential. Place your most important keywords at the beginning of your title. Etsy's algorithm gives more weight to words that appear earlier, and buyers scanning search results often only see the first 40-50 characters on mobile. Start with the primary keyword that best describes your product, then add supporting terms.",
        "Balance readability with SEO. While it's tempting to stuff your title with every possible keyword, a title that reads like a list of random words will hurt your click-through rate. Use commas and natural phrases to create a title that's both keyword-rich and readable. Buyers are more likely to click on listings with titles that feel human and trustworthy.",
        "Our AI title generator creates titles that maximize all 140 characters with strategically ordered keywords, natural readability, and proven Etsy SEO patterns. It analyzes your product keywords and generates titles that front-load the most important terms while maintaining a professional, clickable format."
      ]}
      relatedTools={getRelated("/tools/etsy-title-generator")}
    />
  );
}

// ─── Listing Generator ───
export function ListingGenerator() {
  const mockTags = ["custom pet portrait", "dog painting", "pet memorial gift", "cat portrait", "pet lover gift", "custom dog art", "pet illustration", "animal portrait", "pet keepsake", "personalized pet", "dog mom gift", "pet loss gift", "watercolor pet"];
  return (
    <ToolPageTemplate
      title="Free Etsy Listing Generator — Complete Package"
      subtitle="Generate a complete Etsy listing — title, description, and 13 tags — from a single prompt."
      inputPlaceholder="e.g. custom watercolor pet portrait from photo"
      mockResult={
        <div className="text-sm space-y-4">
          <div>
            <p className="font-semibold text-foreground mb-1">Title (139 characters):</p>
            <p className="text-foreground bg-card border border-border rounded-lg px-4 py-2 font-medium text-xs">
              Custom Watercolor Pet Portrait From Photo, Personalized Dog Painting, Cat Portrait, Pet Memorial Gift, Pet Lover Gift, Dog Mom Gift
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Description:</p>
            <div className="text-foreground bg-card border border-border rounded-lg px-4 py-2 text-xs leading-relaxed space-y-2">
              <p>🎨 <strong>Custom Watercolor Pet Portrait — Turn Your Favorite Photo Into Art</strong></p>
              <p>Celebrate your beloved pet with a stunning hand-painted watercolor portrait. Simply send us your favorite photo, and our artist will create a beautiful, one-of-a-kind piece that captures your pet's unique personality…</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Tags (13):</p>
            <div className="flex flex-wrap gap-1.5">
              {mockTags.map((tag, i) => (
                <span key={i} className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      }
      steps={["Describe your product in a few words or a short sentence", "Click Generate to create a complete optimized listing", "Review the title, description, and tags — then apply to Etsy"]}
      seoTitle="Why complete listing optimization matters"
      seoContent={[
        "On Etsy, your title, description, and tags work together as a unified SEO system. When all three elements are optimized consistently, they reinforce each other and send strong relevance signals to Etsy's search algorithm. A listing where the title says one thing and the tags target different keywords creates confusion — both for the algorithm and potential buyers.",
        "Consistency across your listing elements is key. Your title should contain your primary keywords, your description should naturally expand on those keywords with additional context, and your tags should cover variations and long-tail phrases that buyers might use. When these three elements tell the same story, Etsy's algorithm has a clear understanding of what your product is and who should see it.",
        "Many sellers optimize their titles but neglect their descriptions and tags, or vice versa. This fragmented approach leaves SEO value on the table. A complete listing generator ensures that every element is optimized together, creating a cohesive listing that maximizes your chances of appearing in relevant searches across all of Etsy's ranking factors.",
        "Our complete listing generator creates all three elements from a single prompt, ensuring perfect keyword consistency across your title, description, and tags. This saves time and eliminates the guesswork of trying to optimize each element separately. The result is a professionally crafted listing that's ready to publish and designed to rank."
      ]}
      relatedTools={getRelated("/tools/etsy-listing-generator")}
    />
  );
}
