import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="mdl:hidden flex items-center justify-center w-full py-12 gap-6">
      <a href="https://github.com/Amaanghazi22" target="_blank">
        <span className="w-12 h-12 text-xl bg-white/5 border border-borderColor hover:border-cyanAccent/50 text-textLight rounded-full inline-flex items-center justify-center hover:text-cyanAccent cursor-pointer transition-all duration-300 shadow-accent-glow/5">
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/md-amaan-ghazi-722313263"
        target="_blank"
      >
        <span className="w-12 h-12 text-xl bg-white/5 border border-borderColor hover:border-fuchsiaAccent/50 text-textLight rounded-full inline-flex items-center justify-center hover:text-fuchsiaAccent cursor-pointer transition-all duration-300 shadow-accent-glow/5">
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://www.instagram.com/amaan_gh22/" target="_blank">
        <span className="w-12 h-12 text-xl bg-white/5 border border-borderColor hover:border-cyanAccent/50 text-textLight rounded-full inline-flex items-center justify-center hover:text-cyanAccent cursor-pointer transition-all duration-300 shadow-accent-glow/5">
          <SlSocialInstagram />
        </span>
      </a>
    </div>
  );
};

export default Footer;
