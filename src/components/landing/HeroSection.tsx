import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Microscope, Landmark, Building2 } from "lucide-react";

const NetworkBg = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <line x1="10%" y1="20%" x2="35%" y2="40%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="35%" y1="40%" x2="60%" y2="25%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="60%" y1="25%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="85%" y1="50%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <line x1="35%" y1="40%" x2="25%" y2="70%" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <line x1="60%" y1="25%" x2="50%" y2="60%" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="10%" cy="20%" r="3" fill="hsl(170 100% 39%)" opacity="0.2" />
    <circle cx="35%" cy="40%" r="4" fill="hsl(170 100% 39%)" opacity="0.15" />
    <circle cx="60%" cy="25%" r="3" fill="hsl(170 100% 39%)" opacity="0.2" />
    <circle cx="85%" cy="50%" r="3.5" fill="hsl(170 100% 39%)" opacity="0.15" />
    <circle cx="70%" cy="75%" r="3" fill="hsl(170 100% 39%)" opacity="0.15" />
    <circle cx="25%" cy="70%" r="2.5" fill="hsl(170 100% 39%)" opacity="0.12" />
    <circle cx="50%" cy="60%" r="3" fill="hsl(170 100% 39%)" opacity="0.12" />
  </svg>
);

const audiences = [
  {
    icon: Microscope,
    title: "Startups & Founders",
    tagline: "Clarity to execute. Confidence to raise.",
    tint: "hsl(170 100% 39% / 0.03)",
  },
  {
    icon: Landmark,
    title: "Investors",
    tagline: "Better signal. Stronger decisions. Aligned capital.",
    tint: "hsl(150 45% 45% / 0.03)",
  },
  {
    icon: Building2,
    title: "Institutions",
    tagline: "Visibility to support. Structure to scale impact.",
    tint: "hsl(160 55% 40% / 0.03)",
  },
];

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden"
    >
      <NetworkBg />

      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full animate-glow"
        style={{ background: 'radial-gradient(ellipse, hsl(170 100% 39% / 0.08), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground">
          Know Where Your Venture Truly Stands.
        </h1>

        <p className="fade-in-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Nexuum is an operating system for life sciences startups — bringing
          clarity to progress, risk and readiness so founders, investors and
          institutions can make better decisions, earlier.
        </p>




        {/* Audience Cards */}
        <div className="fade-in-up grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <a
              key={i}
              href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request"
              className="card-elevated card-top-accent p-6 space-y-3 text-left block"
              style={{ backgroundColor: a.tint }}
            >
              <div className="p-2.5 rounded-lg bg-accent/10 w-fit">
                <a.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.tagline}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
