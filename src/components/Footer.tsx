import { Link } from "react-router-dom";
import { Lock, Key, Flag } from "lucide-react";

const cols = [
  {
    title: "Products",
    links: [
      { label: "EtsyCraft AI", href: "/ai" },
      { label: "Social Engine", href: "/social-engine" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Refund Policy", href: "/legal/refund" },
      { label: "Acceptable Use", href: "/legal/acceptable-use" },
    ],
  },
];

const trust = [
  { icon: Lock, label: "Local processing" },
  { icon: Key, label: "BYOK" },
  { icon: Flag, label: "European company" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="text-lg font-extrabold text-primary">EtsyCraft</span>
          <p className="mt-2 text-sm text-muted-foreground">AI-Powered Tools for Etsy Sellers</p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Trust */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Trust &amp; Security</h4>
          <ul className="space-y-2">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon size={14} className="text-primary" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 text-center text-xs text-muted-foreground">
          © 2026 EtsyCraft | VENTOS ARQUEÁVEIS UNIPESSOAL LDA | support@etsycraft.com
        </div>
      </div>
    </footer>
  );
}
