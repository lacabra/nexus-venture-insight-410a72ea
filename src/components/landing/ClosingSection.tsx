import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClosingSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="closing" ref={ref} className="section-padding section-alt">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="fade-in-up text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Clarity Drives Better Decisions.
        </h2>
        <p className="fade-in-up text-lg text-muted-foreground leading-relaxed">
          Nexuum helps you understand where things stand — and what to do next.
        </p>
        <div className="fade-in-up flex items-center justify-center">
          <Button size="lg" asChild>
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" aria-label="Request early access via email">Request Early Access</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
