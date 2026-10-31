// Every word on the site lives here, so content changes never touch the layout.
// Numbers are only ones that can be shown from commits, the live product or its tests.

export const profile = {
  name: "Md Amaan Ghazi",
  role: "Full-Stack Engineer",
  focus: "SaaS + AI",
  email: "amaan083.hitit2020@gmail.com",
  github: "https://github.com/Amaanghazi22",
  linkedin: "https://www.linkedin.com/in/md-amaan-ghazi-722313263",
  instagram: "https://www.instagram.com/amaan_gh22/",
};

export const smritiLinks = {
  site: "https://smriti-upsc.upsc-revision-bot.workers.dev/?utm_source=portfolio&utm_campaign=portfolio",
  bot: "https://t.me/SmritiUPSC_bot",
};

export const stats = [
  { value: 2, suffix: "+", label: "years shipping production SaaS" },
  { value: 1500, suffix: "+", label: "commits across Eventify codebases" },
  { value: 7, suffix: "", label: "production codebases worked in" },
  { value: 327, suffix: "", label: "automated tests in my AI product" },
];

export type Featured = {
  slug: string;
  eyebrow: string;
  title: string;
  pitch: string;
  points: string[];
  tech: string[];
  live?: string;
  caseStudy?: string;
  badge?: string;
  accent: "cyan" | "violet" | "amber";
};

export const featured: Featured[] = [
  {
    slug: "smriti",
    eyebrow: "Personal product / GenAI",
    title: "Smriti",
    pitch:
      "A free Telegram revision coach for UPSC, BPSC, UPPSC and SSC aspirants. Upload your notes, and Smriti turns them into exam-style questions, then quizzes you daily with spaced repetition until you remember them on exam day.",
    points: [
      "Two-model pipeline: one model writes the questions, a second, stricter model checks every answer against the source before anyone sees it",
      "Question styles modelled on real UPSC papers from 2024 to 2026, in English and Hindi",
      "Daily current-affairs questions generated from PIB press releases, plus a weekly report on where each user loses marks",
      "Runs entirely on free tiers: Cloudflare Workers, D1 and Gemini, with 327 automated tests",
    ],
    tech: ["TypeScript", "Cloudflare Workers", "D1 (SQLite)", "Gemini", "Vercel AI SDK", "zod", "grammY", "Vitest"],
    live: smritiLinks.site,
    caseStudy: "/projects/smriti",
    badge: "Live with real users",
    accent: "cyan",
  },
  {
    slug: "builders",
    eyebrow: "Eventify / Website + Email Builder",
    title: "No-code Website & Email Builders",
    pitch:
      "Took Eventify's drag-and-drop website builder from prototype to production and built the block-based email builder that compiles designs into email-safe HTML.",
    points: [
      "Connected the builder to live event data: speakers, sessions, sponsors and tickets",
      "Published sites as CDN JSON snapshots on S3 with Cloudflare cache purge",
      "Custom domains on Cloudflare for SaaS with automatic SSL",
      "Email builder with about 18 block types compiling to React Email, with Tailwind-to-inline CSS and a merge-tag library",
    ],
    tech: ["React", "TypeScript", "Zustand", "dnd-kit", "React Email", "AWS S3", "Cloudflare", "PHP"],
    live: "https://eventify.io/",
    accent: "violet",
  },
  {
    slug: "abstracts",
    eyebrow: "Eventify / Call for Proposals",
    title: "Abstract & Peer-Review Platform",
    pitch:
      "Main author, end to end across three codebases, of the system conferences use to collect talk proposals and run peer review.",
    points: [
      "Admin dashboard with list, grid and kanban views and drag-and-drop status changes",
      "Public submitter and reviewer portal with drafts, versions, multiple languages and anonymous review",
      "Multi-round reviewer assignment, scoring rubrics and mapping accepted abstracts to speakers and sessions",
      "25+ backend API endpoints with token auth, email notifications and exports",
    ],
    tech: ["React", "TypeScript", "Redux", "shadcn/ui", "PHP", "MySQL", "DreamFactory"],
    live: "https://eventify.io/",
    accent: "amber",
  },
];

export type Module = { title: string; line: string; tech: string[] };

export const experience = [
  {
    role: "Software Engineer",
    company: "TeksMobile / Eventify",
    period: "Apr 2024 to Present",
    summary:
      "Full-stack ownership of product modules on Eventify, an event-management SaaS. React and TypeScript on the frontend, PHP, Laravel and DreamFactory APIs on the backend.",
    modules: [
      { title: "Abstract & Peer Review", line: "Built admin, public portal and 25+ APIs for multi-round reviews", tech: ["React", "PHP"] },
      { title: "Website Builder v2", line: "Took it to production with live event data, SEO and CDN publishing", tech: ["React", "S3", "Cloudflare"] },
      { title: "Email Builder v2", line: "About 18 drag-and-drop blocks compiled to React Email", tech: ["React Email", "TypeScript"] },
      { title: "CRM Companies", line: "Companies, deals, contracts and invoices: 111 backend actions", tech: ["React", "PHP", "MySQL"] },
      { title: "Attendee Networking", line: "Explore, matchmaking, chat with media, notifications, gamification", tech: ["React", "Redux"] },
      { title: "Sales Tooling", line: "Lead CRM, demo scheduler and a LinkedIn lead Chrome extension", tech: ["Laravel", "Google APIs"] },
      { title: "Custom Domains", line: "Cloudflare for SaaS hostnames with automated SSL checks", tech: ["Cloudflare", "PHP"] },
      { title: "Performance & Security", line: "Lazy loading and chunking, CRA to Vite, OWASP hardening", tech: ["Vite", "Laravel"] },
    ] as Module[],
  },
  {
    role: "Web Engineering Instructor",
    company: "CSI (Professional Training)",
    period: "Jan 2024 to Mar 2024",
    summary:
      "Taught modern web development with React and TypeScript, with a focus on professional engineering habits.",
    modules: [
      { title: "Mentoring", line: "Mentored 50+ students through full-stack JavaScript workflows", tech: [] },
      { title: "Curriculum", line: "Designed lessons on state management and design patterns", tech: [] },
      { title: "Code Review", line: "Ran peer code reviews focused on clean, fast code", tech: [] },
    ] as Module[],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Zustand", "Tailwind", "shadcn/ui", "framer-motion", "dnd-kit"] },
  { group: "Backend", items: ["Node.js", "PHP", "Laravel", "DreamFactory", "REST APIs", "MySQL", "SQLite / D1", "PostgreSQL"] },
  { group: "AI", items: ["Vercel AI SDK", "Gemini", "Structured output (zod)", "Prompt design", "LLM-as-judge checks", "RAG on user documents"] },
  { group: "Cloud & Infra", items: ["Cloudflare Workers", "Cloudflare for SaaS", "AWS S3", "Vercel", "Vite", "Cron jobs"] },
  { group: "Quality", items: ["Vitest", "Mutation testing", "OWASP hardening", "Code splitting", "Git"] },
];

export const marquee = [
  "React", "TypeScript", "Next.js", "Node.js", "Cloudflare", "Gemini", "Vercel AI SDK", "PHP", "Laravel",
  "MySQL", "Tailwind", "AWS S3", "React Email", "Redux", "Zustand", "Vite", "Vitest",
];

export type ArchiveItem = { title: string; des: string; tech: string[]; link?: string; kind: "github" | "live" | "private" };

export const archive: ArchiveItem[] = [
  {
    title: "CollabCode",
    des: "Multi-user live code editor with CRDT state sync, live cursors and presence.",
    tech: ["React", "Socket.io", "Yjs", "Monaco"],
    link: "https://github.com/Amaanghazi22/collaborative-code-editor",
    kind: "github",
  },
  {
    title: "LinkedIn Lead Extension",
    des: "Chrome extension that finds a lead's email from a LinkedIn profile and adds them to an outreach campaign.",
    tech: ["Chrome MV3", "JavaScript", "Apollo API"],
    kind: "private",
  },
  {
    title: "Demo Scheduler",
    des: "Public demo and onboarding booking app with sales and support calendars and timezone-aware slots.",
    tech: ["React", "Vite", "Google Calendar", "PHP"],
    kind: "private",
  },
  {
    title: "Eventify SSO",
    des: "SSO setup flow that lets event organisers plug in their own identity provider.",
    tech: ["Auth", "SSO", "SaaS Admin"],
    link: "https://eventify.io/knowledge-base/how-to-enable-sso-for-your-event",
    kind: "live",
  },
  {
    title: "Custom Domain Engine",
    des: "CNAME checks and SSL automation so organisers can run event sites on their own domain.",
    tech: ["DNS", "Cloudflare", "SSL"],
    link: "https://eventify.io/knowledge-base/how-to-add-a-custom-domain-for-the-event-landing-page",
    kind: "live",
  },
  {
    title: "Food Order App",
    des: "Food-delivery front end with restaurant listings, sorting and filters.",
    tech: ["React", "Tailwind", "REST API"],
    link: "https://github.com/Amaanghazi22/foodOrder",
    kind: "github",
  },
  {
    title: "Football Stats",
    des: "Live football news and stats app with custom search.",
    tech: ["React", "News API"],
    link: "https://github.com/Amaanghazi22/_Football_App",
    kind: "github",
  },
  {
    title: "C++ Banking System",
    des: "Object-oriented banking system with persistent file storage.",
    tech: ["C++", "OOP", "File I/O"],
    link: "https://github.com/Amaanghazi22/BankingSystem",
    kind: "github",
  },
];

export const about = {
  paragraphs: [
    "I build products end to end: the interface people touch, the APIs behind it and the infrastructure that keeps it fast. At Eventify I own whole modules, from the database tables to the last hover state.",
    "Outside work I build things real people use. Smriti, my AI revision coach for government-exam aspirants, went from idea to a live product with real users in about two weeks, on a budget of zero.",
  ],
  extras: [
    { title: "Problem solving", text: "300+ LeetCode problems solved" },
    { title: "Certification", text: "Mastering Data Structures, Udemy (2024)" },
    { title: "Languages", text: "English, Hindi" },
  ],
};
