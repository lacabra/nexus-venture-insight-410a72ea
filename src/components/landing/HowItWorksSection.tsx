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
  const sectionStyle = {
    backgroundColor: "hsl(188 61% 7%)",
    backgroundImage:
      "radial-gradient(circle at 30% 20%, hsl(189 54% 12%) 0%, hsl(188 61% 7%) 60%, hsl(188 67% 5%) 100%)",
    opacity: 1,
    filter: "none",
  } satisfies React.CSSProperties;

  return (
    <section id="how-it-works" ref={ref} className="section-padding relative" style={sectionStyle}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="fade-in-up text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]" style={{ color: 'hsl(0 0% 100%)' }}>
            From Fragmented Inputs to{" "}
            <span className="gradient-text">Actionable Intelligence</span>
          </h2>
        </div>

        <div className="fade-in-up grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 md:p-10 space-y-5 group transition-all duration-300 hover:bg-[#0F2E33]"
              style={{
                background: i % 2 === 0 ? 'hsl(188 52% 11%)' : 'hsl(188 54% 12%)',
                borderRadius: i === 0 ? '1rem 0 0 1rem' :
                  i === steps.length - 1 ? '0 1rem 1rem 0' : '0',
                boxShadow: '0 16px 36px hsl(188 67% 5% / 0.18)',
              }}
            >
              <span className="text-4xl font-light gradient-text opacity-50 block tracking-tight">{step.num}</span>
              <h3 className="text-lg font-semibold" style={{ color: 'hsl(0 0% 100%)' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(189 16% 61%)' }}>{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-16 -translate-y-1/2"
                  style={{ background: 'linear-gradient(180deg, transparent, hsl(163 60% 44% / 0.25), transparent)' }}
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
