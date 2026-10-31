import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiFolder, FiGithub, FiLock } from "react-icons/fi";
import { archive } from "@/lib/data";
import { Reveal, SpotlightCard } from "./ui";

const FIRST = 6;

const Archive = () => {
  const [all, setAll] = useState(false);
  const shown = all ? archive : archive.slice(0, FIRST);
  return (
    <section className="mx-auto max-w-container px-5 pb-28">
      <Reveal className="mb-10 flex items-end justify-between gap-4">
        <div>
          <span className="font-monoFont text-xs uppercase tracking-[0.25em] text-accent">More projects</span>
          <h2 className="mt-3 font-titleFont text-3xl font-bold tracking-tight text-white">Other things I&apos;ve built</h2>
        </div>
      </Reveal>
      <div className="grid gap-4 sml:grid-cols-2 lgl:grid-cols-3">
        <AnimatePresence initial={false}>
          {shown.map((p, i) => {
            const card = (
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center justify-between text-xl">
                    <FiFolder className="text-accent" />
                    <span className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white">
                      {p.kind === "github" ? <FiGithub /> : p.kind === "live" ? <FiArrowUpRight /> : <FiLock title="Internal tool" />}
                    </span>
                  </div>
                  <h3 className="font-titleFont text-lg font-semibold text-white transition-colors group-hover:text-accent">{p.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">{p.des}</p>
                  <p className="font-monoFont text-[11px] text-white/50">{p.tech.join("  /  ")}</p>
                </div>
              </SpotlightCard>
            );
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: (i % 3) * 0.05 }}>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="block h-full">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {archive.length > FIRST && (
        <div className="mt-10 flex justify-center">
          <button onClick={() => setAll(!all)} className="btn-ghost">
            {all ? "Show less" : `Show all ${archive.length}`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Archive;
