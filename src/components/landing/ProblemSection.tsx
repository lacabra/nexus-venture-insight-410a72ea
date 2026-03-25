import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileWarning, Eye, TrendingDown } from "lucide-react";

const problems = [
  { icon: FileWarning, text: "Data scattered across decks, reports and tools" },
  { icon: Eye, text: "No consistent way to measure progress or risk" },
  { icon: TrendingDown, text: "Each stakeholder sees a different version of reality" },
];

const consequences = [
  "Founders spend time explaining instead of executing",
  "Institutions lack visibility across portfolios",
  "Capital is allocated based on narrative, not evidence",
];

const ProblemSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="problem" ref={ref} className="section-padding section-alt">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Capital Cannot Support What It Cannot Understand
          </h2>
        </div>

        <div className="fade-in-up grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Problems */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              The Problem
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Life sciences ventures operate in fragmented environments:
            </p>
            <ul className="space-y-5">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 p-2 rounded-md bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consequences */}
          <div className="space-y-6 md:border-l md:border-border md:pl-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              The Consequence
            </p>
            <p className="text-muted-foreground leading-relaxed">As a result:</p>
            <ul className="space-y-4">
              {consequences.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 block h-2 w-2 rounded-full bg-primary/40 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
