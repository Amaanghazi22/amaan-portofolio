import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";
import { Reveal } from "./ui";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = () =>
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });

  return (
    <section id="contact" className="mx-auto max-w-container px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center sml:px-12 lgl:py-24">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
          <div className="relative">
            <span className="font-monoFont text-xs uppercase tracking-[0.25em] text-accent">Contact</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-titleFont text-4xl font-bold tracking-tight text-white lgl:text-6xl">
              Let&apos;s build something <span className="text-gradient">people use</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
              I&apos;m open to full-stack and AI product roles. Whether you have a role, a project or just a question, my inbox is open.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <FiMail /> Say hello
              </a>
              <button onClick={copy} className="btn-ghost" aria-live="polite">
                {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />} {copied ? "Copied" : profile.email}
              </button>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                LinkedIn <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
