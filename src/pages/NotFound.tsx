import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <SEO title="Page Not Found | EtsyCraft" description="The page you're looking for doesn't exist." path="/404" />
      <section className="py-24 md:py-32 bg-card">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <div className="text-8xl mb-6">🧑‍🚀</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-2">Looks like this page drifted into deep space.</p>
          <p className="text-sm text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              <Link to="/"><Home className="w-4 h-4 mr-2" /> Back to Homepage</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/faq"><HelpCircle className="w-4 h-4 mr-2" /> Browse FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
