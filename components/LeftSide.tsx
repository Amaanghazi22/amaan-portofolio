import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Amaanghazi22" target="_blank">
          <span className="w-10 h-10 text-xl bg-white/5 border border-borderColor rounded-full inline-flex items-center justify-center hover:text-cyanAccent hover:border-cyanAccent/50 transition-all duration-300 shadow-accent-glow/5 group">
            <TbBrandGithub className="group-hover:scale-110 duration-300" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/md-amaan-ghazi-722313263"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-white/5 border border-borderColor rounded-full inline-flex items-center justify-center hover:text-fuchsiaAccent hover:border-fuchsiaAccent/50 transition-all duration-300 shadow-accent-glow/5 group">
            <SlSocialLinkedin className="group-hover:scale-110 duration-300" />
          </span>
        </a>
        <a href="https://www.instagram.com/amaan_gh22/" target="_blank">
          <span className="w-10 h-10 text-xl bg-white/5 border border-borderColor rounded-full inline-flex items-center justify-center hover:text-cyanAccent hover:border-cyanAccent/50 transition-all duration-300 shadow-accent-glow/5 group">
            <SlSocialInstagram className="group-hover:scale-110 duration-300" />
          </span>
        </a>
      </div>
      <div className="w-[1px] h-32 bg-borderColor"></div>
    </div>
  );
};

export default LeftSide;
