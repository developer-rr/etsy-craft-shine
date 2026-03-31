import { Search, Tags, PenTool, FolderOpen, Instagram, Share2, Send, Mic } from "lucide-react";

const features = [
  { icon: Search, title: "Smart SEO Optimization", description: "AI analyzes top-performing listings to generate titles and descriptions that rank higher in Etsy search." },
  { icon: Tags, title: "13 Tags per Listing", description: "Automatically generates all 13 Etsy tags, optimized for search visibility and relevance." },
  { icon: PenTool, title: "In-Editor Generation", description: "Works directly inside the Etsy listing editor — no copy-pasting between tools." },
  { icon: FolderOpen, title: "Category-Specific Content", description: "Understands Etsy categories and generates content tailored to your product type." },
  { icon: Instagram, title: "Instagram Posts & Reels", description: "Create engaging Instagram content with captions, hashtags, and calls-to-action." },
  { icon: Share2, title: "Pinterest Pins", description: "Generate Pinterest-optimized descriptions and titles for maximum repins." },
  { icon: Send, title: "Direct Publishing", description: "Publish directly to Instagram and Pinterest without leaving your browser." },
  { icon: Mic, title: "Brand Voice", description: "Define your brand tone and style — every generated post stays consistent with your voice." },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-surface-warm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to grow your Etsy shop</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From SEO-optimized listings to social media automation — EtsyCraft covers the full seller workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
