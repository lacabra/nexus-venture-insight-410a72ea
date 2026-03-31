import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Microscope, Landmark, Building2 } from "lucide-react";

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
      {/* Subtle emerald glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full animate-glow pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(45,180,140,0.1), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-14">
        {/* Headline — pure white, maximum contrast */}
        <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06]" style={{ color: '#FFFFFF' }}>
          Know Where Your Venture Truly Stands.
        </h1>

        {/* Subtext — clear readable grey */}
        <p className="fade-in-up text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: '#A7BCC0' }}>
          Nexuum is an operating system for life sciences startups — bringing
          clarity to progress, risk and readiness so founders, investors and
          institutions can make better decisions, earlier.
        </p>

        {/* Audience Cards */}
        <div className="fade-in-up grid md:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <a
              key={i}
              href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request"
              className="card-dark p-8 space-y-5 text-left block group"
            >
              <div className="p-3 rounded-xl w-fit" style={{ background: 'rgba(45,180,140,0.12)' }}>
                <a.icon className="h-5 w-5" style={{ color: '#3CC9A3' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8AABB0' }}>{a.tagline}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
