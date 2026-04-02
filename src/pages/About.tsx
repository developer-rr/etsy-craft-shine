import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Sparkles, Share2, BarChart3, Search, Mail, MapPin, ArrowRight } from "lucide-react";

const ecosystem = [
  { icon: Sparkles, name: "EtsyCraft AI", desc: "SEO listing generator", status: "live", color: "bg-primary" },
  { icon: Share2, name: "Social Engine", desc: "Social media content", status: "live", color: "bg-secondary" },
  { icon: BarChart3, name: "Profit Lens", desc: "Profit & fee calculator", status: "coming", color: "bg-muted" },
  { icon: Search, name: "Search Radar", desc: "Keyword & trend tracker", status: "coming", color: "bg-muted" },
];

export default function About() {
  return (
    <Layout>
      <SEO title="About EtsyCraft — AI Tools for Etsy Sellers" description="Built for Etsy sellers by a European team with 20+ years in IP and e-commerce. Learn about EtsyCraft's mission and ecosystem." path="/about" />
      <section className="py-16 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">Built for Etsy sellers, by people who understand IP</h1>
          <p className="text-lg text-muted-foreground">We believe every Etsy seller — from first-time creators to established shops — deserves access to powerful AI tools.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our mission</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>EtsyCraft was born from a simple frustration: writing Etsy listings is time-consuming, and promoting them on social media is even worse. We saw sellers spending hours on tasks that AI could handle in seconds.</p>
            <p>Our goal is to make AI-powered tools accessible to every Etsy seller — regardless of technical skill or budget. That's why we use the BYOK (Bring Your Own Key) model: you control your AI costs, your data stays local, and you're never locked into expensive subscriptions.</p>
            <p>We're building an ecosystem of Chrome extensions that work right inside the Etsy editor. No separate apps, no complex workflows — just powerful tools that fit naturally into how you already work.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-surface-warm">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our team</h2>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">We're a small European team with 20+ years of combined experience in intellectual property, e-commerce, and software development.</p>
            <p className="text-muted-foreground leading-relaxed">We understand the challenges Etsy sellers face because we've worked closely with creators, rights holders, and marketplace platforms. This unique perspective shapes everything we build.</p>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">The EtsyCraft ecosystem</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystem.map((item, i) => (
              <div key={i} className="relative rounded-2xl border border-border bg-card p-6 text-center">
                {item.status === "coming" && (
                  <span className="absolute top-3 right-3 text-xs font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Coming Soon</span>
                )}
                {item.status === "live" && (
                  <span className="absolute top-3 right-3 text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">✅ Live</span>
                )}
                <div className={`w-12 h-12 rounded-full ${item.status === "live" ? "bg-primary/10" : "bg-muted"} flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className={`w-6 h-6 ${item.status === "live" ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
                {i < ecosystem.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="py-16 bg-surface-warm">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Company information</h2>
          <div className="bg-card rounded-2xl border border-border p-8 space-y-3 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">VENTOS ARQUEÁVEIS UNIPESSOAL LDA</p>
            <p className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4" /> Portugal, European Union</p>
            <p className="flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> support@craftpilotapp.com</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
