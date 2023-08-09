import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Data Scientist.",
      "Wildlife Enthusiast Capturing Wonders Through My Lens 📸",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          AI driven solution for
          <span className="text-designColor capitalize"> OOH Advertising</span>
        </h1>

        <p className="text-base font-bodyFont leading-6 tracking-wide">
          "Generate Analysis Report For Billboards Absolutely free"
        </p>
      </div>

      <Media />
    </div>
  );
};

export default LeftBanner;
