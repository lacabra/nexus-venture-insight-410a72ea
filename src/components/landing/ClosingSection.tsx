import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClosingSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="closing" ref={ref} className="section-padding section-dark grid-pattern relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full animate-glow pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(45,180,140,0.08), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
        <h2 className="fade-in-up text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]" style={{ color: '#FFFFFF' }}>
          Designed for Decisions That{" "}
          <span className="gradient-text">Matter.</span>
        </h2>
        <p className="fade-in-up text-lg leading-relaxed" style={{ color: '#A7BCC0' }}>
          Nexuum delivers a shared, continuously updated view for better, faster high-impact decisions.
        </p>
        <div className="fade-in-up flex items-center justify-center">
          <Button
            size="lg"
            className="px-10 h-13 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" aria-label="Request early access via email">Request Early Access</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
