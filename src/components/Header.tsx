import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { label: "EtsyCraft AI", href: "/ai" },
  { label: "Social Engine", href: "/social-engine" },
];

const tools = [
  { label: "Etsy Tag Generator", href: "/tools/etsy-tag-generator" },
  { label: "Description Generator", href: "/tools/etsy-description-generator" },
  { label: "Title Generator", href: "/tools/etsy-title-generator" },
  { label: "Listing Generator", href: "/tools/etsy-listing-generator" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        {label} <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-card border shadow-lg py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-extrabold text-primary">EtsyCraft</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Dropdown label="Products" items={products} />
          <Link to="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Pricing</Link>
          <Dropdown label="Tools" items={tools} />
          <Link to="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/ai"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            Install Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-card px-4 pb-4 space-y-3">
          <p className="pt-3 text-xs font-semibold text-muted-foreground uppercase">Products</p>
          {products.map((p) => (
            <Link key={p.href} to={p.href} onClick={() => setMobileOpen(false)} className="block text-sm text-foreground py-1">{p.label}</Link>
          ))}
          <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block text-sm text-foreground py-1">Pricing</Link>
          <p className="pt-2 text-xs font-semibold text-muted-foreground uppercase">Tools</p>
          {tools.map((t) => (
            <Link key={t.href} to={t.href} onClick={() => setMobileOpen(false)} className="block text-sm text-foreground py-1">{t.label}</Link>
          ))}
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block text-sm text-foreground py-1">Blog</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-sm text-foreground py-1">About</Link>
          <Link
            to="/ai"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-3 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            Install Free
          </Link>
        </div>
      )}
    </header>
  );
}
