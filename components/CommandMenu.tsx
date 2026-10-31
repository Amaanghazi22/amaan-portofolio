import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiArrowUpRight, FiCopy, FiCornerDownLeft, FiFileText, FiGithub, FiHash, FiLinkedin, FiSearch } from "react-icons/fi";
import { profile, smritiLinks } from "@/lib/data";

type Item = { label: string; hint: string; icon: JSX.Element; run: () => void };

// Cmd+K / Ctrl+K quick menu: jump to a section, open a project, copy the email.
const CommandMenu = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const go = (hash: string) => {
    setOpen(false);
    if (router.pathname !== "/") router.push(`/${hash}`);
    else document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };
  const open_ = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener");
  };

  const items: Item[] = useMemo(
    () => [
      { label: "Work", hint: "Section", icon: <FiHash />, run: () => go("#work") },
      { label: "Experience", hint: "Section", icon: <FiHash />, run: () => go("#experience") },
      { label: "Skills", hint: "Section", icon: <FiHash />, run: () => go("#skills") },
      { label: "About", hint: "Section", icon: <FiHash />, run: () => go("#about") },
      { label: "Contact", hint: "Section", icon: <FiHash />, run: () => go("#contact") },
      { label: "Smriti case study", hint: "Page", icon: <FiFileText />, run: () => { setOpen(false); router.push("/projects/smriti"); } },
      { label: "Open Smriti (live)", hint: "Link", icon: <FiArrowUpRight />, run: () => open_(smritiLinks.site) },
      { label: "GitHub", hint: "Link", icon: <FiGithub />, run: () => open_(profile.github) },
      { label: "LinkedIn", hint: "Link", icon: <FiLinkedin />, run: () => open_(profile.linkedin) },
      {
        label: copied ? "Email copied" : "Copy email address",
        hint: profile.email,
        icon: <FiCopy />,
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [copied, router.pathname],
  );

  const shown = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => input.current?.focus(), 10);
    }
  }, [open]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, shown.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      shown[active]?.run();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-label="Quick menu"
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-2xl"
            initial={{ scale: 0.96, y: -8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -8 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <FiSearch className="text-muted" />
              <input
                ref={input}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onListKey}
                placeholder="Jump to a section, project or link"
                className="h-14 w-full bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-monoFont text-[10px] text-muted">ESC</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {shown.map((item, i) => (
                <li key={item.label}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={item.run}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${i === active ? "bg-white/[0.06] text-white" : "text-white/70"}`}
                  >
                    <span className={i === active ? "text-accent" : "text-muted"}>{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    <span className="truncate font-monoFont text-[11px] text-muted">{item.hint}</span>
                    {i === active && <FiCornerDownLeft className="text-muted" />}
                  </button>
                </li>
              ))}
              {!shown.length && <li className="px-3 py-6 text-center text-sm text-muted">Nothing matches.</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;
