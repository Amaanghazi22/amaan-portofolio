import { animate, motion, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

// Fades and lifts children into view once. Respects the visitor's "reduce motion" setting.
export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

// A card with a soft light that follows the pointer and a border that lights up under it.
// With tilt, it also leans a few degrees toward the pointer.
export const SpotlightCard = ({
  children,
  className = "",
  tilt = false,
  color = "34, 211, 238",
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  color?: string;
}) => {
  const reduce = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const rx = useSpring(0, { stiffness: 150, damping: 15 });
  const ry = useSpring(0, { stiffness: 150, damping: 15 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(${color}, 0.12), transparent 70%)`;
  const ring = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(${color}, 0.55), transparent 70%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
    if (tilt && !reduce) {
      rx.set(((e.clientY - r.top) / r.height - 0.5) * -6);
      ry.set(((e.clientX - r.left) / r.width - 0.5) * 6);
    }
  };
  const onLeave = () => {
    x.set(-400);
    y.set(-400);
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={`group relative rounded-3xl bg-white/[0.02] p-px transition-colors duration-300 ${className}`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: ring }} />
      <div className="relative h-full rounded-[calc(1.5rem-1px)] border border-line bg-surface">
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glow }} />
        <div className="relative h-full">{children}</div>
      </div>
    </motion.div>
  );
};

// Counts up from zero the first time it scrolls into view, keeping the value's decimals (2.5 stays 2.5).
export const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);
  const decimals = (String(value).split(".")[1] ?? "").length;
  const step = 10 ** decimals;
  useEffect(() => {
    if (!inView) return;
    if (reduce) return setShown(value);
    const controls = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setShown(Math.round(v * step) / step) });
    return () => controls.stop();
  }, [inView, reduce, value, step]);
  return (
    <span ref={ref} className="tabular-nums">
      {shown.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

export const SectionHeading = ({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) => (
  <Reveal className="mb-12 flex flex-col gap-3">
    <span className="font-monoFont text-xs uppercase tracking-[0.25em] text-accent">{kicker}</span>
    <h2 className="font-titleFont text-4xl font-bold tracking-tight text-white lgl:text-5xl">{title}</h2>
    {sub && <p className="max-w-2xl text-base leading-relaxed text-muted lgl:text-lg">{sub}</p>}
  </Reveal>
);

export const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-monoFont text-[11px] text-white/70 transition-colors duration-300 group-hover:border-white/15">
    {children}
  </span>
);
