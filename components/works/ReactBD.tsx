import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer
        <span className="text-textGreen tracking-wide">@TeksMobile</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2024 - Present | Kolkata
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed key features for Eventify (SaaS Platform) including Budget Planner with Recharts visualization and a comprehensive Itinerary feature with timeline.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created a Gamification Quest system to track participant engagement, responses, leaderboards, and winner announcements, enhancing user interaction and event participation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a comprehensive Lead Management system for Eventify CRM integrated with HubSpot API, implementing full user authentication flow with secure login page and registration process with validation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered API integrations for third-party services, implementing OAuth protocols and ensuring data security across the platform.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Tools & technologies used: React, Redux, Laravel, MySQL, Recharts, PHP, Bootstrap, Google APIs, oAuth.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
