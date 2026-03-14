import { profileImg } from "@/public/assets";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-24 px-4 flex flex-col gap-12"
    >
      <div className="flex flex-col mb-4">
        <h2 className="text-4xl lgl:text-6xl font-titleFont font-black text-white tracking-tight">
          About My Craft<span className="text-cyanAccent">.</span>
        </h2>
      </div>

      <div className="flex flex-col lgl:flex-row gap-16 items-start">
        <div className="w-full lgl:w-2/3 text-lg text-textDark font-medium flex flex-col gap-6 leading-relaxed">
          <p>
            I am a <span className="text-white">Frontend Engineer</span> bridge-building between complex backend systems and intuitive user interfaces. With <span className="text-cyanAccent">2 years of intensive experience</span> in the SaaS ecosystem, I have developed a deep focus on building scalable architectures that don't just work, but excel under load.
          </p>
          <p>
            My philosophy centers on <span className="text-white">Product Engineering</span>—understanding the business logic and user lifecycle to build code that drives measurable growth. At <span className="text-cyanAccent">TeksMobile</span>, this mindset translated into a <span className="text-white">30% engagement increase</span> by architecting core modules for the Eventify platform.
          </p>

          <div className="p-6 rounded-3xl bg-cyanAccent/5 border border-cyanAccent/10 backdrop-blur-sm">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-cyanAccent text-xl"><AiFillThunderbolt /></span>
              Beyond the Code
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-monoFont text-sm">
              <div className="space-y-1">
                <span className="text-white block font-bold">DSA Proficiency</span>
                <span className="text-textDark">300+ LeetCode problems solved focusing on algorithmic efficiency.</span>
              </div>
              <div className="space-y-1">
                <span className="text-white block font-bold">Certification</span>
                <span className="text-textDark">Mastering Data Structures — Udemy (2024).</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lgl:w-1/3 group">
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-3xl border-2 border-cyanAccent transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 duration-500 opacity-20"></div>
            <div className="relative w-full h-full glass-card p-2 overflow-hidden">
              <Image
                className="rounded-2xl h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                src={profileImg}
                alt="profileImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
