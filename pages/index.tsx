import About from "@/components/About";
import Archive from "@/components/Archive";
import BentoSkills from "@/components/BentoSkills";
import Contact from "@/components/Contact";
import ExperienceNarrative from "@/components/ExperienceNarrative";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Md Amaan Ghazi | Full-Stack Engineer (SaaS + AI)"
        description="Full-stack engineer building SaaS platforms and AI products. Creator of Smriti, an AI revision coach with real users, and module owner at Eventify."
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <FeaturedProjects />
        <ExperienceNarrative />
        <BentoSkills />
        <About />
        <Archive />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
