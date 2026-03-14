import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";

interface ExperienceBlockProps {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  delay: number;
}

const ExperienceBlock = ({ role, company, period, description, achievements, delay }: ExperienceBlockProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="relative pl-8 border-l border-borderColor pb-12 last:pb-0"
  >
    <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-cyanAccent rounded-full shadow-accent-glow" />
    
    <div className="flex flex-col gap-1 mb-4">
      <h3 className="text-2xl font-bold text-white leading-none">{role}</h3>
      <span className="text-cyanAccent font-monoFont text-sm font-bold tracking-tight">@{company}</span>
      <span className="text-textDark font-monoFont text-xs mt-1 uppercase tracking-widest">{period}</span>
    </div>

    <p className="text-lg text-textDark leading-relaxed mb-6 font-medium">
      {description}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((item: string, i: number) => (
        <div key={i} className="p-4 rounded-xl bg-white/5 border border-borderColor flex gap-4 group hover:bg-white/[0.08] transition-colors duration-300">
          <div className="mt-1 text-cyanAccent group-hover:text-fuchsiaAccent transition-colors duration-300">
            <AiFillThunderbolt />
          </div>
          <p className="text-sm text-textLight/80 font-medium leading-snug">
            {item}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const ExperienceNarrative = () => {
  return (
    <section id="experience" className="max-w-containerSmall mx-auto py-24 px-4 overflow-hidden">
      <div className="flex flex-col mb-16 px-4">
        <h2 className="text-4xl lgl:text-6xl font-titleFont font-black text-white mb-4 tracking-tight">
          Professional Growth<span className="text-cyanAccent">.</span>
        </h2>
        <p className="max-w-[600px] text-textDark font-medium">
          A narrative of technical ownership and product evolution, focusing on SaaS 
          scalability and real-world system performance.
        </p>
      </div>

      <div className="space-y-4">
        <ExperienceBlock 
          role="Frontend Software Engineer"
          company="TeksMobile (Eventify SaaS)"
          period="Apr 2024 - Present"
          description="Taking full ownership of core frontend architecture for a multi-tenant SaaS platform. I focus on bridging complex UI requirements with high-performance state management and real-time synchronization logic."
          achievements={[
            "Optimized large-scale state architecture handling 10k+ records, reducing unnecessary re-renders by 40%.",
            "Engineered automated CRM pipelines with deep Google Calendar and HubSpot API integrations for 15+ features.",
            "Spearheaded performance initiatives achieving 28% faster initial load times via route-level code splitting.",
            "Implemented robust CI/CD workflows and automated testing (Jest/RTL), decreasing production bugs by 30%."
          ]}
          delay={0.1}
        />
        
        <ExperienceBlock 
          role="Web Engineering Instructor"
          company="CSI (Professional Training)"
          period="Jan 2024 - Mar 2024"
          description="Educated upcoming developers on modern web standards, focusing on React, TypeScript, and the importance of professional engineering practices."
          achievements={[
            "Mentored 50+ students in full-stack JavaScript development workflows.",
            "Designed curriculum covering modern state management and system design patterns.",
            "Conducted peer code reviews focusing on clean code and performance."
          ]}
          delay={0.2}
        />
      </div>
    </section>
  );
};

export default ExperienceNarrative;
