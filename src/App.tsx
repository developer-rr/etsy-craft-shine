import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import AIProduct from "./pages/AIProduct";
import SocialEngine from "./pages/SocialEngine";
import Pricing from "./pages/Pricing";
import { TagGenerator, DescriptionGenerator, TitleGenerator, ListingGenerator } from "./pages/ToolPages";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/blog" element={<Placeholder title="Blog" />} />
          <Route path="/faq" element={<Placeholder title="FAQ" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/tools/etsy-tag-generator" element={<TagGenerator />} />
          <Route path="/tools/etsy-description-generator" element={<DescriptionGenerator />} />
          <Route path="/tools/etsy-title-generator" element={<TitleGenerator />} />
          <Route path="/tools/etsy-listing-generator" element={<ListingGenerator />} />
          <Route path="/legal/privacy" element={<Placeholder title="Privacy Policy" />} />
          <Route path="/legal/terms" element={<Placeholder title="Terms of Service" />} />
          <Route path="/legal/cookies" element={<Placeholder title="Cookie Policy" />} />
          <Route path="/legal/refund" element={<Placeholder title="Refund Policy" />} />
          <Route path="/legal/acceptable-use" element={<Placeholder title="Acceptable Use Policy" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
