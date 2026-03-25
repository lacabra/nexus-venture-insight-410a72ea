import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, ShieldAlert, TrendingUp, CheckCircle2 } from "lucide-react";

const dimensions = [
  {
    icon: Sparkles,
    title: "Impact",
    desc: "What is the real potential of the science?",
  },
  {
    icon: ShieldAlert,
    title: "Risk",
    desc: "Where are the key uncertainties?",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    desc: "What has been achieved and what remains?",
  },
  {
    icon: CheckCircle2,
    title: "Readiness",
    desc: "How prepared is the venture for its next step?",
  },
];

const FrameworkSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="framework" ref={ref} className="section-padding section-alt">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            A Common Language for Better Decisions
          </h2>
        </div>

        <div className="fade-in-up grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dimensions.map((dim, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300 space-y-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit">
                <dim.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{dim.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{dim.desc}</p>
            </div>
          ))}
        </div>

        <p className="fade-in-up text-center text-muted-foreground max-w-xl mx-auto leading-relaxed">
          This enables comparability, alignment and better decisions across the
          ecosystem.
        </p>
      </div>
    </section>
  );
};

export default FrameworkSection;
