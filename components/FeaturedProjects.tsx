import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxExternalLink } from "react-icons/rx";
import { codeCollab, leadDemo } from "@/public/assets";
import { AiFillThunderbolt } from "react-icons/ai";

interface ProjectSectionProps {
  title: string;
  subTitle: string;
  description: string;
  logic: string[];
  tech: string[];
  image: StaticImageData;
  link?: string;
  github?: string;
  reverse: boolean;
}

const ProjectSection = ({ 
  title, subTitle, description, logic, tech, image, link, github, reverse 
}: ProjectSectionProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`flex flex-col ${reverse ? 'lgl:flex-row-reverse' : 'lgl:flex-row'} gap-12 py-24 border-b border-borderColor last:border-none`}
  >
    <div className="w-full lgl:w-1/2 flex flex-col gap-6">
      <div>
        <span className="text-cyanAccent font-monoFont tracking-[0.2em] font-bold text-xs uppercase">{subTitle}</span>
        <h2 className="text-4xl lgl:text-5xl font-titleFont font-black text-white mt-2">{title}</h2>
      </div>
      
      <p className="text-lg text-textDark font-medium leading-relaxed">
        {description}
      </p>

      {logic && (
        <div className="p-6 rounded-3xl bg-white/5 border border-borderColor space-y-4 shadow-accent-glow/5">
          <h4 className="text-white font-bold flex items-center gap-2">
            <AiFillThunderbolt className="text-cyanAccent" /> Technical Architecture
          </h4>
          <div className="flex flex-col gap-3 font-monoFont text-sm text-textDark">
            {logic.map((step: string, i: number) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-cyanAccent font-bold">{i + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tech.map((t: string, i: number) => (
          <span key={i} className="text-[11px] font-monoFont bg-white/5 border border-borderColor px-3 py-1 rounded-full text-textLight">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6 items-center mt-4">
        {github && (
          <a href={github} target="_blank" className="flex items-center gap-2 text-textLight hover:text-cyanAccent duration-300 font-bold tracking-widest text-sm">
            <TbBrandGithub className="text-2xl" /> SOURCE CODE
          </a>
        )}
        {link && (
          <a href={link} target="_blank" className="flex items-center gap-2 text-cyanAccent hover:text-fuchsiaAccent duration-300 font-bold tracking-widest text-sm">
            <RxExternalLink className="text-2xl" /> LIVE PLATFORM
          </a>
        )}
      </div>
    </div>

    <div className="w-full lgl:w-1/2 group">
      <div className="relative rounded-3xl overflow-hidden glass-card p-2">
        <Image 
          src={image} 
          alt={title}
          className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-cyanAccent/5 group-hover:bg-transparent duration-500"></div>
      </div>
    </div>
  </motion.div>
);

const FeaturedProjects = () => {
  return (
    <section id="project" className="max-w-container mx-auto py-24 px-4 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl lgl:text-6xl font-titleFont font-black text-white tracking-tight">
          Engineering Showcase<span className="text-cyanAccent">.</span>
        </h2>
        <p className="max-w-[700px] text-textDark font-medium mt-4">
          A deep dive into systems and platforms where I've bridged frontend elegance 
          with robust backend logic and real-time synchronization.
        </p>
      </div>

      <ProjectSection 
        title="CollabCode"
        subTitle="Real-Time Collaborative Systems"
        description="A flagship engineering project enabling multi-user live code editing. This goes beyond simple UI, tackling the complex problem of state synchronization in distributed environments."
        logic={[
          "User joins session establishing a persistent WebSocket connection.",
          "Yjs CRDTs manage document state to resolve conflicts locally and globally.",
          "Monaco Editor binding captures changes and propagates CRDT updates.",
          "Live cursors and presence state synced via ephemeral Socket.io events."
        ]}
        tech={["React", "TypeScript", "Node.js", "Socket.io", "Yjs", "Monaco Editor", "PostgreSQL"]}
        image={codeCollab}
        github="https://github.com/Amaanghazi22/collaborative-code-editor"
        reverse={false}
      />

      <ProjectSection 
        title="Eventify SaaS"
        subTitle="Lead Lifecycle & CRM Automation"
        description="A production-grade lead automation platform. I architected the end-to-end scheduling logic that bridges lead acquisition with sales CRM pipelines."
        logic={[
          "Lead interaction triggers automated SmartLead/WhatsApp sequences.",
          "Meeting engine queries Google Calendar API for real-time slot availability.",
          "Automated reservation logic creates calendar events and meeting links.",
          "HubSpot CRM pipeline auto-updates with booking status and lead score."
        ]}
        tech={["Next.js", "Laravel", "Google API", "HubSpot API", "MySQL", "CI/CD"]}
        image={leadDemo}
        link="https://eventify.io/"
        reverse={true}
      />
    </section>
  );
};

export default FeaturedProjects;
