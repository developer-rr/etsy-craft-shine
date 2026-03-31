import { Zap, Tag, Globe, DollarSign } from "lucide-react";

const stats = [
  { icon: Zap, value: "<5 sec", label: "Generation time" },
  { icon: Tag, value: "13", label: "Tags per listing" },
  { icon: Globe, value: "7", label: "Languages" },
  { icon: DollarSign, value: "~$0.0003", label: "Per generation" },
];

export default function TrustBar() {
  return (
    <section className="bg-card border-y">
      <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <Icon size={20} className="text-primary mb-1" />
            <span className="text-2xl font-bold text-primary">{value}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
