import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Instructor
        <span className="text-textGreen tracking-wide">@CSI</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Taught core JavaScript concepts to beginners, covering syntax, functions, and promises.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Volunteered in coding workshops, guiding peers through real-time projects and exercises.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
