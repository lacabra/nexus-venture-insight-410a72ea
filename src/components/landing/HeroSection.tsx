import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Microscope, Landmark, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Microscope,
    title: "Startups & Founders",
    tagline: "Clarity to execute. Confidence to raise.",
  },
  {
    icon: Landmark,
    title: "Investors",
    tagline: "Better signal. Stronger decisions. Aligned capital.",
  },
  {
    icon: Building2,
    title: "Institutions",
    tagline: "Visibility to support. Structure to scale impact.",
  },
];

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden section-dark dot-pattern"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full animate-glow pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, hsl(168 76% 36% / 0.1), transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Secondary glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, hsl(168 76% 36% / 0.05), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06]" style={{ color: 'hsl(155 12% 95%)' }}>
          Know Where Your Venture Truly Stands.
        </h1>

        <p className="fade-in-up text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: 'hsl(155 10% 65%)' }}>
          Nexuum is an operating system for life sciences startups — bringing
          clarity to progress, risk and readiness so founders, investors and
          institutions can make better decisions, earlier.
        </p>

        {/* Audience Cards */}
        <div className="fade-in-up grid md:grid-cols-3 gap-5 pt-4 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <a
              key={i}
              href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request"
              className="card-dark p-7 space-y-4 text-left block group"
            >
              <div className="p-2.5 rounded-xl w-fit" style={{ background: 'hsl(168 76% 36% / 0.1)' }}>
                <a.icon className="h-5 w-5 text-electric-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: 'hsl(155 12% 92%)' }}>{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(155 10% 55%)' }}>{a.tagline}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
