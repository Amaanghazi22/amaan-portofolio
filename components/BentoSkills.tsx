import { FiCloud, FiCode, FiCpu, FiServer, FiShield } from "react-icons/fi";
import { skills } from "@/lib/data";
import { Reveal, SectionHeading, SpotlightCard } from "./ui";

const icons = [<FiCode key="f" />, <FiServer key="b" />, <FiCpu key="a" />, <FiCloud key="c" />, <FiShield key="q" />];
const spans = ["lgl:col-span-7", "lgl:col-span-5", "lgl:col-span-5", "lgl:col-span-4", "lgl:col-span-3"];

const BentoSkills = () => (
  <section id="skills" className="mx-auto max-w-container px-5 py-28">
    <SectionHeading kicker="Skills" title="What I work with every day" sub="Tools I have used in production, not just in tutorials." />
    <div className="grid gap-4 lgl:grid-cols-12">
      {skills.map((s, i) => (
        <Reveal key={s.group} delay={i * 0.06} className={spans[i]}>
          <SpotlightCard className="h-full" color={i === 2 ? "167, 139, 250" : "34, 211, 238"}>
            <div className="flex h-full flex-col gap-5 p-6 lgl:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-lg text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/40">
                  {icons[i]}
                </span>
                <h3 className="font-titleFont text-xl font-semibold text-white">{s.group}</h3>
                {s.group === "AI" && <span className="rounded-full bg-violet/15 px-2 py-0.5 text-[10px] font-semibold text-violet">NEW</span>}
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((x) => (
                  <li
                    key={x}
                    className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-white/75 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  </section>
);

export default BentoSkills;
