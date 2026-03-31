import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

interface LegalPageProps {
  title: string;
}

export default function LegalPage({ title }: LegalPageProps) {
  return (
    <Layout>
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-[800px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
            <p>Legal content will be inserted here.</p>
          </div>
          <div className="mt-12 pt-6 border-t border-border">
            <Link to="/" className="text-sm text-primary hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
