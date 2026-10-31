import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// A small Telegram chat that shows how a Smriti question works. Tapping an option answers it.
export const SmritiChat = () => {
  const reduce = useReducedMotion();
  const [picked, setPicked] = useState<number | null>(null);
  const options = ["Only 1", "Only 2", "Both 1 and 2", "Neither 1 nor 2"];
  const right = 0;
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[2.2rem] border border-white/10 bg-[#0e1621] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-3 rounded-t-[1.6rem] bg-[#17212b] px-4 py-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-violet text-sm font-bold text-ink">S</span>
        <div className="text-left">
          <p className="text-sm font-semibold text-white">Smriti</p>
          <p className="text-[11px] text-sky-300/80">bot</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 py-3 text-left text-[13px] leading-snug">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[92%] rounded-2xl rounded-bl-md bg-[#182533] px-3 py-2 text-white/90"
        >
          <p className="mb-1 text-[11px] text-sky-300">Q 3/10 | Polity</p>
          Consider the following statements about a no-confidence motion:
          <br />
          1. It can be moved only in the Lok Sabha.
          <br />
          2. It is mentioned in the Constitution.
          <br />
          Which of the statements given above is/are correct?
        </motion.div>
        <div className="grid grid-cols-2 gap-1.5">
          {options.map((o, i) => {
            const state = picked === null ? "" : i === right ? "bg-emerald-500/25 text-emerald-200" : i === picked ? "bg-rose-500/25 text-rose-200" : "opacity-50";
            return (
              <button
                key={o}
                onClick={() => setPicked(i)}
                disabled={picked !== null}
                className={`rounded-lg bg-[#2b5278]/60 px-2 py-2 text-[12px] text-white transition-all hover:bg-[#2b5278] ${state}`}
              >
                ({String.fromCharCode(97 + i)}) {o}
              </button>
            );
          })}
        </div>
        {picked !== null && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-[92%] rounded-2xl rounded-bl-md bg-[#182533] px-3 py-2 text-white/90">
            {picked === right ? "✅ Correct!" : "❌ Not quite. The answer is (a)."} Only the Lok Sabha can take it up, and it comes from Rule 198 of the Lok Sabha rules, not the Constitution.
            <p className="mt-1 text-[11px] text-white/50">📄 Your notes, page 3</p>
          </motion.div>
        )}
        {picked === null && <p className="pt-1 text-center text-[11px] text-white/40">Tap an answer to try it</p>}
      </div>
    </div>
  );
};

// A stylised builder canvas: blocks on the left, a page preview on the right.
export const BuilderMock = () => (
  <div className="relative mx-auto aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f1015] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
    <div className="mb-3 flex gap-1.5">
      {["bg-rose-400/70", "bg-amber/70", "bg-emerald-400/70"].map((c) => (
        <span key={c} className={`h-2.5 w-2.5 rounded-full ${c}`} />
      ))}
    </div>
    <div className="flex h-[calc(100%-1.5rem)] gap-3">
      <div className="flex w-1/4 flex-col gap-2">
        {["Hero", "Speakers", "Agenda", "Tickets", "Sponsors", "Footer"].map((b) => (
          <div key={b} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5 font-monoFont text-[9px] text-white/60 transition-colors group-hover:border-violet/30">
            {b}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-lg border border-white/10 bg-white/[0.02] p-2">
        <div className="h-1/3 rounded-md bg-gradient-to-br from-violet/40 to-accent/20 transition-all duration-700 group-hover:from-violet/60" />
        <div className="grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1 rounded-md bg-white/[0.04] p-2">
              <span className="h-6 w-6 rounded-full bg-white/15" />
              <span className="h-1 w-3/4 rounded bg-white/15" />
              <span className="h-1 w-1/2 rounded bg-white/10" />
            </div>
          ))}
        </div>
        <div className="h-6 rounded-md border border-dashed border-violet/50 bg-violet/10 transition-all duration-500 group-hover:h-9" />
      </div>
    </div>
  </div>
);

// A review board: submissions moving across columns.
export const ReviewMock = () => (
  <div className="mx-auto grid aspect-[4/3] w-full max-w-[460px] grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-[#0f1015] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
    {[
      { name: "Submitted", n: 3, c: "bg-white/10" },
      { name: "In review", n: 2, c: "bg-amber/30" },
      { name: "Accepted", n: 2, c: "bg-emerald-400/30" },
    ].map((col, ci) => (
      <div key={col.name} className="flex flex-col gap-2 rounded-lg bg-white/[0.02] p-2">
        <p className="font-monoFont text-[9px] uppercase tracking-wider text-white/50">{col.name}</p>
        {Array.from({ length: col.n }).map((_, i) => (
          <div
            key={i}
            className={`rounded-md border border-white/10 bg-white/[0.04] p-2 transition-transform duration-500 ${ci === 1 && i === 0 ? "group-hover:translate-x-[105%] group-hover:rotate-2" : ""}`}
          >
            <span className={`mb-1.5 block h-1 w-8 rounded ${col.c}`} />
            <span className="block h-1 w-full rounded bg-white/15" />
            <span className="mt-1 block h-1 w-2/3 rounded bg-white/10" />
            <div className="mt-2 flex gap-0.5">
              {[0, 1, 2, 3, 4].map((s) => (
                <span key={s} className={`h-1 w-1 rounded-full ${s < 3 + (i % 2) ? "bg-amber" : "bg-white/15"}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);
