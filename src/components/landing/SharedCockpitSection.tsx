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
  { label: "Scientific Maturity", value: "TRL 5", icon: Microscope, borderColor: "#3CC9A3" },
  { label: "Regulatory Progress", value: "Phase II", icon: ShieldCheck, borderColor: "#36B896" },
  { label: "GMP Readiness", value: "72%", icon: Factory, borderColor: "#30A78A" },
  { label: "Financial Discipline", value: "$1.2M", icon: DollarSign, borderColor: "#2A967E" },
];

const impactBars = [
  { label: "Patient Impact", value: 82, color: "#3CC9A3" },
  { label: "Accessibility", value: 65, color: "#36B896" },
  { label: "Time to Market", value: 71, color: "#30A78A" },
  { label: "Unmet Need", value: 90, color: "#2A967E" },
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
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(45,180,140,0.06), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto space-y-14">
        <div className="fade-in-up text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]" style={{ color: '#FFFFFF' }}>
            One Structured View.{" "}
            <span className="highlight-band">Shared.</span>
          </h2>
        </div>

        <div className="fade-in-up card-dark p-8 md:p-12 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-xl font-bold" style={{ color: '#FFFFFF' }}>NovaBio Therapeutics</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold gradient-text">78</span>
                <span className="text-sm font-medium" style={{ color: '#8AABB0' }}>/ 100</span>
              </div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: 'rgba(60,201,163,0.15)', color: '#3CC9A3' }}>
                On Track
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricCards.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-5 space-y-3"
                style={{
                  background: '#0A2226',
                  borderTop: `2px solid ${m.borderColor}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                }}
              >
                <div className="flex items-center gap-2">
                  <m.icon className="h-4 w-4" style={{ color: '#3CC9A3' }} strokeWidth={1.5} />
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: '#8AABB0' }}>{m.label}</span>
                </div>
                <p className="text-2xl font-extrabold" style={{ color: '#FFFFFF' }}>{m.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: '#8AABB0' }}>Impact Breakdown</h4>
            <div className="space-y-4">
              {impactBars.map((bar, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: '#8AABB0' }}>{bar.label}</span>
                    <span className="font-semibold" style={{ color: '#E0ECEE' }}>{bar.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#0A2226' }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${bar.value}%`, backgroundColor: bar.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-5 flex-wrap">
            {signals.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm"
                style={{ color: s.active ? '#3CC9A3' : '#5A7A80' }}
              >
                <s.icon className="h-4 w-4" strokeWidth={1.5} />
                <span>{s.active ? "✓" : "○"} {s.status}</span>
                <span style={{ color: s.active ? '#E0ECEE' : '#5A7A80', fontWeight: s.active ? 500 : 400 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm italic mt-8" style={{ color: '#8AABB0' }}>
            Measured progress. Comparable impact. Shared reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SharedCockpitSection;
