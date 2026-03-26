import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NetworkBg = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    {/* Connecting lines */}
    <line x1="10%" y1="20%" x2="35%" y2="40%" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <line x1="35%" y1="40%" x2="60%" y2="25%" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <line x1="60%" y1="25%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <line x1="85%" y1="50%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <line x1="35%" y1="40%" x2="25%" y2="70%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="60%" y1="25%" x2="50%" y2="60%" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    {/* Nodes */}
    <circle cx="10%" cy="20%" r="3" fill="hsl(160 40% 55%)" opacity="0.3" />
    <circle cx="35%" cy="40%" r="4" fill="hsl(160 40% 55%)" opacity="0.25" />
    <circle cx="60%" cy="25%" r="3" fill="hsl(160 40% 55%)" opacity="0.3" />
    <circle cx="85%" cy="50%" r="3.5" fill="hsl(160 40% 55%)" opacity="0.2" />
    <circle cx="70%" cy="75%" r="3" fill="hsl(160 40% 55%)" opacity="0.25" />
    <circle cx="25%" cy="70%" r="2.5" fill="hsl(160 40% 55%)" opacity="0.2" />
    <circle cx="50%" cy="60%" r="3" fill="hsl(160 40% 55%)" opacity="0.2" />
  </svg>
);

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden"
    >
      <NetworkBg />
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
          Understand Where You Stand.{" "}
          <span className="text-primary">Advance What Matters.</span>
        </h1>
        <p className="fade-in-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Nexuum is a shared intelligence layer for life sciences — bringing
          clarity to progress, risk and readiness so founders, investors and
          institutions can make better decisions, earlier.
        </p>
        <div className="fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" aria-label="Request early access via email">Request Early Access</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
