import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClosingSection = () => {
  const ref = useScrollAnimation();
  const sectionStyle = {
    backgroundColor: "hsl(188 61% 7%)",
    backgroundImage:
      "radial-gradient(circle at 30% 20%, hsl(189 54% 12%) 0%, hsl(188 61% 7%) 60%, hsl(188 67% 5%) 100%)",
    opacity: 1,
    filter: "none",
  } satisfies React.CSSProperties;

  return (
    <section id="closing" ref={ref} className="section-padding relative overflow-hidden" style={sectionStyle}>
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
        <h2 className="fade-in-up text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]" style={{ color: 'hsl(0 0% 100%)' }}>
          Designed for Decisions That{" "}
          <span className="gradient-text">Matter.</span>
        </h2>
        <p className="fade-in-up text-lg leading-relaxed" style={{ color: 'hsl(190 17% 70%)' }}>
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
