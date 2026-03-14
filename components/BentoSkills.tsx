import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { 
  SiReact, SiTypescript, SiRedux, SiReactquery, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiLaravel, 
  SiMysql, SiPostgresql, SiSocketdotio, SiGithubactions,
  SiTrello
} from "react-icons/si";

interface SkillCardProps {
  icon: IconType;
  title: string;
  skills: string[];
  category: string;
  delay: number;
  span: string;
}

const SkillCard = ({ icon: Icon, title, skills, category, delay, span }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`glass-card p-6 flex flex-col justify-between group accent-glow-card ${span}`}
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-cyanAccent/10 group-hover:border-cyanAccent/50 transition-all duration-500">
          <Icon className="text-3xl text-cyanAccent group-hover:text-white transition-colors duration-500" />
        </div>
        <span className="text-[10px] font-monoFont text-textDark uppercase tracking-widest">{category}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill: string, i: number) => (
          <li key={i} className="text-xs font-monoFont text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full group-hover:border-cyanAccent/30 group-hover:text-cyanAccent/80 transition-all duration-500">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const BentoSkills = () => {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      category: "Core Expertise",
      icon: SiReact,
      skills: ["React v18", "TypeScript", "Redux Toolkit", "React Query", "Component System Design"],
      span: "md:col-span-8",
      delay: 0.1
    },
    {
      title: "Performance",
      category: "Engineering",
      icon: SiTailwindcss,
      skills: ["Code Splitting", "Memoization", "Web Vitals", "Lazy Loading"],
      span: "md:col-span-4",
      delay: 0.2
    },
    {
      title: "Backend Engineering",
      category: "Full Stack",
      icon: SiNodedotjs,
      skills: ["Node.js", "Express", "Laravel", "REST APIs", "JWT Auth"],
      span: "md:col-span-4",
      delay: 0.3
    },
    {
      title: "Real-time Systems",
      category: "Architecture",
      icon: SiSocketdotio,
      skills: ["WebSockets", "Socket.io", "Yjs CRDTs", "Live State Sync"],
      span: "md:col-span-8",
      delay: 0.4
    },
    {
      title: "Database Design",
      category: "Infrastructure",
      icon: SiPostgresql,
      skills: ["MySQL", "PostgreSQL", "Query Optimization", "Schema Architecture"],
      span: "md:col-span-5",
      delay: 0.5
    },
    {
      title: "Engineering Practices",
      category: "Workflow",
      icon: SiGithubactions,
      skills: ["CI/CD", "Jest/RTL", "Agile Sprints", "System Design"],
      span: "md:col-span-7",
      delay: 0.6
    }
  ];

  return (
    <section id="skills" className="max-w-container mx-auto py-24 px-4">
      <div className="flex flex-col mb-16 px-4">
        <h2 className="text-4xl lgl:text-6xl font-titleFont font-black text-white mb-4">
          Technical Expertise<span className="text-cyanAccent">.</span>
        </h2>
        <p className="max-w-[600px] text-textDark font-medium">
          A deep dive into my core engineering capabilities, spanning from 
          advanced frontend architectures to complex real-time backend systems.
        </p>
      </div>

      <div className="bento-grid">
        {skillCategories.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BentoSkills;
