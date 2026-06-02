"use client";

import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useState } from "react";

const Work = () => {
  const { primaryColor, secondaryColor, tertialColor } = useThemeStore();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const workItems = [
    {
      text: "DEVELOP",
      highlight: false,
      brief:
        "Turning ideas into fast, reliable, and production-ready software.",
    },
    {
      text: "DATA",
      highlight: false,
      brief:
        "Finding meaning in numbers through analysis, structure, and logic.",
    },
    {
      text: "SYSTEM",
      highlight: false,
      brief:
        "Engineering foundations that support growth, change, and complexity.",
    },
    {
      text: "CONTENT",
      highlight: false,
      brief:
        "I produce educational and experimental content around code, systems, and technology.",
    },
  ];

  return (
    <section className="pb-16 md:pb-[210px] select-none">
      <h1
        className="px-6 sm:px-10 md:px-[120px] lg:px-[200px] font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] opacity-70 mb-[5vh] md:mb-[8vh]"
        style={{ color: secondaryColor }}
      >
        WHAT I DO
      </h1>

      <div className="space-y-0">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="border-t py-6 md:py-8 relative overflow-hidden flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between px-6 sm:px-10 md:px-[120px] lg:px-[200px]"
            style={{ borderColor: `${secondaryColor}50` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Base text layer in secondary color */}
            <h2
              className="text-[clamp(2.5rem,7vw,8rem)] font-coolvetica font-black tracking-[4px] leading-tight md:leading-10 relative z-10 cursor-pointer "
              style={{ color: secondaryColor }}
            >
              {item.text}
            </h2>
            <p
              className="z-30 font-coolvetica text-sm sm:text-base max-w-full md:max-w-[30vw] lg:text-[#1E1E1E] sm:text-[#F0EBE7] text-[#AF4319] opacity-70"
            >
              {item.brief}
            </p>

            {/* Expanding overlay background */}
            <div
              className="absolute top-1/2 left-0 w-full transition-all duration-300 ease-in-out z-20 hidden lg:block"
              style={{
                backgroundColor: primaryColor,
                transform: "translateY(-50%)",
                height: hoveredIndex === index ? "100%" : "0%",
              }}
            />

            {/* Dark text layer clipped to overlay */}
            <h2
              className="absolute top-0 left-0 h-full flex items-center text-[clamp(2.5rem,7vw,8rem)] font-coolvetica font-black tracking-[4px] leading-tight md:leading-10 px-6 sm:px-10 md:px-[120px] lg:px-[200px] z-30 pointer-events-none transition-all duration-300 ease-in-out"
              style={{
                color: "#1e1e1e",
                clipPath:
                  hoveredIndex === index
                    ? "inset(0 0 0 0)"
                    : "inset(50% 0 50% 0)",
              }}
            >
              {item.text}
            </h2>
          </div>
        ))}
        {/* Bottom border for the last item */}
        <div
          className="border-t border-opacity-20"
          style={{ borderColor: `${secondaryColor}50` }}
        />
      </div>
    </section>
  );
};

export default Work;
