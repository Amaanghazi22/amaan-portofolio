import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { profile } from "@/lib/data";

const Footer = () => (
  <footer className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 border-t border-line px-5 py-10 text-sm text-muted sml:flex-row">
    <p>
      Designed and built by {profile.name}, {new Date().getFullYear()}.
    </p>
    <div className="flex items-center gap-1">
      {[
        { href: profile.github, icon: <FiGithub />, label: "GitHub" },
        { href: profile.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
        { href: profile.instagram, icon: <FiInstagram />, label: "Instagram" },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full text-lg transition-colors hover:bg-white/[0.06] hover:text-white">
          {s.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
