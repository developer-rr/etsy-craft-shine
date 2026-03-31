import { Clock, TrendingDown, Share2 } from "lucide-react";

const problems = [
  { icon: Clock, title: "Hours spent writing listings", desc: "Crafting SEO-friendly titles, descriptions, and tags takes forever — especially when you have dozens of products." },
  { icon: TrendingDown, title: "Your products don't show up in search", desc: "Without the right keywords and tags, your beautiful products stay buried in Etsy's search results." },
  { icon: Share2, title: "Social media is a full-time job", desc: "Creating posts, scheduling content, and promoting across platforms drains time you could spend creating." },
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Sound familiar?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border bg-card p-6 text-center">
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center italic text-muted-foreground max-w-xl mx-auto">
          "I love making my products, but the marketing side of Etsy feels like a second job."
        </p>
      </div>
    </section>
  );
}
