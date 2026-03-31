import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import ProductsOverview from "@/components/home/ProductsOverview";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ComparisonTable from "@/components/home/ComparisonTable";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import Roadmap from "@/components/home/Roadmap";
import SecuritySection from "@/components/home/SecuritySection";
import FAQMini from "@/components/home/FAQMini";
import FinalCTA from "@/components/home/FinalCTA";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ProductsOverview />
      <HowItWorks />
      <FeaturesGrid />
      <ComparisonTable />
      <PricingSection />
      <Testimonials />
      <Roadmap />
      <SecuritySection />
      <FAQMini />
      <FinalCTA />
    </Layout>
  );
}
