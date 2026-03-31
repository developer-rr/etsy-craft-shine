import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import ProductsOverview from "@/components/home/ProductsOverview";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ProductsOverview />
    </Layout>
  );
}
