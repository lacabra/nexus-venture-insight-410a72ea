import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Microscope,
  ShieldCheck,
  Factory,
  DollarSign,
  Shield,
  Activity,
  TrendingUp,
  Handshake,
} from "lucide-react";

const metricCards = [
  { label: "Scientific Maturity", value: "TRL 5", icon: Microscope, borderColor: "hsl(170 100% 39%)" },
  { label: "Regulatory Progress", value: "Phase II", icon: ShieldCheck, borderColor: "hsl(160 55% 40%)" },
  { label: "GMP Readiness", value: "72%", icon: Factory, borderColor: "hsl(150 45% 45%)" },
  { label: "Financial Discipline", value: "$1.2M", icon: DollarSign, borderColor: "hsl(140 40% 50%)" },
];

const impactBars = [
  { label: "Patient Impact", value: 82, color: "hsl(170 100% 39%)" },
  { label: "Accessibility", value: 65, color: "hsl(160 55% 40%)" },
  { label: "Time to Market", value: 71, color: "hsl(150 45% 45%)" },
  { label: "Unmet Need", value: 90, color: "hsl(140 40% 50%)" },
];

const signals = [
  { label: "IP Strength", status: "Strong", icon: Shield, active: true },
  { label: "Clinical Signal", status: "Positive", icon: Activity, active: true },
  { label: "Market Signal", status: "Growing", icon: TrendingUp, active: true },
  { label: "Partnership", status: "In Progress", icon: Handshake, active: false },
];

const SharedCockpitSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="shared-cockpit" ref={ref} className="section-padding section-alt">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section heading */}
        <div className="fade-in-up text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            One Structured View.{" "}
            <span className="highlight-band">Shared.</span>
          </h2>
        </div>

        {/* Dashboard mockup card */}
        <div className="fade-in-up card-elevated p-6 md:p-8 space-y-8">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-xl font-bold text-foreground">NovaBio Therapeutics</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold gradient-text">78</span>
                <span className="text-sm text-muted-foreground font-medium">/ 100</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                On Track
              </span>
            </div>
          </div>

          {/* 4 Metric cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricCards.map((m, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4 space-y-2"
                style={{ borderTop: `2px solid ${m.borderColor}` }}
              >
                <div className="flex items-center gap-2">
                  <m.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{m.label}</span>
                </div>
                <p className="text-2xl font-extrabold text-foreground">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Impact Breakdown */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Impact Breakdown</h4>
            <div className="space-y-3">
              {impactBars.map((bar, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{bar.label}</span>
                    <span className="font-semibold text-foreground">{bar.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${bar.value}%`, backgroundColor: bar.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signals row */}
          <div className="flex gap-4 flex-wrap">
            {signals.map((s, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 text-sm ${
                  s.active ? "text-accent" : "text-muted-foreground"
                }`}
              >
                <s.icon className="h-4 w-4" strokeWidth={1.5} />
                <span>
                  {s.active ? "✓" : "○"} {s.status}
                </span>
                <span className={s.active ? "text-foreground font-medium" : "text-muted-foreground"}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Closing tagline */}
          <p className="text-center text-muted-foreground text-sm italic mt-6">
            Measured progress. Comparable impact. Shared reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SharedCockpitSection;
