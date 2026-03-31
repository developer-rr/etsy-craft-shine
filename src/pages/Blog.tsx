import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const placeholders = [
  "10 Etsy SEO Tips to Boost Your Shop in 2026",
  "How to Use AI for Etsy Listings (Without Breaking the Rules)",
  "Instagram vs Pinterest: Which Is Better for Etsy Sellers?",
  "The Complete Guide to Etsy Tags and Keywords",
];

export default function Blog() {
  return (
    <Layout>
      <SEO title="EtsyCraft Blog — Tips for Etsy Sellers" description="Expert tips on Etsy SEO, social media marketing, and growing your handmade shop. Guides, tutorials, and strategies." path="/blog" />
      <section className="py-16 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">EtsyCraft Blog — Tips for Etsy Sellers</h1>
          <p className="text-lg text-muted-foreground">Expert tips on Etsy SEO, social media marketing, and growing your shop.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Newsletter */}
          <div className="bg-surface-warm rounded-2xl border border-border p-8 text-center mb-12">
            <h2 className="text-xl font-bold mb-2">Articles coming soon</h2>
            <p className="text-sm text-muted-foreground mb-6">Subscribe to get notified when we publish new content.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">Subscribe</Button>
            </form>
          </div>

          {/* Placeholder cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {placeholders.map((title, i) => (
              <div key={i} className="rounded-2xl border border-border bg-surface-warm overflow-hidden">
                <div className="h-40 bg-muted flex items-center justify-center">
                  <FileText className="w-10 h-10 text-muted-foreground/40" />
                </div>
                <div className="p-5 relative">
                  <span className="absolute top-3 right-3 text-xs font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Coming Soon</span>
                  <h3 className="font-semibold text-sm leading-snug pr-20">{title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">Stay tuned for this article.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
