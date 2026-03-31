import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Presentation, Gauge, BarChart3 } from "lucide-react";

const products = [
  {
    icon: Presentation,
    title: "Fundraising Basics",
    tag: "Starter",
    desc: "Structure your story and share it clearly. Build investor-ready narratives backed by structured data.",
  },
  {
    icon: Gauge,
    title: "Project Cockpit",
    tag: "Core",
    desc: "Run your venture as a living system. Track progress, risk and readiness in one unified view.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Intelligence",
    tag: "Scale",
    desc: "Monitor and support ventures at scale. Gain portfolio-level visibility with real-time intelligence.",
  },
];

const ProductSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="products" ref={ref} className="section-padding section-light relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.15]">
            Flexible Entry Points.{" "}
            <span className="gradient-text">One Shared Model.</span>
          </h2>
        </div>

        <div className="fade-in-up grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="card-elevated p-10 space-y-5 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent/8">
                  <p.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent bg-accent/8 px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              {/* Subtle bottom accent line */}
              <div className="pt-4">
                <div className="h-px w-12 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(168 76% 36%), transparent)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
