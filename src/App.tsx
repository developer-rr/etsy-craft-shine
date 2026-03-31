import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIProduct from "./pages/AIProduct";
import SocialEngine from "./pages/SocialEngine";
import PrivacyContent from "./pages/legal/PrivacyContent";
import TermsContent from "./pages/legal/TermsContent";
import CookiesContent from "./pages/legal/CookiesContent";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import LegalPage from "./pages/LegalPage";
import { TagGenerator, DescriptionGenerator, TitleGenerator, ListingGenerator } from "./pages/ToolPages";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai" element={<AIProduct />} />
            <Route path="/social-engine" element={<SocialEngine />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools/etsy-tag-generator" element={<TagGenerator />} />
            <Route path="/tools/etsy-description-generator" element={<DescriptionGenerator />} />
            <Route path="/tools/etsy-title-generator" element={<TitleGenerator />} />
            <Route path="/tools/etsy-listing-generator" element={<ListingGenerator />} />
            <Route path="/legal/privacy" element={<LegalPage title="Privacy Policy"><PrivacyContent /></LegalPage>} />
            <Route path="/legal/terms" element={<LegalPage title="Terms of Service"><TermsContent /></LegalPage>} />
            <Route path="/legal/cookies" element={<LegalPage title="Cookie Policy" />} />
            <Route path="/legal/refund" element={<LegalPage title="Refund Policy" />} />
            <Route path="/legal/acceptable-use" element={<LegalPage title="Acceptable Use Policy" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
