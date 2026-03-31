import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

interface LegalPageProps {
  title: string;
  children?: React.ReactNode;
}

const slugMap: Record<string, string> = {
  "Privacy Policy": "/legal/privacy",
  "Terms of Service": "/legal/terms",
  "Cookie Policy": "/legal/cookies",
  "Refund Policy": "/legal/refund",
  "Acceptable Use Policy": "/legal/acceptable-use",
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <Layout>
      <SEO title={`${title} | EtsyCraft`} description={`${title} for EtsyCraft AI-powered tools for Etsy sellers.`} path={slugMap[title] || "/legal"} />
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-[800px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed prose-headings:text-foreground prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-strong:text-foreground prose-a:text-primary prose-li:my-1 prose-table:my-4">
            {children || <p>Legal content will be inserted here.</p>}
          </div>
          <div className="mt-12 pt-6 border-t border-border">
            <Link to="/" className="text-sm text-primary hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
