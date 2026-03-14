import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center mb-12">
        <h2 className="text-4xl lgl:text-5xl font-titleFont font-black text-white tracking-tight">
          Project Archive<span className="text-cyanAccent">.</span>
        </h2>
        <p className="text-xs font-monoFont text-cyanAccent uppercase tracking-[0.3em] mt-2 font-bold">
          Technical Deep Dives
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Food Order App"
          des="Built a Swiggy-like food delivery engine with dynamic restaurant listings, sorting, and stateful filtering logic."
          listItem={["React", "Tailwind", "REST API"]}
          link="https://github.com/Amaanghazi22/foodOrder"
          showGitIcon={true}
        />
        <ArchiveCard
          title="C++ Banking Engine"
          des="Developed an OOP-based core banking system using complex C++ file I/O for persistent state management."
          listItem={["C++", "OOPs", "File Systems"]}
          link="https://github.com/Amaanghazi22/BankingSystem"
          showGitIcon={true}
        />
        <ArchiveCard
          title="Eventify SSO Strategy"
          des="Architected the SSO enablement flow allowing event organizers to configure third-party identity providers."
          listItem={["Auth Architecture", "SSO", "SaaS Admin"]}
          link="https://eventify.io/knowledge-base/how-to-enable-sso-for-your-event"
          showGitIcon={false}
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
            <ArchiveCard
              title="Global Stats News"
              des="Real-time football intelligence app fetching live data via global news endpoints with custom search logic."
              listItem={["React", "News API", "Async State"]}
              link="https://github.com/Amaanghazi22/_Football_App"
              showGitIcon={true}
            />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
            <ArchiveCard
              title="Custom Domain Engine"
              des="Engineered subdomain setup and CNAME configuration logic for automated Eventify landing pages."
              listItem={["DNS Logic", "CNAME", "Subdomains"]}
              link="https://eventify.io/knowledge-base/how-to-add-a-custom-domain-for-the-event-landing-page" 
              showGitIcon={false}
            />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
            <ArchiveCard
              title="Shared Architecture Hub"
              des="A centralized repository of common UI modules and business logic patterns for React SaaS products."
              listItem={["React Hub", "Patterns", "Reusability"]}
              link="https://github.com/Amaanghazi22/React-Course-with-projects"
              showGitIcon={true}
            />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-16 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="px-8 py-3 rounded-full text-cyanAccent text-[12px] border border-cyanAccent/30 hover:border-cyanAccent hover:bg-cyanAccent/5 font-bold duration-300 font-monoFont tracking-widest uppercase"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="px-8 py-3 rounded-full text-cyanAccent text-[12px] border border-cyanAccent/30 hover:border-cyanAccent hover:bg-cyanAccent/5 font-bold duration-300 shadow-accent-glow/10 font-monoFont tracking-widest uppercase"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
