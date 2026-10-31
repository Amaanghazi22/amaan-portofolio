import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";
import { featured, type Featured } from "@/lib/data";
import { BuilderMock, ReviewMock, SmritiChat } from "./Mocks";
import { Chip, Reveal, SectionHeading, SpotlightCard } from "./ui";

const tone = {
  cyan: { rgb: "34, 211, 238", text: "text-accent", dot: "bg-accent" },
  violet: { rgb: "167, 139, 250", text: "text-violet", dot: "bg-violet" },
  amber: { rgb: "251, 191, 36", text: "text-amber", dot: "bg-amber" },
};

const visual = { smriti: <SmritiChat />, builders: <BuilderMock />, abstracts: <ReviewMock /> } as Record<string, JSX.Element>;

const Project = ({ p, index }: { p: Featured; index: number }) => {
  const t = tone[p.accent];
  return (
    <Reveal>
      <SpotlightCard color={t.rgb} className="hover:bg-white/[0.04]">
        <div className={`grid items-center gap-10 p-6 sml:p-8 lgl:grid-cols-2 lgl:gap-14 lgl:p-12 ${index % 2 ? "lgl:[&>*:first-child]:order-2" : ""}`}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`font-monoFont text-xs uppercase tracking-[0.2em] ${t.text}`}>{p.eyebrow}</span>
              {p.badge && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400" /> {p.badge}
                </span>
              )}
            </div>
            <h3 className="font-titleFont text-3xl font-bold tracking-tight text-white lgl:text-4xl">{p.title}</h3>
            <p className="leading-relaxed text-muted">{p.pitch}</p>
            <ul className="flex flex-col gap-2.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm leading-relaxed text-white/80">
                  <FiCheck className={`mt-0.5 shrink-0 ${t.text}`} />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((x) => (
                <Chip key={x}>{x}</Chip>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              {p.caseStudy && (
                <Link href={p.caseStudy} className="btn-primary">
                  Read the case study <FiArrowRight />
                </Link>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-ghost">
                  {p.slug === "smriti" ? "Try it live" : "Visit Eventify"} <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
          <div className="relative">
            <div aria-hidden className={`absolute inset-10 -z-10 rounded-full opacity-30 blur-[80px] ${t.dot}`} />
            {visual[p.slug]}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
};

const FeaturedProjects = () => (
  <section id="work" className="mx-auto max-w-container px-5 py-28">
    <SectionHeading
      kicker="Selected work"
      title="Things I've built and shipped"
      sub="One product of my own with real users, and two large platforms I built at Eventify."
    />
    <div className="flex flex-col gap-8">
      {featured.map((p, i) => (
        <Project key={p.slug} p={p} index={i} />
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
