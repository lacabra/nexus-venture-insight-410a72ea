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
  { label: "Scientific Maturity", value: "TRL 5", icon: Microscope, borderColor: "hsl(168 65% 32%)" },
  { label: "Regulatory Progress", value: "Phase II", icon: ShieldCheck, borderColor: "hsl(160 50% 36%)" },
  { label: "GMP Readiness", value: "72%", icon: Factory, borderColor: "hsl(150 42% 40%)" },
  { label: "Financial Discipline", value: "$1.2M", icon: DollarSign, borderColor: "hsl(145 38% 44%)" },
];

const impactBars = [
  { label: "Patient Impact", value: 82, color: "hsl(168 65% 32%)" },
  { label: "Accessibility", value: 65, color: "hsl(160 50% 36%)" },
  { label: "Time to Market", value: 71, color: "hsl(150 42% 40%)" },
  { label: "Unmet Need", value: 90, color: "hsl(145 38% 44%)" },
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, hsl(168 65% 32% / 0.08), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto space-y-14">
        {/* Section heading */}
        <div className="fade-in-up text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-white">
            One Structured View.{" "}
            <span className="highlight-band">Shared.</span>
          </h2>
        </div>

        {/* Dashboard mockup card */}
        <div className="fade-in-up card-dark p-8 md:p-12 space-y-10">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-xl font-bold text-white">NovaBio Therapeutics</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold gradient-text">78</span>
                <span className="text-sm font-medium text-[#7A9A9E]">/ 100</span>
              </div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-electric-teal/12 text-electric-teal">
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
                  background: 'hsl(195 48% 10%)',
                  borderTop: `2px solid ${m.borderColor}`,
                  boxShadow: '0 2px 8px hsl(195 55% 4% / 0.3)',
                }}
              >
                <div className="flex items-center gap-2">
                  <m.icon className="h-4 w-4 text-electric-teal" strokeWidth={1.5} />
                  <span className="text-[11px] uppercase tracking-wider text-[#7A9A9E]">{m.label}</span>
                </div>
                <p className="text-2xl font-extrabold text-white">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Impact Breakdown */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7A9A9E]">Impact Breakdown</h4>
            <div className="space-y-4">
              {impactBars.map((bar, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#7A9A9E]">{bar.label}</span>
                    <span className="font-semibold text-white/90">{bar.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'hsl(195 42% 14%)' }}>
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
                style={{ color: s.active ? 'hsl(168 65% 38%)' : 'hsl(195 10% 40%)' }}
              >
                <s.icon className="h-4 w-4" strokeWidth={1.5} />
                <span>
                  {s.active ? "✓" : "○"} {s.status}
                </span>
                <span className={s.active ? 'text-white/85 font-medium' : 'text-[#5A7A7E]'}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Closing tagline */}
          <p className="text-center text-sm italic mt-8 text-[#7A9A9E]">
            Measured progress. Comparable impact. Shared reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SharedCockpitSection;
