import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:amaan083.hitit2020@gmail.com" className="group">
        <p className="text-xs rotate-90 w-72 tracking-[0.3em] font-monoFont text-textDark group-hover:text-cyanAccent group-hover:-translate-y-2 transition-all duration-300 uppercase">
          amaan083.hitit2020@gmail.com
        </p>
      </a>
      <span className="w-[1px] h-32 bg-borderColor inline-flex"></span>
    </div>
  );
};

export default RightSide;
