import { experience } from "@/lib/data";
import { Chip, Reveal, SectionHeading, SpotlightCard } from "./ui";

const ExperienceNarrative = () => (
  <section id="experience" className="mx-auto max-w-container px-5 py-28">
    <SectionHeading
      kicker="Experience"
      title="Modules I own, not just tickets I closed"
      sub="Each card is a part of a production product I built or took over, from the database to the interface."
    />
    <div className="flex flex-col gap-16">
      {experience.map((job, j) => (
        <div key={job.company} className="grid gap-8 lgl:grid-cols-[280px_1fr]">
          <Reveal className="lgl:sticky lgl:top-28 lgl:self-start">
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${j === 0 ? "animate-pulseDot bg-accent" : "bg-white/30"}`} />
              <span className="font-monoFont text-xs uppercase tracking-[0.2em] text-muted">{job.period}</span>
            </div>
            <h3 className="mt-3 font-titleFont text-2xl font-bold text-white">{job.role}</h3>
            <p className="mt-1 text-accent">{job.company}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>
          </Reveal>
          <div className="grid gap-4 sml:grid-cols-2">
            {job.modules.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 0.08}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col gap-3 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-titleFont text-lg font-semibold text-white transition-colors group-hover:text-accent">{m.title}</h4>
                      <span className="font-monoFont text-[11px] text-white/30">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-muted">{m.line}</p>
                    {m.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {m.tech.map((x) => (
                          <Chip key={x}>{x}</Chip>
                        ))}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceNarrative;
