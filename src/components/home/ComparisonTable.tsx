import { Check, X, AlertTriangle } from "lucide-react";

const Cell = ({ value }: { value: "yes" | "no" | "partial" | string }) => {
  if (value === "yes") return <Check className="w-5 h-5 text-green-600 mx-auto" />;
  if (value === "no") return <X className="w-5 h-5 text-red-500 mx-auto" />;
  if (value === "partial") return <AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" />;
  return <span className="text-sm">{value}</span>;
};

const rows = [
  { label: "Price", manual: "Free (your time)", etsycraft: "Free / $4.99", outfy: "$12+/mo", erank: "$5.99+/mo" },
  { label: "AI Generation", manual: "no", etsycraft: "yes", outfy: "partial", erank: "no" },
  { label: "Listing SEO", manual: "partial", etsycraft: "yes", outfy: "no", erank: "yes" },
  { label: "Social Media Posts", manual: "partial", etsycraft: "yes", outfy: "yes", erank: "no" },
  { label: "Direct Posting", manual: "no", etsycraft: "yes", outfy: "yes", erank: "no" },
  { label: "Chrome Extension", manual: "no", etsycraft: "yes", outfy: "no", erank: "yes" },
  { label: "Works in Etsy Editor", manual: "yes", etsycraft: "yes", outfy: "no", erank: "no" },
  { label: "Languages", manual: "1", etsycraft: "7", outfy: "partial", erank: "1" },
  { label: "Data Privacy (BYOK)", manual: "yes", etsycraft: "yes", outfy: "no", erank: "no" },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EtsyCraft vs the alternatives?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">See how EtsyCraft compares to doing it manually or using other tools.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Feature</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Manual</th>
                <th className="py-3 px-4 font-semibold text-primary border-x-2 border-primary/20 bg-primary/5">EtsyCraft</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Outfy</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">eRank</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-medium">{row.label}</td>
                  <td className="py-3 px-4 text-center"><Cell value={row.manual} /></td>
                  <td className="py-3 px-4 text-center border-x-2 border-primary/20 bg-primary/5"><Cell value={row.etsycraft} /></td>
                  <td className="py-3 px-4 text-center"><Cell value={row.outfy} /></td>
                  <td className="py-3 px-4 text-center"><Cell value={row.erank} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          "With BYOK you control the AI provider, the cost, and your data. No middleman, no markup."
        </p>
      </div>
    </section>
  );
}
