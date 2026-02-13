"use client";
import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";

const Motto = () => {
  const { primaryColor, secondaryColor } = useThemeStore();
  return (
    <div className="pb-[80px] md:pb-[100px] relative px-[200px] mt-[55px]">
      <h1
        className="font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] opacity-70"
        style={{ color: secondaryColor }}
      >
        MY MOTTO
      </h1>
      <p className="font-coolvetica text-lg sm:text-xl md:text-4xl leading-relaxed w-full text-center mt-[60px]" style={{color: secondaryColor}}>
            “I work until the work speaks for itself.”
          </p>
    </div>
  );
};

export default Motto;
