import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileInput, Layers, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: FileInput,
    title: "Ingest",
    desc: "Ingests decks, documents, spreadsheets and updates",
  },
  {
    icon: Layers,
    title: "Structure",
    desc: "Structures them into a shared framework",
  },
  {
    icon: BarChart3,
    title: "Intelligence",
    desc: "Creates a real-time view of progress, risk and readiness",
  },
];

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="solution" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            A Shared Intelligence Layer for Life Sciences
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nexuum transforms what already exists into a structured, living model
            of your venture.
          </p>
        </div>

        <div className="fade-in-up grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300 space-y-4 h-full">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <p className="fade-in-up text-center text-lg font-medium text-foreground/80 italic">
          One structured view. Shared. Always current.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
