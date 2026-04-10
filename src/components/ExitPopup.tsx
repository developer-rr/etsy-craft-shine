import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const AI_LINK = "https://chromewebstore.google.com/detail/etsycraft-ai-%E2%80%94-seo-listin/dgjjnmnipjdcacgjdmifhiglkhpdcgkd";

export default function ExitPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    if (sessionStorage.getItem("etsycraft_exit_shown")) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY < 5) {
        setShow(true);
        sessionStorage.setItem("etsycraft_exit_shown", "1");
        document.removeEventListener("mouseout", handler);
      }
    };

    const timer = setTimeout(() => document.addEventListener("mouseout", handler), 3000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handler);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center backdrop-blur-sm bg-foreground/30">
      <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center relative animate-in zoom-in-95">
        <h3 className="text-2xl font-bold mb-2">Wait! Get 14 days Pro+ free.</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Try all premium features of EtsyCraft — unlimited generations, 7 languages, direct publishing, and more.
        </p>
        <a href={AI_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground mb-3">
            🚀 Start Free Trial
          </Button>
        </a>
        <button onClick={() => setShow(false)} className="text-sm text-muted-foreground hover:text-foreground underline">
          No thanks, I'll stick with the free plan
        </button>
      </div>
    </div>
  );
}
