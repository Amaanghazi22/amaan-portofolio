import Image from "next/image";
import { profileImg } from "@/public/assets";
import { about } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

const About = () => (
  <section id="about" className="mx-auto max-w-container px-5 py-28">
    <SectionHeading kicker="About" title="A builder who cares about the whole product" />
    <div className="grid items-start gap-12 lgl:grid-cols-[1fr_340px]">
      <Reveal className="flex flex-col gap-6 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="mt-2 grid gap-3 sml:grid-cols-3">
          {about.extras.map((e) => (
            <div key={e.title} className="rounded-2xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-white/15">
              <p className="font-monoFont text-[11px] uppercase tracking-[0.15em] text-accent">{e.title}</p>
              <p className="mt-1 text-sm text-white/80">{e.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1} className="group relative mx-auto w-full max-w-[340px]">
        <div aria-hidden className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-violet/40 opacity-50 blur transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line">
          <Image
            src={profileImg}
            alt="Md Amaan Ghazi"
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            placeholder="blur"
          />
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
