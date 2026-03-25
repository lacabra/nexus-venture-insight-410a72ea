import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Presentation, Gauge, BarChart3 } from "lucide-react";

const products = [
  {
    icon: Presentation,
    title: "Fundraising Basics",
    desc: "Structure your story and share it clearly",
  },
  {
    icon: Gauge,
    title: "Project Cockpit",
    desc: "Run your venture as a living system",
  },
  {
    icon: BarChart3,
    title: "Portfolio Intelligence",
    desc: "Monitor and support ventures at scale",
  },
];

const ProductSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="products" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Flexible Entry Points. One Shared Model.
          </h2>
        </div>

        <div className="fade-in-up grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors w-fit">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
