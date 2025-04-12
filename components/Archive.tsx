import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Food Order App (Swiggy API Integration)"
          des="Built a Swiggy-like food delivery app with features like dynamic restaurant listings, sorting, filtering, and featured deals."
          listItem={["ReactJS", "Tailwind CSS", "Swiggy API", "REST"]}
          link="https://github.com/Amaanghazi22/foodOrder"
          showGitIcon={true}
        />
        <ArchiveCard
          title="C++ Banking System"
          des="Developed an OOP-based online banking system with account creation, deposit/withdrawals, balance inquiries, and more, all handled via file I/O."
          listItem={["C++", "OOPs", "File Handling"]}
          link="https://github.com/Amaanghazi22/BankingSystem"
          showGitIcon={true}
        />
        <ArchiveCard
          title="SSO Integration - Eventify"
          des="Implemented the SSO enablement flow in Eventify’s admin panel, allowing event organizers to configure identity provider-based access for attendees and teams."
          listItem={["SSO", "Secure Auth", "Admin Panel"]}
          link="https://eventify.io/knowledge-base/how-to-enable-sso-for-your-event"
          showGitIcon={false}
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
            <ArchiveCard
              title="Football News App"
              des="A dynamic football news web app that fetches real-time updates using the News API. Features league-based filtering, search functionality, and a clean, user-friendly UI."
              listItem={["HTML", "CSS", "JavaScript", "News API"]}
              link="https://github.com/Amaanghazi22/_Football_App"
              showGitIcon={true}
            />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
            <ArchiveCard
              title="Domain Integration"
              des="Enabled custom domain support for Eventify landing pages, including subdomain setup, CNAME configuration, and support handoff."
              listItem={["React", "PHP", "CPANEL"]}
              link="https://eventify.io/knowledge-base/how-to-add-a-custom-domain-for-the-event-landing-page" 
              showGitIcon={false}
            />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
            <ArchiveCard
              title="React Mini Projects"
              des="A bundle of React projects including a theme switcher, password generator, GitHub API integration, and more, showcasing component reusability and UI logic handling."
              listItem={["React", "JavaScript", "REST API", "Tailwind CSS"]}
              link="https://github.com/Amaanghazi22/React-Course-with-projects"
              showGitIcon={true}
            />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
