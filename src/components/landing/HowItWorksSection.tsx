import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Ingest",
    desc: "Bring in existing materials — decks, reports, spreadsheets, data rooms",
  },
  {
    num: "02",
    title: "Structure",
    desc: "Map everything into a standardized venture model",
  },
  {
    num: "03",
    title: "Generate Intelligence",
    desc: "Reveal gaps, track milestones and assess readiness",
  },
  {
    num: "04",
    title: "Share",
    desc: "Provide a consistent, up-to-date view to stakeholders",
  },
];

const HowItWorksSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" ref={ref} className="section-padding section-dark grid-pattern relative">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-white">
            From Fragmented Inputs to{" "}
            <span className="gradient-text">Actionable Intelligence</span>
          </h2>
        </div>

        <div className="fade-in-up grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 md:p-10 space-y-5 group transition-all duration-300"
              style={{
                background: i % 2 === 0
                  ? 'hsl(195 48% 9%)'
                  : 'hsl(195 42% 11%)',
                borderRadius: i === 0 ? '1rem 0 0 1rem' :
                  i === steps.length - 1 ? '0 1rem 1rem 0' : '0',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'hsl(195 42% 13%)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = i % 2 === 0 ? 'hsl(195 48% 9%)' : 'hsl(195 42% 11%)'; }}
            >
              <span className="text-4xl font-light gradient-text opacity-40 block tracking-tight">{step.num}</span>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#7A9A9E]">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-16 -translate-y-1/2"
                  style={{ background: 'linear-gradient(180deg, transparent, hsl(168 65% 32% / 0.25), transparent)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
