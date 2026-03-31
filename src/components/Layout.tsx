import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import ExitPopup from "./ExitPopup";
import CookieBanner from "./CookieBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyCTA />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ExitPopup />
      <CookieBanner />
    </div>
  );
}
