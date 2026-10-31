import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiCommand, FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/lib/data";
import CommandMenu from "./CommandMenu";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const router = useRouter();
  const home = router.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlights the link of the section in the middle of the screen.
  useEffect(() => {
    if (!home) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [home]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`flex w-full items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
            scrolled ? "max-w-3xl border-line bg-ink/70 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl" : "max-w-container border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2 rounded-full py-1 pl-2 pr-3" aria-label="Home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-violet font-titleFont text-sm font-bold text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              A
            </span>
            <span className="hidden font-titleFont text-sm font-semibold text-white sml:inline">Amaan Ghazi</span>
          </Link>

          <ul className="hidden items-center gap-1 mdl:flex">
            {links.map((l) => (
              <li key={l.id}>
                <Link href={href(l.id)} className="relative block rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white">
                  {current === l.id && home && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/[0.08]" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMenu(true)}
              className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-monoFont text-xs text-muted transition-colors hover:border-white/20 hover:text-white sml:flex"
              aria-label="Open quick menu"
            >
              <FiCommand /> K
            </button>
            <Link href={href("contact")} className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent mdl:block">
              Let&apos;s talk
            </Link>
            <button onClick={() => setMobile(true)} className="grid h-10 w-10 place-items-center rounded-full text-xl text-white mdl:hidden" aria-label="Open menu">
              <FiMenu />
            </button>
          </div>
        </nav>
        <motion.div className="fixed inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent to-violet" style={{ scaleX: progress }} />
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink/95 px-6 pt-6 backdrop-blur-xl mdl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setMobile(false)} className="ml-auto grid h-10 w-10 place-items-center text-2xl text-white" aria-label="Close menu">
              <FiX />
            </button>
            <ul className="mt-8 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li key={l.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <Link href={href(l.id)} onClick={() => setMobile(false)} className="block py-3 font-titleFont text-3xl font-semibold text-white">
                    <span className="mr-3 font-monoFont text-sm text-accent">0{i + 1}</span>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a href={`mailto:${profile.email}`} className="btn-primary mt-10 justify-center">
              Email me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandMenu open={menu} setOpen={setMenu} />
    </>
  );
};

export default Navbar;
