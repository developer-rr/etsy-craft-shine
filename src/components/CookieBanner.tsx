import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("etsycraft_cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const respond = (choice: "accepted" | "rejected" | "configure") => {
    if (choice === "configure") {
      // For now, treat configure as accepted with minimal cookies
      localStorage.setItem("etsycraft_cookie_consent", "minimal");
    } else {
      localStorage.setItem("etsycraft_cookie_consent", choice);
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[999] bg-card border-t border-border shadow-lg">
      <div className="container max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies to improve your experience. By continuing, you agree to our{" "}
          <a href="/legal/cookies" className="text-primary underline">Cookie Policy</a>.
        </p>
        <div className="flex gap-2 shrink-0">
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground" onClick={() => respond("accepted")}>
            Accept
          </Button>
          <Button size="sm" variant="outline" onClick={() => respond("configure")}>Configure</Button>
          <Button size="sm" variant="ghost" onClick={() => respond("rejected")}>Reject</Button>
        </div>
      </div>
    </div>
  );
}
