import About from "@/components/About";
import Hero from "@/components/Hero";
import BentoSkills from "@/components/BentoSkills";
import Contact from "@/components/Contact";
import ExperienceNarrative from "@/components/ExperienceNarrative";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import FeaturedProjects from "@/components/FeaturedProjects";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Archive from "@/components/Archive";

export default function Home() {
  return (
    <>
      <Head>
        <title>Md Amaan Ghazi | Frontend Engineer</title>
        <meta name="description" content="Portfolio of Md Amaan Ghazi - Frontend Engineer specializing in scalable SaaS products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="w-full font-bodyFont bg-bodyColor text-textLight overflow-x-hidden grainy">
        <Navbar />
        <div className="w-full xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="mx-auto p-4">
            <Hero />
            <BentoSkills />
            <About />
            <ExperienceNarrative />
            <FeaturedProjects />
            <Archive />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
