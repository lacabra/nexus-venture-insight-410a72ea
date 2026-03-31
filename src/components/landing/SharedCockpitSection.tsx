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
  { label: "Scientific Maturity", value: "TRL 5", icon: Microscope, borderColor: "hsl(168 76% 36%)" },
  { label: "Regulatory Progress", value: "Phase II", icon: ShieldCheck, borderColor: "hsl(160 55% 40%)" },
  { label: "GMP Readiness", value: "72%", icon: Factory, borderColor: "hsl(150 45% 45%)" },
  { label: "Financial Discipline", value: "$1.2M", icon: DollarSign, borderColor: "hsl(140 40% 50%)" },
];

const impactBars = [
  { label: "Patient Impact", value: 82, color: "hsl(168 76% 36%)" },
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
    <section id="shared-cockpit" ref={ref} className="section-padding section-dark grid-pattern relative">
      {/* Glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, hsl(168 76% 36% / 0.06), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto space-y-14">
        {/* Section heading */}
        <div className="fade-in-up text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]" style={{ color: 'hsl(155 12% 92%)' }}>
            One Structured View.{" "}
            <span className="highlight-band">Shared.</span>
          </h2>
        </div>

        {/* Dashboard mockup card */}
        <div className="fade-in-up card-dark p-7 md:p-10 space-y-8">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-xl font-bold" style={{ color: 'hsl(155 12% 92%)' }}>NovaBio Therapeutics</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold gradient-text">78</span>
                <span className="text-sm font-medium" style={{ color: 'hsl(155 10% 55%)' }}>/ 100</span>
              </div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: 'hsl(168 76% 36% / 0.12)', color: 'hsl(168 76% 42%)' }}>
                On Track
              </span>
            </div>
          </div>

          {/* 4 Metric cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricCards.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-5 space-y-3"
                style={{
                  background: 'hsl(202 50% 11% / 0.5)',
                  borderTop: `2px solid ${m.borderColor}`,
                  border: '1px solid hsl(155 20% 80% / 0.06)',
                  borderTopColor: m.borderColor,
                  borderTopWidth: '2px',
                }}
              >
                <div className="flex items-center gap-2">
                  <m.icon className="h-4 w-4 text-electric-teal" strokeWidth={1.5} />
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: 'hsl(155 10% 50%)' }}>{m.label}</span>
                </div>
                <p className="text-2xl font-extrabold" style={{ color: 'hsl(155 12% 92%)' }}>{m.value}</p>
              </div>
            ))}
          </div>

          {/* Impact Breakdown */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: 'hsl(155 10% 55%)' }}>Impact Breakdown</h4>
            <div className="space-y-4">
              {impactBars.map((bar, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: 'hsl(155 10% 55%)' }}>{bar.label}</span>
                    <span className="font-semibold" style={{ color: 'hsl(155 12% 88%)' }}>{bar.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'hsl(202 50% 14%)' }}>
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
          <div className="flex gap-5 flex-wrap">
            {signals.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm"
                style={{ color: s.active ? 'hsl(168 76% 42%)' : 'hsl(155 10% 45%)' }}
              >
                <s.icon className="h-4 w-4" strokeWidth={1.5} />
                <span>
                  {s.active ? "✓" : "○"} {s.status}
                </span>
                <span style={{ color: s.active ? 'hsl(155 12% 85%)' : 'hsl(155 10% 45%)', fontWeight: s.active ? 500 : 400 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Closing tagline */}
          <p className="text-center text-sm italic mt-8" style={{ color: 'hsl(155 10% 50%)' }}>
            Measured progress. Comparable impact. Shared reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SharedCockpitSection;
