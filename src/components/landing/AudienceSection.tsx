import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Microscope, Building2, Landmark } from "lucide-react";

const audiences = [
  {
    icon: Microscope,
    title: "Startups & Founders",
    tagline: "Clarity to execute. Confidence to raise.",
    points: [
      "Understand venture status across science, risk and progress",
      "Replace scattered tools",
      "Communicate clearly",
      "Identify gaps early",
      "Strengthen fundraising",
    ],
  },
  {
    icon: Building2,
    title: "Institutions",
    tagline: "Visibility to support. Structure to scale impact.",
    points: [
      "Monitor portfolios consistently",
      "Identify where support is needed",
      "Move to proactive management",
      "Reduce reporting burden",
      "Demonstrate impact",
    ],
  },
  {
    icon: Landmark,
    title: "Investors",
    tagline: "Better signal. Stronger decisions. Aligned capital.",
    points: [
      "Move beyond pitch decks",
      "Track in real time",
      "Identify risk earlier",
      "Allocate capital confidently",
      "Evaluate impact + financials together",
    ],
  },
];

const AudienceSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="audience" ref={ref} className="section-padding section-alt">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Built for Those Making, Funding and Supporting Science
          </h2>
        </div>

        <div className="fade-in-up grid md:grid-cols-3 gap-8">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300 space-y-5"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit">
                <a.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
              <p className="text-sm text-primary font-medium">{a.tagline}</p>
              <ul className="space-y-2.5">
                {a.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
