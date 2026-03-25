import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClosingSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="closing" ref={ref} className="section-padding section-alt">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="fade-in-up text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Clarity Drives Better Decisions
        </h2>
        <p className="fade-in-up text-lg text-muted-foreground leading-relaxed">
          Nexuum helps you understand where things stand — and what to do next.
        </p>
        <div className="fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">Request Early Access</Button>
          <Button variant="outline" size="lg">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
