import { motion } from "framer-motion";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { RxExternalLink } from "react-icons/rx";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-container mx-auto py-20 mdl:py-44 flex flex-col items-center text-center gap-8 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-1.5 rounded-full border border-cyanAccent/20 bg-cyanAccent/5 text-cyanAccent text-xs font-monoFont tracking-widest uppercase"
      >
        Available for new engineering challenges
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl lgl:text-8xl font-titleFont font-black leading-tight tracking-tight"
      >
        <span className="text-white block">Md Amaan Ghazi.</span>
        <span className="text-gradient block mt-2">
          Architecting Scalable SaaS.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-[700px] text-lg lgl:text-xl text-textDark font-medium leading-relaxed"
      >
        With <span className="text-white">2+ years of experience</span> building scalable digital ecosystems, I architect high-performance <span className="text-white">Frontend systems</span> and real-time platforms.
        Currently leading core modules at{" "}
        <a
          href="https://eventify.io/"
          target="_blank"
          className="text-cyanAccent hover:text-fuchsiaAccent duration-300 font-bold inline-flex items-center gap-1"
        >
          @Eventify <RxExternalLink />
        </a>
        , delivering products for <span className="text-white">10k+ concurrent users</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mt-4"
      >
        <a href="#project">
          <button className="px-8 py-4 glass-card border-none bg-cyanAccent text-bodyColor font-bold text-sm tracking-widest hover:bg-white duration-300 shadow-accent-glow">
            VIEW PROJECTS
          </button>
        </a>
        <a href="/assets/Resume - Md Amaan Ghazi.pdf" target="_blank">
          <button className="px-8 py-4 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 text-white flex items-center gap-2 font-bold text-sm tracking-widest transition-all duration-300">
            <HiOutlineDocumentDownload className="text-xl" /> RESUME
          </button>
        </a>
        <div className="flex gap-4 items-center pl-4 border-l border-white/10">
          <a href="https://github.com/Amaanghazi22" target="_blank" className="text-2xl text-textDark hover:text-cyanAccent duration-300">
            <TbBrandGithub />
          </a>
          <a href="https://linkedin.com/in/md-amaan-ghazi-722313263" target="_blank" className="text-2xl text-textDark hover:text-cyanAccent duration-300">
            <TbBrandLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyanAccent/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </section>
  );
};

export default Hero;
