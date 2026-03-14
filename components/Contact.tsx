const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-24 xl:py-48 flex flex-col gap-4 items-center justify-center text-center"
    >
      <p className="font-monoFont text-sm text-cyanAccent font-bold tracking-[0.3em] uppercase">
        Ready for the next challenge?
      </p>
      <h2 className="font-titleFont text-5xl lgl:text-7xl font-black text-white tracking-tight">
        Get In Touch<span className="text-cyanAccent">.</span>
      </h2>
      <p className="max-w-[600px] text-textDark font-medium leading-relaxed mt-4">
        I’m currently open to new opportunities where I can contribute to complex 
        engineering challenges and help build impactful digital products. 
        Whether you have a question or just want to say hi, my inbox is always open.
      </p>

      <a href="mailto:amaan083.hitit2020@gmail.com" className="mt-10">
        <button className="px-10 py-5 border border-cyanAccent/30 text-cyanAccent font-monoFont text-sm font-bold tracking-widest rounded-full hover:bg-cyanAccent hover:text-bodyColor duration-300 shadow-accent-glow hover:border-cyanAccent uppercase">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
