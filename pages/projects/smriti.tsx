import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiSend } from "react-icons/fi";
import Footer from "@/components/Footer";
import { SmritiChat } from "@/components/Mocks";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { Chip, Counter, Reveal, SpotlightCard } from "@/components/ui";
import { smritiLinks } from "@/lib/data";

const facts = [
  { value: 70, suffix: "", label: "commits in the first 13 days" },
  { value: 327, suffix: "", label: "automated tests" },
  { value: 241, suffix: "", label: "questions generated from user notes" },
  { value: 0, suffix: "", label: "rupees a month to run", prefix: "₹" },
];

const flow = [
  { step: "Upload", text: "A user sends a PDF or photos of notes on Telegram." },
  { step: "Read", text: "Gemini reads the pages, including handwriting and Hindi." },
  { step: "Write", text: "A generator model writes exam-style questions in English and Hindi, each with its source page." },
  { step: "Check", text: "A second, stricter model re-solves every question against the source. Anything it disagrees with is dropped." },
  { step: "Schedule", text: "Spaced repetition decides what comes back and when: wrong answers return tomorrow, right ones drift further out." },
  { step: "Quiz", text: "Every day at the user's chosen hour, one question at a time, with the explanation and page right after." },
];

const decisions = [
  {
    title: "Never trust one model with the answer key",
    problem: "Language models write convincing questions with the wrong answer marked. One wrong key and a student stops trusting the whole product.",
    choice:
      "The generator never picks the answer letter. It marks each statement true or false, and code builds the options and the key from those flags. Then a separate, stricter model has to solve the question blind and agree before it is published.",
    result: "Every answer key is checked twice before a student sees it, and the one user report so far turned out to be a correct key.",
  },
  {
    title: "Run a real product on free tiers",
    problem: "Free model quotas are small and models get retired without warning.",
    choice:
      "The strict checker rotates across several free Gemini models and skips any that are retired or out of quota. Work is queued in the database and processed by a once-a-minute cron, so a slow or failed call is simply retried.",
    result: "Hosting, database and AI all cost nothing, and uploads keep working when one model goes down.",
  },
  {
    title: "A message that fails must not be lost",
    problem: "When the bot's Telegram key was revoked, a whole morning of daily quizzes silently failed.",
    choice:
      "Every scheduled message (quiz, weekly report, owner summary) is now marked as sent only after Telegram accepts it, and failures retry on the next tick a limited number of times.",
    result: "Found, fixed and covered by tests the same day, with planted-bug tests proving the checks catch a regression.",
  },
];

const features = [
  "Exam-aware question styles for UPSC, BPSC, UPPSC and SSC, modelled on real papers",
  "Daily current-affairs questions from PIB press releases, no upload needed",
  "A Sunday report on where each user loses marks, with a one-tap practice round",
  "Report button on every question, with reasons, that alerts the owner instantly",
  "A 9:30 PM owner summary of usage, errors and signups",
  "English and Hindi throughout",
];

export default function Smriti() {
  return (
    <>
      <Seo
        title="Smriti: AI revision coach | Case study by Md Amaan Ghazi"
        description="How I built Smriti, a free Telegram revision coach that turns study notes into verified exam questions, on Cloudflare Workers and Gemini."
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <section className="relative pb-16 pt-32 lgl:pt-40">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
          <div className="mx-auto grid max-w-container items-center gap-14 px-5 lgl:grid-cols-[1fr_380px]">
            <Reveal>
              <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white">
                <FiArrowLeft /> All work
              </Link>
              <p className="mt-8 font-monoFont text-xs uppercase tracking-[0.25em] text-accent">Case study / Personal product</p>
              <h1 className="mt-4 font-titleFont text-5xl font-bold tracking-tight text-white lgl:text-7xl">Smriti</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                A free Telegram coach that turns a student&apos;s own notes into verified exam questions, then quizzes them every day until they remember. Built solo, for
                government-exam aspirants in India.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={smritiLinks.site} target="_blank" rel="noreferrer" className="btn-primary">
                  Visit the live site <FiArrowUpRight />
                </a>
                <a href={smritiLinks.bot} target="_blank" rel="noreferrer" className="btn-ghost">
                  <FiSend /> Open in Telegram
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["TypeScript", "Cloudflare Workers", "D1", "Gemini", "Vercel AI SDK", "zod", "grammY", "Vitest"].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <SmritiChat />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-container px-5 py-12">
          <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lgl:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="group bg-ink p-6 transition-colors hover:bg-surface lgl:p-8">
                <div className="font-titleFont text-4xl font-bold text-white transition-colors group-hover:text-accent">
                  {f.prefix}
                  <Counter value={f.value} suffix={f.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted">{f.label}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="mx-auto max-w-prose px-5 py-16">
          <Reveal>
            <h2 className="font-titleFont text-3xl font-bold text-white">The problem</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Aspirants read thousands of pages and forget most of them before the exam. Generic question banks don&apos;t match their own notes, and plain chatbots invent
              facts and answer keys. I wanted something that tests a student on exactly what they studied, in the style of the real paper, and that they can trust.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-container px-5 py-16">
          <Reveal>
            <h2 className="font-titleFont text-3xl font-bold text-white">How it works</h2>
            <p className="mt-3 max-w-2xl text-muted">The whole pipeline runs on one Cloudflare Worker with a once-a-minute cron and a SQLite database.</p>
          </Reveal>
          <ol className="mt-10 grid gap-4 sml:grid-cols-2 lgl:grid-cols-3">
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={(i % 3) * 0.08}>
                <SpotlightCard className="h-full" color={f.step === "Check" ? "167, 139, 250" : "34, 211, 238"}>
                  <li className="flex h-full flex-col gap-3 p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-line font-monoFont text-xs text-accent transition-colors group-hover:border-accent/50">
                        {i + 1}
                      </span>
                      <h3 className="font-titleFont text-lg font-semibold text-white">{f.step}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{f.text}</p>
                  </li>
                </SpotlightCard>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-container px-5 py-16">
          <Reveal>
            <h2 className="font-titleFont text-3xl font-bold text-white">Three decisions that mattered</h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-4">
            {decisions.map((d, i) => (
              <Reveal key={d.title}>
                <SpotlightCard>
                  <div className="grid gap-6 p-6 lgl:grid-cols-[220px_1fr] lgl:p-8">
                    <div>
                      <span className="font-monoFont text-xs text-accent">0{i + 1}</span>
                      <h3 className="mt-2 font-titleFont text-xl font-semibold text-white">{d.title}</h3>
                    </div>
                    <dl className="grid gap-4 text-sm leading-relaxed sml:grid-cols-3">
                      {[
                        ["Problem", d.problem],
                        ["What I did", d.choice],
                        ["Result", d.result],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <dt className="font-monoFont text-[11px] uppercase tracking-[0.15em] text-white/50">{k}</dt>
                          <dd className="mt-1.5 text-muted">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-container px-5 py-16">
          <div className="grid gap-12 lgl:grid-cols-2">
            <Reveal>
              <h2 className="font-titleFont text-3xl font-bold text-white">What else it does</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {features.map((f) => (
                  <li key={f} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-titleFont text-3xl font-bold text-white">What I learned</h2>
              <p className="mt-6 leading-relaxed text-muted">
                The hard part of an AI product is not calling the model. It is deciding what the model is allowed to decide, checking its work with code and a second
                model, and designing for the day a free quota runs out. Real users also find problems no test does, so every report reaches me within seconds and I
                answer it personally.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-container px-5 py-16">
          <Reveal className="flex flex-col items-center gap-6 rounded-[2rem] border border-line bg-surface px-6 py-14 text-center">
            <h2 className="font-titleFont text-3xl font-bold text-white">Try it yourself</h2>
            <p className="max-w-lg text-muted">Smriti is free. Send it a chapter and it starts quizzing you on it.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={smritiLinks.site} target="_blank" rel="noreferrer" className="btn-primary">
                Visit Smriti <FiArrowUpRight />
              </a>
              <Link href="/#work" className="btn-ghost">
                <FiArrowLeft /> Back to all work
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
