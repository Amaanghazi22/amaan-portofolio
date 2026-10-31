import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { marquee, profile, stats } from "@/lib/data";
import { Counter, Reveal } from "./ui";

const Hero = () => {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  });

  return (
    <section id="home" className="relative overflow-hidden pt-36 lgl:pt-44">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-60 -z-10 h-[300px] w-[300px] rounded-full bg-violet/10 blur-[120px]"
      />

      <div className="mx-auto flex max-w-container flex-col items-center px-5 text-center">
        <motion.div {...rise(0)}>
          <Link
            href="/projects/smriti"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1.5 pl-2 pr-4 text-xs text-white/80 transition-colors hover:border-accent/40"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400" />{" "}
              Live
            </span>
            Smriti, my AI revision coach, now has real users
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="mt-8 font-titleFont text-5xl font-bold leading-[1.05] tracking-tight text-white sml:text-6xl lgl:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          {...rise(0.2)}
          className="mt-4 font-titleFont text-2xl font-semibold tracking-tight lgl:text-4xl"
        >
          <span className="text-gradient">{profile.role}</span>{" "}
          <span className="block text-white/40 sml:inline">for {profile.focus}</span>
        </motion.p>

        <motion.p
          {...rise(0.3)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted lgl:text-lg"
        >
          I build products end to end, from React interfaces to PHP and Node
          APIs to Cloudflare infrastructure. I own core modules of{" "}
          <a
            href="https://eventify.io/"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-white"
          >
            Eventify
          </a>
          , an event-management SaaS, and I ship AI products real people use.
        </motion.p>

        <motion.div
          {...rise(0.4)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#work" className="btn-primary">
            See my work <FiArrowRight />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.github, icon: <FiGithub />, label: "GitHub" },
              {
                href: profile.linkedin,
                icon: <FiLinkedin />,
                label: "LinkedIn",
              },
              {
                href: `mailto:${profile.email}`,
                icon: <FiMail />,
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full text-lg text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-container px-5">
        <Reveal delay={0.2} className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lgl:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group bg-ink p-6 transition-colors duration-300 hover:bg-surface lgl:p-8">
              <div className="font-titleFont text-4xl font-bold text-white transition-colors group-hover:text-accent lgl:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="relative mt-16 overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line bg-white/[0.02] px-4 py-2 font-monoFont text-xs text-white/60 transition-colors hover:border-accent/40 hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
