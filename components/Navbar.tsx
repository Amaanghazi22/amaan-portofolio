import { useRef } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
    }
  }
  return (
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor/70 backdrop-blur-xl px-4 border-b border-borderColor">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        {/* ============ Logo Start here ============ */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="p-1 glass-card border-white/10 hover:border-cyanAccent/50 transition-all duration-300"
          >
            <Image className="w-10 h-10" src={logo} alt="logo" />
          </motion.div>
        </Link>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className="hidden mdl:inline-flex items-center gap-10">
          <ul className="flex text-[12px] gap-10 font-monoFont uppercase tracking-widest">
            <Link
              className="flex items-center gap-1 font-bold text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link group"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-bold text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link group"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-cyanAccent/50 group-hover:text-cyanAccent transition-colors">01.</span>
                About
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-bold text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link group"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-cyanAccent/50 group-hover:text-cyanAccent transition-colors">02.</span>
                Experience
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-bold text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link group"
              href="#projects"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-cyanAccent/50 group-hover:text-cyanAccent transition-colors">03.</span>
                Projects
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-bold text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link group"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-cyanAccent/50 group-hover:text-cyanAccent transition-colors">04.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="https://drive.google.com/file/d/1ViORkeLCG7iDa5yfAnmPe2xmW-6pDsxH/view" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-2 rounded-full text-cyanAccent text-[12px] border border-cyanAccent/30 hover:border-cyanAccent hover:bg-cyanAccent/5 font-bold duration-300 shadow-accent-glow/20 font-monoFont uppercase tracking-widest"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-cyanAccent cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-cyanAccent inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-cyanAccent inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-cyanAccent inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black/60 backdrop-blur-sm flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-bodyColor border-l border-white/10 flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-cyanAccent cursor-pointer hover:text-fuchsiaAccent absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-cyanAccent">01.</span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-cyanAccent">02.</span>
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-cyanAccent">03.</span>
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-cyanAccent cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-cyanAccent">04.</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="https://drive.google.com/file/d/1ViORkeLCG7iDa5yfAnmPe2xmW-6pDsxH/view" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-40 h-12 rounded-full text-cyanAccent text-[13px] border-2 border-cyanAccent hover:bg-cyanAccent hover:text-bodyColor font-bold duration-300"
                  >
                    RESUME
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/Amaanghazi22"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-cyanAccent text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-cyanAccent cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/md-amaan-ghazi-722313263"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-fuchsiaAccent text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-fuchsiaAccent cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.instagram.com/amaan_gh22/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-cyanAccent text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-cyanAccent cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href="mailto:amaan083.hitit2020@gmail.com"
              >
                <p>amaan083.hitit2020@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
