import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Md Amaan Ghazi and I enjoy creating things that
            live on the internet. My interest in web development grew during my
            B.Tech journey at Haldia Institute of Technology, West Bengal,
            India, where I specialized in Information Technology and graduated
            in 2024. What started as curiosity soon turned into a passion for
            full-stack development and building real-world digital solutions.
          </p>
          <p>
            Fast-forward to today, I’m working in a fast-paced environment at a
            SaaS-based product, <span className="text-textGreen">Eventify</span>
            , developed by <span className="text-textGreen">TeksMobile</span>.
            Here, I focus on developing scalable and interactive features,
            integrating APIs, and collaborating across teams to enhance user
            experience.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Redux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Laravel (PHP)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              REST APIs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Bootstrap
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TailwindCSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Shadcn
            </li>
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative">
          <div className="w-full h-80 border-2 border-textGreen rounded-md">
            <Image
              className="rounded-md h-full w-full object-cover"
              src={profileImg}
              alt="profileImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
